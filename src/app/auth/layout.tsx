import Image from "next/image";

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <div className="md:flex md:items-center justify-center w-full">
                <div className="md:relative">
                    <Image src="/login1.jpg" alt="car" className="hidden sm:block w-full h-auto rounded-lg " width={500} height={800}/>
                    <div className="md:absolute inset-0 flex items-center justify-center">
                        <div className="w-screen md:h-fit md:w-fit opacity-90 bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded-2xl md:p-8 ">
                            {children}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}