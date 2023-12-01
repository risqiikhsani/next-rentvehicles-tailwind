import Image from "next/image";

export default function CircleLoader(){
    return(
        <>
          <Image src="/loading/loading_circle.png" alt="loading" width={50} height={50} className="animate-spin z-50 mx-auto mt-40" />
        </>
    )
}