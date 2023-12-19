import { Suspense } from "react";
import PostList from "./_page/post-list";
import { Locale } from "@/i18n.config";
import CircleLoader from "@/components/spinner/circle-loader";

interface Props {
  params: { lang: Locale }
  searchParams?: { [key: string]: string | string[] | undefined }
}

export default async function Home({ params, searchParams }: Props) {
  const keyString = Object.entries(searchParams || {})
    .map(([key, value]) => `${key}=${value}`)
    .join('&');

  return (
    <>
      <Suspense key={params.lang + (keyString ? `&${keyString}` : '')} fallback={<CircleLoader/>}>
        <PostList lang={params.lang} searchParams={searchParams} />
      </Suspense>
    </>
  );
}
