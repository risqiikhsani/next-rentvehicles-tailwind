"use client"

import { Button } from "@/components/ui/button";
import { usePathname, useRouter, useSearchParams } from "next/navigation"

export default function Reset(){
    const { replace } = useRouter()
    const pathname = usePathname()
    const onReset = () => {
        replace(`${pathname}`);
    }

    return(
        <Button onClick={onReset}>
            Reset
        </Button>
    )
}