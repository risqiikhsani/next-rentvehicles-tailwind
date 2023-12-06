import NextBreadcrumb from "@/components/breadcrumb";
import { Locale } from "@/i18n.config";
import LeftNavBar from "./_page/left-navbar";
import CheckUserCompletion from "./_page/check-user-completion";
import { AppHandler } from "@/context/App";


interface Props {
    children: React.ReactNode
    params: { lang: Locale }
}
export default function Layout({ children, params }: Props) {
    return (
        <>
            <div className="md:container md:mx-auto flex">
                <AppHandler>
                <CheckUserCompletion>
                    <LeftNavBar lang={params.lang} />
                    <div className='flex-1 p-4'>
                        {/* <NextBreadcrumb
                    homeElement={'Home'}
                    separator={<span> | </span>}
                    activeClasses='text-slate-800'
                    containerClasses='flex py-5 text-slate-500'
                    listClasses='mx-2 '
                    capitalizeLinks
                /> */}
                        {children}
                    </div>
                </CheckUserCompletion>
                </AppHandler>
            </div>
        </>
    )
}