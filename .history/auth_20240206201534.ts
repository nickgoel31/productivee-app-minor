import NextAuth, { Session } from "next-auth"
import { PrismaAdapter } from "@auth/prisma-adapter"
import { PrismaClient } from "@prisma/client"
import authConfig from "./auth.config"
import { db } from "./lib/db"
import { JWT } from "next-auth/jwt"

const prisma = new PrismaClient()

export const { 
  handlers: {GET, POST}, 
  auth,
  signIn,
  signOut,
 } = NextAuth({

  pages: {
    signIn: "/sign-in",
    error: "/auth/error"
  },


  events:{
    async linkAccount({user}) {
      await db.user.update({
        where: {id: user.id},
        data: {emailVerified: new Date()}
      })
    }
  },


  callbacks:{

  },

  adapter: PrismaAdapter(db),
  session: { strategy: "jwt" },
  ...authConfig,
})