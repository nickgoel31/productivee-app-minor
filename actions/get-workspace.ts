"use server"

import { db } from "@/lib/db"
import { auth } from "@clerk/nextjs";
import { GetServerSidePropsContext } from "next";

interface IParams {
    workspaceId: string;
}


export const getWorkspaceById = async (params: IParams, userId:string) => {


    const {workspaceId} = params;
    const workspace = await db.workspace.findUnique({
        where:{
            id: workspaceId,
            userId
        },
        include:{
            tasks:true
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

export const getAllWorkspacesByUserId = async (userId:string) => {
    const workspaces = await db.workspace.findMany({
        where:{
            userId
        }
    })

    if(!workspaces) return;

    return workspaces;
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