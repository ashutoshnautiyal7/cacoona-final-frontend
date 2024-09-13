import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import CredentialsProvider from "next-auth/providers/credentials"
import prisma from "@/lib/db"

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        name: {label: "Name", required: true, type: "text", placeholder: "name"},
        email: { label: "Email", required: true, type: "email", placeholder: "jsmith@gmail.com" },
        password: { label: "Password", required: true, type: "password" }
      },
      async authorize(credentials) {
        if (!credentials) return null;
        const { name, email, password } = credentials

        let user = await prisma.user.findFirst({ where: { email } })
        if (!user) {
          user = await prisma.user.create({
            data: {
              name,
              email,
              password: password, // Note: It's recommended to hash passwords before storing
            }
          })
          return user
        }

        if (user.password === password && user.name === name) {
          return user
        }
        return null
      }
    })
  ],
  secret: process.env.NEXTAUTH_SECRET,
  session: {
    strategy: 'jwt',
    maxAge: 30 * 24 * 60 * 60,
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
      }
      return token;
    },
    async session({ session, token }) {
      if (token) {
        session.user.id = token.id;
      }
      return session;
    },
    async signIn({ credentials, profile }) {
      if (credentials) {
        return true;
      }
  
      try {
        const userExist = await prisma.user.findFirst({ where: { email: profile.email } })

        if (!userExist) {
          await prisma.user.create({
            data: {
              name: profile.name,
              email: profile.email,
              image: profile.picture,
              password: null
            }
          })
        }
        return true;
      } catch (error) {
        console.error(error)
        return false
      }
    }
  },
  
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }