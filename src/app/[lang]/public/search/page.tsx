import Title from "@/components/typography/Title";
import { Locale } from "@/i18n.config";
import PostList from "../../(authenticated)/_page/post-list";
import { Suspense } from "react";
import CircleLoader from "@/components/spinner/circle-loader";

interface Props {
    params: { lang: Locale }
    searchParams?: { [key: string]: string | string[] | undefined }
  }

export default function Page({ params, searchParams }: Props) {
    const keyString = `search=${searchParams?.search}&sort=${searchParams?.sort}&order=${searchParams?.order}`;

    return(
        <div className="container">
            <Suspense key={params.lang + keyString} fallback={<CircleLoader/>}>
            <PostList lang={params.lang} searchParams={searchParams}/>
            </Suspense>

        </div>
    )
}