"use client"

import { Button } from "@/components/ui/button";
import { useEffect } from "react"
import { toast } from "sonner";



export default function Page() {

    useEffect(() => {
        const snapSrcUrl = 'https://app.sandbox.midtrans.com/snap/snap.js';
        const myMidtransClientKey = 'Mid-client-_pjIE20uMi5JDa5O'; //change this according to your client-key
        
        const script = document.createElement('script');
        script.src = snapSrcUrl;
        script.setAttribute('data-client-key', myMidtransClientKey);
        script.async = true;

        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        }
    }, []);

    const payClick = () => {
        
        window.snap.pay('8f1a6552-3f33-4e7b-930f-913ac895bf45', {
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