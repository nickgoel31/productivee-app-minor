import {PrismaClient} from "@prisma/client"

declare global{
    var prisma: PrismaClient | undefined;
}

export const db = globalThis.prisma || new PrismaClient()
//TODO CHNAGE TO NOT EQUALS TO
if(process.env.NODE_ENV === "production") globalThis.prisma