"use server"

import { signIn } from "@/auth"

export const loginOAuth = async (provider: "github" | "google") => {
    await signIn(provider, {
        callbackUrl: "/",
    })
}