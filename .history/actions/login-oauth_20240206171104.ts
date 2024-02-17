"use server"

import { signIn } from "@/auth"

export const loginOAuth = async (provider: "github") => {
    await signIn(provider, {
        callbackUrl: "/settings",
    })
}