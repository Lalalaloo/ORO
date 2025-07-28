"use client";

import React from 'react';
import { UserButton, useUser } from '@stackframe/stack';

export default function Greeting() {
  const user = useUser();

  return (
    <div className="flex flex-col items-center py-8">
      <div className="flex justify-center items-center gap-8">
        <div className="scale-300 inline-flex rounded-full border-2 border-[#D4AF37] p-0">
          <UserButton />
        </div>
        <p className="p-7 font-[family-name:var(--font-crimson-pro)] font-bold text-[#D4AF37] text-4xl">
          Welcome Back, {user?.displayName || user?.primaryEmail || 'Guest'}!
        </p>
      </div>
    </div>
  );
}