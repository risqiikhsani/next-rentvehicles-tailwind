import LeftNavBar from "@/components/left-navbar";

export default function Layout({children}:{children:React.ReactNode}){
    return(
        <>
        <LeftNavBar />
        <div className='flex-1 p-4'>
        {children}
        </div>
        </>
    )
}