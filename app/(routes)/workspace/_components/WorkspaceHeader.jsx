import React from 'react'
import Image from 'next/image'
import { UserButton } from '@stackframe/stack';

export default function WorkspaceHeader() {
  return (
    <div>
        <Image src="/oroLogo.png" alt="Logo" width={100} height={100} 
        className = 'w-[240px] h-full'/>

        <UserButton/>
        <p> Welcome Back, Name! </p>



    </div>
  )
}
