import Title from "@/components/typography/Title";
import { Locale } from "@/i18n.config";
import PostList from "../../(authenticated)/_page/post-list";
import { Suspense } from "react";
import CircleLoader from "@/components/spinner/circle-loader";
import { getDictionary } from "@/lib/dictionary";
import Search from "../../(authenticated)/_page/search";
import Filter from "../../(authenticated)/_page/filter";
import Sort from "../../(authenticated)/_page/sort";
import Reset from "../../(authenticated)/_page/reset";
import { Separator } from "@/components/ui/separator";

interface Props {
  params: { lang: Locale };
  searchParams?: { [key: string]: string | string[] | undefined };
}

export default async function Page({ params, searchParams }: Props) {
  const keyString = Object.entries(searchParams || {})
    .map(([key, value]) => `${key}=${value}`)
    .join("&");

  const dict = await getDictionary(params.lang);
  return (
    <div className="container">
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
    </div>
  );
}
