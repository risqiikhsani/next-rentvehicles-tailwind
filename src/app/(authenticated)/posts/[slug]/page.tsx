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

export default function Page({ params }: { params: { slug: string } }) {
  const slug = params.slug
  return (
    <>
      <Title title="Post Detail" />
      <div className="lg:grid lg:grid-cols-3 gap-4">
        <div className="lg:sticky lg:h-screen lg:top-20 lg:left-0 static">
          <Image src="/car1.png" alt="pic" width={500} height={500} />
          <div className="flex gap-4 my-10">
            <Button variant="outline" className="rounded-xl w-full">
              <HeartIcon className="w-4 h-4 mr-2" />
              Favorite
            </Button>
            <Button variant="outline" className="rounded-xl w-full" asChild>
              
              <Link href={`/posts/${slug}/book`}><LockClosedIcon className="w-4 h-4 mr-2" />Book</Link>
            </Button>
          </div>
          <Button className="rounded-xl w-full" asChild>
            
            <Link href={`/posts/${slug}/rent`}><KeyIcon className="w-4 h-4 mr-2" />Rent</Link>
          </Button>
        </div>

        <div className="col-span-2 mt-4 lg:mt-0">
          <Table className="max-w-sm">
            <TableBody>
              <TableRow className="hover:bg-inherit">
                <TableCell className="font-medium">
                  <Badge variant="outline" className="my-2">
                    Brand
                  </Badge>
                </TableCell>
                <TableCell className="text-left">Lamborghini</TableCell>
              </TableRow>
              <TableRow className="hover:bg-inherit">
                <TableCell className="font-medium">
                  <Badge variant="outline" className="my-2">
                    Model
                  </Badge>
                </TableCell>
                <TableCell className="text-left">Aventador</TableCell>
              </TableRow>
              <TableRow className="hover:bg-inherit">
                <TableCell className="font-medium">
                  <Badge variant="outline" className="my-2">
                    Year
                  </Badge>
                </TableCell>
                <TableCell className="text-left">2015</TableCell>
              </TableRow>
              <TableRow className="hover:bg-inherit">
                <TableCell className="font-medium">
                  <Badge variant="outline" className="my-2">
                    Type
                  </Badge>
                </TableCell>
                <TableCell className="text-left">Sport</TableCell>
              </TableRow>
            </TableBody>
          </Table>

          {/* <div className="flex gap-2 items-center">
            <Badge variant="outline" className="my-2">
              Brand
            </Badge>
            <h1 className="font-bold text-xl ml-4">Lamborghini</h1>
          </div>
          <div className="flex gap-2 items-center">
            <Badge variant="outline" className="my-2">
              Model
            </Badge>
            <h3 className="font-bold text-xl ml-4">Aventador</h3>
          </div>
          <div className="flex gap-2 items-center">
            <Badge variant="outline" className="my-2">
              Year
            </Badge>
            <h3 className="font-bold text-xl ml-4">2015</h3>
          </div>
          <div className="flex gap-2 items-center">
            <Badge variant="outline" className="my-2">
              Type
            </Badge>
            <h3 className="font-bold text-xl ml-4">Sport</h3>
          </div> */}

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
                  <p className="text-2xl font-bold">$45,231.89</p>
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
                  <p className="text-2xl font-bold">$45,231.89</p>
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
                  <p className="text-2xl font-bold">$45,231.89</p>
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
                      Available unit
                    </Badge>
                  </TableCell>
                  <TableCell className="text-left">10</TableCell>
                </TableRow>
                <TableRow className="hover:bg-inherit">
                  <TableCell className="font-medium">
                    <Badge variant="outline" className="my-2">
                      Poster
                    </Badge>
                  </TableCell>
                  <TableCell className="text-left">User</TableCell>
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
                <Specification />
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
}
