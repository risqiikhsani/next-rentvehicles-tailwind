import { Suspense } from "react";
import PostList from "./_page/post-list";
import { Locale } from "@/i18n.config";
import CircleLoader from "@/components/spinner/circle-loader";
import Title from "@/components/typography/Title";
import Search from "./_page/search";
import Filter from "./_page/filter";
import Sort from "./_page/sort";
import Reset from "./_page/reset";
import { Separator } from "@/components/ui/separator";
import { getDictionary } from "@/lib/dictionary";

interface Props {
  params: { lang: Locale };
  searchParams?: { [key: string]: string | string[] | undefined };
}

export default async function Home({ params, searchParams }: Props) {
  const keyString = Object.entries(searchParams || {})
    .map(([key, value]) => `${key}=${value}`)
    .join("&");

  const dict = await getDictionary(params.lang);

  return (
    <>
      <Title title={dict.home.title} text={dict.home.description} />

      <Suspense fallback={<p>Loading...</p>}>
        <div className="flex flex-col md:flex-row my-5 md:justify-between gap-2">
          <Search />
          <div className="gap-2 flex w-full md:w-fit justify-between md:justify-normal">
            <Filter />
            <Sort />
            <Reset />
          </div>
        </div>
      </Suspense>

      <Separator className="my-6" />
      <Suspense
        key={params.lang + (keyString ? `&${keyString}` : "")}
        fallback={<CircleLoader />}
      >
        <PostList lang={params.lang} searchParams={searchParams} />
      </Suspense>
    </>
  );
}
