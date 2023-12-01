import CustomLink from "@/components/CustomLink";
import { Separator } from "@/components/ui/separator";
import { Locale } from "@/i18n.config";
import Image from "next/image";

export default function Layout({ children,params }: { children: React.ReactNode,params:{lang:Locale} }) {
    return (
        <>
            <div className="md:flex md:items-center justify-center w-full">
                <div className="md:relative">
                    <Image src="/others/login.jpg" alt="car" className="hidden sm:block w-full h-auto rounded-lg " width={500} height={800} />
                    <div className="md:absolute inset-0 flex items-center justify-center">
                        <div className="w-screen md:h-fit md:w-fit opacity-90 bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded-2xl md:p-8 ">
                            <div className="flex mx-auto flex-col">
                                <div className="flex h-5 items-center space-x-4 text-sm m-4 justify-center">
                                    <CustomLink lang={params.lang} href="/auth/login">Login</CustomLink>
                                    <Separator orientation="vertical" />
                                    <CustomLink lang={params.lang} href="/auth/register">Sign Up</CustomLink>
                                    <Separator orientation="vertical" />
                                    <CustomLink lang={params.lang} href="/auth/forgot-password">Forgot Password</CustomLink>
                                </div>
                                {children}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}