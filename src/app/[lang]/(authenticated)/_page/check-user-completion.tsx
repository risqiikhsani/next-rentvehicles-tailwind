"use client"

import { useAuth } from "@/context/Auth"
import { useRouter } from "next/navigation";
import { ReactNode, useEffect } from "react";
import { usePathname, useSearchParams } from 'next/navigation'

export default function CheckUserCompletion({
  children
}: {
  children: ReactNode
}) {
  const router = useRouter();
  const { user, account } = useAuth()

  // https://nextjs.org/docs/app/api-reference/functions/use-router#router-events
  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    console.log("user name",user.name)
    if (user.name == "") {
      router.push("/setup-user")
    }
  }, [pathname, searchParams])

  return (
    <>
      {children}
    </>
  )
}