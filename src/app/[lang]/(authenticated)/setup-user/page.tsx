import Title from "@/components/typography/Title";
import { Locale } from "@/i18n.config";
import { getDictionary } from "@/lib/dictionary";
import SetupUser from "./_page/form";
import { cookies } from "next/headers";
import { UserType } from "@/types/types";

async function getData() {
    // const res = await fetch('http://localhost:8080/api/posts',{ next: { tags: ['posts'] } })
    const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/me/user`, {
        cache: "no-store",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${cookies().get("accesstoken")?.value}`,
        },
    });

    if (!res.ok) {
        // This will activate the closest `error.js` Error Boundary
        throw new Error("Failed to fetch data");
    }

    return res.json();
}

export default async function Page({ params }: { params: { lang: Locale } }) {
    const user: UserType = await getData()
    const dict = await getDictionary(params.lang)

    return (
        <>
            <Title title={dict.setup_user.title} text={dict.setup_user.description} />
            <SetupUser defaultValue={user}/>
        </>
    )
}