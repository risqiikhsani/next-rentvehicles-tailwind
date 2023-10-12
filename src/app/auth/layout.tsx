import Image from "next/image";

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <>
        
            <div className="flex w-full">
                <div>
                    <Image src="/login1.jpg" width={640} height={960} alt="login" className="rounded-xl" />
                </div>

                <div className="flex items-center justify-center bg-slate-400 w-full">
                    <div className="bg-slate-500 p-4">
                        {children}
                    </div>
                </div>
            </div>

        </>
    )
}