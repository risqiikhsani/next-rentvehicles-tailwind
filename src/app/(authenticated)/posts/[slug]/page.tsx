import Image from "next/image";

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
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"


export default function Page() {
  return (
    <>
      <Title title="Post Detail" />
      <div className="lg:grid lg:grid-cols-3 gap-4">

        <Image src="/car1.png" alt="pic" width={500} height={500} />

        <div className="col-span-2 mt-4 lg:mt-0">
          <div className="flex gap-2 items-center">
            <Badge variant="outline" className="my-2">Brand</Badge>
            <h1 className="font-bold text-xl ml-4">Lamborghini</h1>
          </div>
          <div className="flex gap-2 items-center">
            <Badge variant="outline" className="my-2">Model</Badge>
            <h3 className="font-bold text-xl ml-4">Aventador</h3></div>
          <div className="flex gap-2 items-center">
            <Badge variant="outline" className="my-2">Year</Badge>
            <h3 className="font-bold text-xl ml-4">2015</h3>
          </div>
          <div className="flex gap-2 items-center">
            <Badge variant="outline" className="my-2">Type</Badge>
            <h3 className="font-bold text-xl ml-4">Sport</h3>
          </div>


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
                  <p className="text-2xl font-bold">
                    $45,231.89
                  </p>
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
                  <p className="text-2xl font-bold">
                    $45,231.89
                  </p>
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
                  <p className="text-2xl font-bold">
                    $45,231.89
                  </p>
                  <p className="text-xs text-muted-foreground">
                    +20.1% from last month
                  </p>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Specification</CardTitle>
                <CardDescription>Detailed vehicle's specification.</CardDescription>
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
