import Title from "@/components/typography/Title";
import { Locale } from "@/i18n.config";
import PostList from "../../(authenticated)/_page/post-list";

interface Props {
    params: { lang: Locale }
    searchParams?: { [key: string]: string | string[] | undefined }
  }

export default function Page({ params, searchParams }: Props) {
    return(
        <div className="container">
            <PostList lang={params.lang} searchParams={searchParams}/>
        </div>
    )
}