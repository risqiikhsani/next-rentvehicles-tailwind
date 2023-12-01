'use client'

import Title from "@/components/typography/Title"
import { Button } from "@/components/ui/button"

 
export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <html>
      <body>
        <Title title="Something went wrong [global-error] !"/>
        <Button onClick={() => reset()}>Try again</Button>
      </body>
    </html>
  )
}