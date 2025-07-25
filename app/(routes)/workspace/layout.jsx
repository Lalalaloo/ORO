import React from 'react'
import WorkspaceHeader from './_components/WorkspaceHeader'
export default function WorkspaceLayout({ children }) {
  return (
    <div>
        <WorkspaceHeader/>
        {children}</div>
  )
}
