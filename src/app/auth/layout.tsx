import Image from "next/image";

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <>

            <div className="flex items-center justify-center h-screen w-full">
                <div className="relative ">
                    <Image src="/login1.jpg" alt="car" className="hidden sm:block w-full h-auto rounded-lg " width={500} height={800}/>
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="opacity-90 bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded-2xl md:p-8 ">
                            {children}
                        </div>
                    </div>
                </div>
            </div>


        </>
    )
}