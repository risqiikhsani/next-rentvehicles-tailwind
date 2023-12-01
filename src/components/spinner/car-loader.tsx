import Image from "next/image";

export default function CarLoader(){
    return(
        <>
          <Image src="/loading/loading.png" alt="loading" width={200} height={200} className="animate-spin z-50 mx-auto mt-40" />
        </>
    )
}