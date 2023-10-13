import NextBreadcrumb from "@/components/breadcrumb";
import LeftNavBar from "@/components/left-navbar";

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <LeftNavBar />
            <div className='flex-1 p-4'>
                <NextBreadcrumb
                    homeElement={'Home'}
                    separator={<span> | </span>}
                    activeClasses='text-slate-800'
                    containerClasses='flex py-5 text-slate-500'
                    listClasses='mx-2 '
                    capitalizeLinks
                />
                {children}
            </div>
        </>
    )
}