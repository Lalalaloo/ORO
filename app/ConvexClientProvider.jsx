"use client";

import LoadingPage from "@/components/ui/LoadingPage";
import React from 'react'
import {ConvexProvider, ConvexReactClient} from 'convex/react'; 
import Provider from './provider';
import {Suspense} from 'react'
export const ConvexClientProvider = ({children}) => {

    const convex = new ConvexReactClient(process.env.NEXT_PUBLIC_CONVEX_URL);
  return (
    <Suspense fallback = {<div><LoadingPage/></div>}>
      
      <ConvexProvider client={convex}>
        
        <Provider>
          {children}
        </Provider>

      </ConvexProvider>

    </Suspense>
  )
}
