import Title from "@/components/typography/Title";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"


export default function Page() {
    return (
        <>
            <Title title="User Detail" />
            <div className="flex flex-col items-center justify-center">

                <Avatar className="h-32 w-32">
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <h1 className="my-4 text-5xl">John Steven</h1>
            </div>

        </>
    )
}