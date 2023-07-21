// "use client"
// import React from 'react'
// import { SessionProvider } from "next-auth/react"
// function Provider({children}) {
//   return (
//     <SessionProvider >
//     {children}
//   </SessionProvider>
//   )
// }

// export default Provider


import React, { ReactNode } from 'react';
import { SessionProvider } from "next-auth/react";

interface ProviderProps {
  children: ReactNode;
}

function Provider({ children }: ProviderProps) {
  return (
    <SessionProvider>
      {children}
    </SessionProvider>
  );
}

export default Provider;
