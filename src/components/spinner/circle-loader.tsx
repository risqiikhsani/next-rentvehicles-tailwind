import Image from "next/image";

export default function CircleLoader(){
    return(
        <>
          <Image src="/loading_circle.png" alt="loading" width={200} height={200} className="animate-spin z-50 mx-auto mt-40" />
        </>
    )
}