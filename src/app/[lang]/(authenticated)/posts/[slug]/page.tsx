import Image from "next/image";

import { HeartIcon } from "@heroicons/react/24/solid";
import { KeyIcon } from "@heroicons/react/24/solid";
import { LockClosedIcon } from "@heroicons/react/24/solid";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Title from "@/components/typography/Title";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Review from "@/components/review";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";
import { PostType } from "@/types/types";
import Buttons from "./_page/Buttons";
import { Locale } from "@/i18n.config";
import { getDictionary } from "@/lib/dictionary";
import localeCurrency from "@/lib/currency";
import Images from "./_page/images";


async function getData(postId: string) {
  // const res = await fetch('http://localhost:8080/api/posts',{ next: { tags: ['posts'] } })
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/posts/${postId}`,
    { cache: "no-store" }
  );

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function Page({
  params,
}: {
  params: { slug: string; lang: Locale };
}) {
  const slug = params.slug;

  const data = await getData(slug);
  const dictionary = await getDictionary(params.lang);




  const PostDetail = (data: PostType) => {
    return (
      <>
        <Title
          title={dictionary.post_detail.title}
          text={dictionary.post_detail.description}
        />
        <div className="grid md:grid-cols-3 gap-4 ">
          <div className="relative">
            <div className="md:sticky top-20 left-0 ">
              <Table className="block md:hidden w-full my-2">
                <TableBody>
                  <TableRow className="hover:bg-inherit">
                    <TableCell className="font-medium">
                      <Badge variant="outline" className="my-2">
                        {dictionary.post_detail.brand}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-left text-xl">
                      {data.brand}
                    </TableCell>
                  </TableRow>
                  <TableRow className="hover:bg-inherit">
                    <TableCell className="font-medium">
                      <Badge variant="outline" className="my-2">
                        {dictionary.post_detail.model}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-left text-xl">
                      {data.brand_model}
                    </TableCell>
                  </TableRow>
                  <TableRow className="hover:bg-inherit">
                    <TableCell className="font-medium">
                      <Badge variant="outline" className="my-2">
                        {dictionary.post_detail.year}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-left">{data.year}</TableCell>
                  </TableRow>
                  <TableRow className="hover:bg-inherit">
                    <TableCell className="font-medium">
                      <Badge variant="outline" className="my-2">
                        {dictionary.post_detail.car_type}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-left">
                      {data.vehicle_type}
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
              <Image
                className="rounded-xl"
                src={data.MainImage.url}
                alt="pic"
                width={500}
                height={500}
              />

              {/* <div className="flex overflow-x-auto w-fit">
              {data.Images && data.Images.map((a,i) => (
                <Image
                  key={i}
                  className="rounded-xl m-4 w-20 h-20"
                  src={a.url}
                  alt="pic"
                  width={500}
                  height={500}
                />
              ))}
              </div> */}

              <Images data={data}/>
              
              <div className="hidden md:block">
                <Buttons data={data} />
              </div>
            </div>
          </div>

          <div className="col-span-2 mt-0 overflow-y-auto ">
            <Table className="max-w-sm hidden md:block">
              <TableBody>
                <TableRow className="hover:bg-inherit">
                  <TableCell className="font-medium">
                    <Badge variant="outline" className="my-2">
                      {dictionary.post_detail.brand}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-left text-xl">
                    {data.brand}
                  </TableCell>
                </TableRow>
                <TableRow className="hover:bg-inherit">
                  <TableCell className="font-medium">
                    <Badge variant="outline" className="my-2">
                      {dictionary.post_detail.model}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-left text-xl">
                    {data.brand_model}
                  </TableCell>
                </TableRow>
                <TableRow className="hover:bg-inherit">
                  <TableCell className="font-medium">
                    <Badge variant="outline" className="my-2">
                      {dictionary.post_detail.year}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-left">{data.year}</TableCell>
                </TableRow>
                <TableRow className="hover:bg-inherit">
                  <TableCell className="font-medium">
                    <Badge variant="outline" className="my-2">
                      {dictionary.post_detail.car_type}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-left">
                    {data.vehicle_type}
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>

            <div className="flex flex-col justify-end gap-4">
              <div className="grid gap-4 md:grid-cols-1 lg:grid-cols-3 my-4">
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">
                      {dictionary.post_detail.price_per_day} (1 day)
                    </CardTitle>

                  </CardHeader>
                  <CardContent>
                    <p className="text-2xl font-bold">
                      {localeCurrency(data.price_per_day_after_discount,params.lang)}
                    </p>
                    {data.discount_percentage != 0 && (
                      <p className="font-light line-through">
                        {localeCurrency(data.price_per_day,params.lang)}
                      </p>
                    )}
                    {data.discount_percentage != 0 && (
                      <p className="text-xs text-muted-foreground">
                        Discount {data.discount_percentage} %
                      </p>
                    )}
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">
                      {dictionary.post_detail.price_per_week} (7 days)
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-2xl font-bold">
                      {localeCurrency(data.price_per_week_after_discount,params.lang)}
                    </p>
                    {data.discount_percentage != 0 && (
                      <p className="font-light line-through">
                        {localeCurrency(data.price_per_week,params.lang)}
                      </p>
                    )}
                    {data.discount_percentage != 0 && (
                      <p className="text-xs text-muted-foreground">
                        Discount {data.discount_percentage} %
                      </p>
                    )}
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">
                      {dictionary.post_detail.price_per_month} (30 days)
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-2xl font-bold">
                      {localeCurrency(data.price_per_month_after_discount, params.lang)}
                    </p>
                    {data.discount_percentage != 0 && (
                      <p className="font-light line-through ">
                        {localeCurrency(data.price_per_month, params.lang)}
                      </p>
                    )}
                    {data.discount_percentage != 0 && (
                      <p className="text-xs text-muted-foreground">
                        Discount {data.discount_percentage} %
                      </p>
                    )}
                  </CardContent>
                </Card>
              </div>

              <Table className="max-w-sm">
                <TableBody>
                  <TableRow className="hover:bg-inherit">
                    <TableCell className="font-medium">
                      <Badge variant="outline" className="my-2">
                        {dictionary.post_detail.available}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-left">
                      {data.available ? "true" : "false"}
                    </TableCell>
                  </TableRow>
                  <TableRow className="hover:bg-inherit">
                    <TableCell className="font-medium">
                      <Badge variant="outline" className="my-2">
                        {dictionary.post_detail.poster}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-left">{data.UserID}</TableCell>
                  </TableRow>
                </TableBody>
              </Table>

              <Card>
                <CardHeader>
                  <CardTitle>
                    {dictionary.post_detail.specification}
                  </CardTitle>
                  <CardDescription>
                    {dictionary.post_detail.details}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-8">
                    <div className="flex items-center">
                      <Avatar className="h-9 w-9 items-center justify-center space-y-0 border dark:bg-slate-400">
                        <AvatarImage
                          src="/specification/icons8-gearbox-32.png"
                          alt="Avatar"
                        />
                        <AvatarFallback>OM</AvatarFallback>
                      </Avatar>
                      <div className="ml-4 space-y-1">
                        <p className="text-sm font-medium leading-none">
                          {dictionary.post_detail.transmission}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          Learn more about transmission.
                        </p>
                      </div>
                      <div className="ml-auto font-medium">
                        {data.transmission}
                      </div>
                    </div>
                    <div className="flex items-center">
                      <Avatar className="flex h-9 w-9 items-center justify-center space-y-0 border dark:bg-slate-400">
                        <AvatarImage
                          src="/specification/icons8-fuel-32.png"
                          alt="Avatar"
                        />
                        <AvatarFallback>JL</AvatarFallback>
                      </Avatar>
                      <div className="ml-4 space-y-1">
                        <p className="text-sm font-medium leading-none">
                          {dictionary.post_detail.fuel_type}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          Learn more about fuel types.
                        </p>
                      </div>
                      <div className="ml-auto font-medium">
                        {data.fuel_type}
                      </div>
                    </div>
                    <div className="flex items-center">
                      <Avatar className="h-9 w-9 items-center justify-center space-y-0 border dark:bg-slate-400">
                        <AvatarImage
                          src="/specification/icons8-seat-32.png"
                          alt="Avatar"
                        />
                        <AvatarFallback>IN</AvatarFallback>
                      </Avatar>
                      <div className="ml-4 space-y-1">
                        <p className="text-sm font-medium leading-none">
                          {dictionary.post_detail.seats}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          How many seats inside
                        </p>
                      </div>
                      <div className="ml-auto font-medium">2</div>
                    </div>
                    <div className="flex items-center">
                      <Avatar className="h-9 w-9 items-center justify-center space-y-0 border dark:bg-slate-400">
                        <AvatarImage
                          src="/specification/icons8-queue-50.png"
                          alt="Avatar"
                        />
                        <AvatarFallback>WK</AvatarFallback>
                      </Avatar>
                      <div className="ml-4 space-y-1">
                        <p className="text-sm font-medium leading-none">
                          {dictionary.post_detail.estimate_max_people}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          Max number of people fits in
                        </p>
                      </div>
                      <div className="ml-auto font-medium">2</div>
                    </div>
                    <div className="flex items-center">
                      <Avatar className="h-9 w-9 items-center justify-center space-y-0 border dark:bg-slate-400">
                        <AvatarImage
                          src="/specification/icons8-color-50.png"
                          alt="Avatar"
                        />
                        <AvatarFallback>WK</AvatarFallback>
                      </Avatar>
                      <div className="ml-4 space-y-1">
                        <p className="text-sm font-medium leading-none">
                          {dictionary['post_detail'].available_color}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          Available colors to pick from
                        </p>
                      </div>
                      <div className="ml-auto font-medium">
                        {data.body_color}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="block md:hidden">
              <Buttons data={data} />
            </div>
          </div>
        </div>
      </>
    );
  };

  return <>{data ? PostDetail(data) : "Can't Fetch data"}</>;
}
