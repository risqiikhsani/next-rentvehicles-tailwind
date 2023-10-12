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


export default function Page() {
  return (
    <>
      <Title title="Post Detail" />
      <div className="grid grid-cols-3 gap-4">
        <div className="mt-10">
          <Image src="/car1.png" alt="pic" width={500} height={500} />
        </div>
        <div className="col-span-2">
          <h1 className="font-bold text-2xl">Lamborghini</h1>
          <h3>Aventador</h3>

          <div className="flex flex-col justify-end gap-4">
            <div className="rounded-md my-1 p-1 bg-emerald-400">$50 / day</div>
            <div className="rounded-md my-1 p-1 bg-emerald-400">
              $300 / week
            </div>
            <div className="rounded-md my-1 p-1 bg-emerald-400">
              $1100 / month
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
