// pages/workspace/[workspaceId].tsx

import { GetServerSidePropsContext } from "next";
import { getWorkspaceById } from "@/actions/get-workspace";

interface WorkspaceProps {
  workspace: {
    id: string;
    name: string;
    // Define other properties here
  };
}

const WorkspacePage = ({ workspace }: WorkspaceProps) => {
  // Render workspace data here
};

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const { params } = context;
  const workspaceId = params?.workspaceId as string;

  const workspace = await getWorkspaceById({ listingId: workspaceId });

  if (!workspace) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      workspace,
    },
  };
}

export default WorkspacePage;
