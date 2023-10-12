import Image from "next/image";

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <>

            <div className="flex w-full">
                <Image src="/login1.jpg" width={640} height={960} alt="login" className="hidden lg:block rounded-l-2xl" />

                <div className="flex items-center justify-center w-full lg:bg-gradient-to-r from-violet-500 to-fuchsia-500 lg:rounded-r-2xl">
                    <div className="p-4 ">
                        {children}
                    </div>
                </div>
            </div>


        </>
    )
}