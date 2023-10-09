import LeftNavBar from "@/components/left-navbar";

export default function Layout({children}:{children:React.ReactNode}){
    return(
        <>
        <LeftNavBar />
        {children}
        </>
    )
}