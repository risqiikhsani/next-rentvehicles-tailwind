import PostList from "./_page/post-list";
import { Locale } from "@/i18n.config";

interface Props {
  params: { lang: Locale }
  searchParams?: { [key: string]: string | string[] | undefined }
}

export default async function Home({ params, searchParams }: Props) {
  return (
    <>
      <PostList lang={params.lang} searchParams={searchParams}/>
    </>

  );
}
