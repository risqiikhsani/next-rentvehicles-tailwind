import LeftNavBarSettings from "@/components/left-navbar-settings";

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <main className="flex">
                <LeftNavBarSettings />
                <div className='flex-1 p-4'>
                    {children}
                </div>
            </main>
        </>
    )
}