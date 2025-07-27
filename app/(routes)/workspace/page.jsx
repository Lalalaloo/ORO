
import LoadingPage from "@/components/ui/LoadingPage";
import React from 'react'
import Greeting from './_components/Greeting' 
import WorkspaceHeader from './_components/WorkspaceHeader'
export default function Workspace() {
  return (
    <div 
      className="min-h-screen bg-root"
    >
      <div className="flex items-center justify-center min-h-[100vh]">
        <WorkspaceHeader/>
        <Greeting />
        
      </div>
    </div>
  )
}