"use client"
import { Session } from "next-auth"
import {SessionProvider} from "next-auth/react"

interface Props {
    children:React.ReactNode
    session:any
}

export default function NextAuthProvider({children,session} : Props){
    return (
        <SessionProvider session={session}>
            {children}
        </SessionProvider>
    )
}