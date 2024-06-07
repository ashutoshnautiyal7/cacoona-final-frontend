import GoogleProvider from "next-auth/providers/google";
import prisma from "./db";
export const authOptions = {
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID || "",
            clientSecret: process.env.GOOGLE_CLIENT_SECRET || ""
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
        const userExist = await prisma.user.findFirst({ where: { email: profile.email } })

        if (!userExist) {
          const user = await prisma.user.create({
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
  },
    secret: process.env.NEXTAUTH_SECRET || "secret"
  }