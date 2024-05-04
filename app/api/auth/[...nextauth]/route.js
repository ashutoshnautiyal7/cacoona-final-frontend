import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import CredentialsProvider from "next-auth/providers/credentials"
// import bcrypt from "bcrypt"
import db from '../../../../lib/db'

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
      secret: process.env.NEXT_AUTH_SECRET,
    }),
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        name: {label: "Name", type: "text", placeholder: "name"},
        email: { label: "Email", type: "email", placeholder: "jsmith@gmail.com" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials, req) {
        const { name, email, password } = credentials

        let user = await db.user.findFirst({ where: { email } })
        if (!user) {
         
          user = await db.user.create({
            data: {
              name,
              email,
              password: password,
            }
          })

          console.log("the user after creation " , user);

          return user
        }

        if (user.password === password) {
        
            return user
        }
        return null
      }
    })
  ],
  callbacks: {
    async session({ session }) {
      return session
    },
    async signIn({credentials,  profile }) {

      if (credentials) {
        // If it's from the Credentials provider, we don't need to create a new user
        // as the user will be created or authenticated in the `authorize` method
        return true;
      }
  
      try {
        const userExist = await db.user.findFirst({ where: { email: profile.email } })

        if (!userExist) {
          const user = await db.user.create({
            data: {
              name: profile.name,
              email: profile.email,
              image: profile.picture,
              password: null
            }
          })
        }
      } catch (error) {
        console.log(error)
        return false
      }

      return true
    }
  }
})

export { handler as GET, handler as POST }