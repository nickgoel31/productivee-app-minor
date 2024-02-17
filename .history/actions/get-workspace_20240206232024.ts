"use server"

import { db } from "@/lib/db"
import { GetServerSidePropsContext } from "next";

interface IParams {
    workspaceId: string;
}


export const getWorkspaceById = async (params: IParams) => {
    const {workspaceId} = params;
    const workspace = await db.workspace.findUnique({
        where:{
            id: workspaceId
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