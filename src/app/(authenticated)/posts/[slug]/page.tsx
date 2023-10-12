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

export default function Page() {
  return (
    <>
      <div className="grid grid-cols-3 gap-4">
        <div className="">
          <Image src="/car1.png" alt="pic" width={500} height={500} />
        </div>
        <div className="col-span-2">
          <h1 className="font-bold text-2xl">Lamborghini</h1>
          <h3>Aventador</h3>

          <div className="flex flex-col justify-end">
            <div className="rounded-md my-1 p-1 bg-emerald-400">$50 / day</div>
            <div className="rounded-md my-1 p-1 bg-emerald-400">
              $300 / week
            </div>
            <div className="rounded-md my-1 p-1 bg-emerald-400">
              $1100 / month
            </div>
          </div>

            <Table>
              <TableBody>
                <TableRow>
                  <TableCell className="text-left font-medium">Transmission</TableCell>
                  <TableCell className="text-left">:</TableCell>
                  <TableCell className="text-left">Automatic</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          
        </div>
      </div>
    </>
  );
}
