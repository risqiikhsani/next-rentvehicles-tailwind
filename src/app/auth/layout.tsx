import Image from "next/image";

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <>

            <div className="flex w-full">
                <Image src="/login1.jpg" width={640} height={960} alt="login" className="hidden lg:block rounded-l-2xl" />

                <div className="flex mx-auto items-center justify-center h-screen w-max bg-[url('/login1.jpg')] lg:w-full lg:h-full lg:bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded-2xl lg:rounded-r-2xl lg:rounded-l-none">
                    <div className="p-4 opacity-90">
                        {children}
                    </div>
                </div>
            </div>


        </>
    )
}