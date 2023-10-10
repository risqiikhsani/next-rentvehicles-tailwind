import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { ChevronDownIcon } from "@heroicons/react/24/solid";

export default function Page() {
  return (
    <>
      <h1 className="font-bold text-4xl">Booking orders</h1>
      <div className="flex">
        <Button>Filter</Button>
      </div>

      <Table>
        <TableCaption>A list of your recent invoices.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Book ID</TableHead>
            <TableHead>Post</TableHead>
            <TableHead>Customer</TableHead>
            <TableHead>Booking Date</TableHead>
            <TableHead>Booking Time</TableHead>
            <TableHead>Days Left</TableHead>
            <TableHead>Amount</TableHead>
            <TableHead>Status</TableHead>
            <TableHead className="text-right">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell className="font-medium">INV001</TableCell>
            <TableCell>Lamborghini Aventador</TableCell>
            <TableCell>Kevin</TableCell>
            <TableCell>13 june 2023 - 14 june 2023</TableCell>
            <TableCell>1 day</TableCell>
            <TableCell>3</TableCell>
            <TableCell>$250.00</TableCell>
            <TableCell>Paid</TableCell>
            <TableCell className="text-right">
              <Button>
                <ChevronDownIcon className="h-4 w-4" />
              </Button>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </>
  );
}
