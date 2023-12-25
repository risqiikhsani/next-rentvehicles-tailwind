"use client"

import { Button } from "@/components/ui/button";
import { useEffect } from "react"
import { toast } from "sonner";



export default function Page() {

    useEffect(() => {

    }, []);

    const payClick = () => {
        
        snap.pay('8f1a6552-3f33-4e7b-930f-913ac895bf45', {
            onSuccess: function(result: any){
              /* You may add your own implementation here */
                toast.success("Success payment")
            },
            onPending: function(result: any){
              /* You may add your own implementation here */
                toast.info("on pending..")
            },
            onError: function(result: any){
              /* You may add your own implementation here */
              toast.error("Payment failed")
            },
            onClose: function(){
              /* You may add your own implementation here */
              
            }
          })
    }

    return (
        <>
            <Button onClick={payClick}>Pay</Button>
        </>
    )
}