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
import Specification from "./_page/Specification";
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
import Link from "next/link";
import { PostType } from "@/types/types";
import Buttons from "./_page/Buttons";

async function getData(postId: string) {
  // const res = await fetch('http://localhost:8080/api/posts',{ next: { tags: ['posts'] } })
  const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/posts/${postId}`, { cache: 'no-store' })

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }

  return res.json()
}

export default async function Page({ params }: { params: { slug: string } }) {
  const slug = params.slug

  const data = await getData(slug)

  const PostDetail = (data: PostType) => {
    return (
      <>
        <Title title="Post Detail" />
        <div className="grid md:grid-cols-3 gap-4 ">
          <div className="relative">
            <div className="md:sticky top-20 left-0 ">
              <Table className="block md:hidden w-full my-2">
                <TableBody>
                  <TableRow className="hover:bg-inherit">
                    <TableCell className="font-medium">
                      <Badge variant="outline" className="my-2">
                        Brand
                      </Badge>
                    </TableCell>
                    <TableCell className="text-left text-xl">{data.brand}</TableCell>
                  </TableRow>
                  <TableRow className="hover:bg-inherit">
                    <TableCell className="font-medium">
                      <Badge variant="outline" className="my-2">
                        Model
                      </Badge>
                    </TableCell>
                    <TableCell className="text-left text-xl">{data.brand_model}</TableCell>
                  </TableRow>
                  <TableRow className="hover:bg-inherit">
                    <TableCell className="font-medium">
                      <Badge variant="outline" className="my-2">
                        Year
                      </Badge>
                    </TableCell>
                    <TableCell className="text-left">{data.year}</TableCell>
                  </TableRow>
                  <TableRow className="hover:bg-inherit">
                    <TableCell className="font-medium">
                      <Badge variant="outline" className="my-2">
                        Type
                      </Badge>
                    </TableCell>
                    <TableCell className="text-left">{data.vehicle_type}</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
              <Image className="rounded-xl" src={data.MainImage.url} alt="pic" width={500} height={500} />
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
                      Brand
                    </Badge>
                  </TableCell>
                  <TableCell className="text-left text-xl">{data.brand}</TableCell>
                </TableRow>
                <TableRow className="hover:bg-inherit">
                  <TableCell className="font-medium">
                    <Badge variant="outline" className="my-2">
                      Model
                    </Badge>
                  </TableCell>
                  <TableCell className="text-left text-xl">{data.brand_model}</TableCell>
                </TableRow>
                <TableRow className="hover:bg-inherit">
                  <TableCell className="font-medium">
                    <Badge variant="outline" className="my-2">
                      Year
                    </Badge>
                  </TableCell>
                  <TableCell className="text-left">{data.year}</TableCell>
                </TableRow>
                <TableRow className="hover:bg-inherit">
                  <TableCell className="font-medium">
                    <Badge variant="outline" className="my-2">
                      Type
                    </Badge>
                  </TableCell>
                  <TableCell className="text-left">{data.vehicle_type}</TableCell>
                </TableRow>
              </TableBody>
            </Table>



            <div className="flex flex-col justify-end gap-4">
              <div className="grid gap-4 md:grid-cols-1 lg:grid-cols-3 my-4">
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">
                      Daily Price (1 day)
                    </CardTitle>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="h-4 w-4 text-muted-foreground"
                    >
                      <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                    </svg>
                  </CardHeader>
                  <CardContent>
                    <p className="text-2xl font-bold">{data.price_per_day}</p>
                    <p className="text-xs text-muted-foreground">
                      +20.1% from last month
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">
                      Weekly Price (7 days)
                    </CardTitle>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="h-4 w-4 text-muted-foreground"
                    >
                      <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                    </svg>
                  </CardHeader>
                  <CardContent>
                    <p className="text-2xl font-bold">{data.price_per_week}</p>
                    <p className="text-xs text-muted-foreground">
                      +20.1% from last month
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">
                      Monthly Price (30 days)
                    </CardTitle>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="h-4 w-4 text-muted-foreground"
                    >
                      <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                    </svg>
                  </CardHeader>
                  <CardContent>
                    <p className="text-2xl font-bold">{data.price_per_month}</p>
                    <p className="text-xs text-muted-foreground">
                      +20.1% from last month
                    </p>
                  </CardContent>
                </Card>
              </div>

              <Table className="max-w-sm">
                <TableBody>
                  <TableRow className="hover:bg-inherit">
                    <TableCell className="font-medium">
                      <Badge variant="outline" className="my-2">
                        Available
                      </Badge>
                    </TableCell>
                    <TableCell className="text-left">{data.available ? "true" : "false"}</TableCell>
                  </TableRow>
                  <TableRow className="hover:bg-inherit">
                    <TableCell className="font-medium">
                      <Badge variant="outline" className="my-2">
                        Poster
                      </Badge>
                    </TableCell>
                    <TableCell className="text-left">{data.UserID}</TableCell>
                  </TableRow>
                </TableBody>
              </Table>

              <Card>
                <CardHeader>
                  <CardTitle>Specification</CardTitle>
                  <CardDescription>
                    Detailed vehicle's specification.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Specification data={data} />
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
  }

  return (
    <>
      {data ? PostDetail(data) : "Can't Fetch data"}
    </>
  );
}
