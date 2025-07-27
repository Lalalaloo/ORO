"use client";
import { Button } from "@/components/ui/button";
import React from 'react';
import Image from 'next/image';
import { useUser } from '@stackframe/stack';

export default function WorkspaceHeader() {
  const user = useUser();
  
  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-transparent backdrop-blur-md">
      <div className="grid grid-cols-3 items-center px-4 sm:px-6 lg:px-8 py-3 sm:py-4 lg:py-6">
        
        <div className="flex justify-start">
          <h1 className="text-lg sm:text-xl lg:text-2xl font-semibold">.</h1>
        </div>

        <div className="flex justify-center">
          <Image src="/oro.svg" alt="Logo" width={50} height={50} className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:w-14" />
        </div>

        <div className="flex justify-end">
          <Button variant="outline" className="border-2 border-[#D4AF37] p-2 sm:p-3">
            <Image src="/Crown.svg" alt="Upgrade" width={20} height={20} className="w-5 h-5 sm:w-6 sm:h-6" />
          </Button>
        </div>
        
      </div>
    </div>
  )
}