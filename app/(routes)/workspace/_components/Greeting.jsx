"use client";

import React from 'react';
import { UserButton, useUser } from '@stackframe/stack';

export default function Greeting() {
  const user = useUser();

  return (
    <div>
        <div className = "flex justify-center gap-2 items-center">
          <div className="user-profile-large inline-flex items-center justify-center p-2 rounded-full border-2 border-[#D4AF37] shadow-md hover:scale-105 transition-transform">
            <UserButton />
          </div>


          <p className= "font-[family-name:var(--font-crimson-pro)] font-bold text-[#D4AF37]" > Welcome Back, {user?.displayName || user?.primaryEmail || 'Guest'}! </p>
        </div>
   
    </div>
  )
}