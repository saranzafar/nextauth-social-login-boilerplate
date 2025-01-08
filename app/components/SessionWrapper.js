"use client"

import { SessionProvider } from "next-auth/react"

export const SessionWrapper = ({ children }) => {
    return (
        <div>
            <SessionProvider>{children}</SessionProvider>
        </div>
    )
}