"use server"

import { db } from "@/lib/db"
import { auth } from "@clerk/nextjs";
import { GetServerSidePropsContext } from "next";

interface IParams {
    workspaceId: string;
}


export const getWorkspaceById = async (params: IParams) => {

    const {userId} = auth()

    if(!userId) return Response.redirect(new URL("/sign-in"))

    const {workspaceId} = params;
    const workspace = await db.workspace.findUnique({
        where:{
            id: workspaceId,
            userId
        },
        include:{
            todos:true
        }
    })

    if(!workspace) {
        return null;
    }
    
    return {
        ...workspace,
        createdAt: workspace.createdAt.toISOString(),
    }
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
    const { params } = context;
    const workspaceId = params?.workspaceId as string;
  
    return {
      props: {
        workspaceId,
      },
    };
  }