import React, { useEffect, useState } from 'react'
import Sidebar from './_components/sidebar'
import { getAllWorkspaces } from '@/data/workspaces'
import { Workspace } from '@/types'

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  const [workspaces, setWorkspaces] = useState<Workspace[]>([]);

  useEffect(() => {
    const fetchWorkspaces = async () => {
      const workspacesData = await getAllWorkspaces();
      setWorkspaces(workspacesData);
    };
    fetchWorkspaces();
  }, []);

  return (
    <div className='h-full flex  gap-10 justify-start'>
      <Sidebar workspaces={workspaces} />
      {children}
    </div>
  )
}

export default MainLayout;
