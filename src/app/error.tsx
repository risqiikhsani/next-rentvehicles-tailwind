'use client' // Error components must be Client Components

import { useEffect } from 'react'
import Title from "@/components/typography/Title"
import { Button } from "@/components/ui/button"


export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string }
    reset: () => void
}) {
    useEffect(() => {
        // Log the error to an error reporting service
        console.error(error)
    }, [error])

    return (
        <div>
            <Title title="Something went wrong [error] !" />
            <Button onClick={() => reset()}>Try again</Button>
        </div>
    )
}