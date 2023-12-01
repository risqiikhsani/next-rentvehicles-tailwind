import PostList from "./_page/post-list";
import { Locale } from "@/i18n.config";

interface Props {
  params: { lang: Locale }
}

export default async function Home({params}:Props) {
  return (
    <>
        <PostList lang={params.lang}/>
    </>

  );
}
