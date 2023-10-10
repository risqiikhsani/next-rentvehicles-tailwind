import Title from "@/components/typography/Title";
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
import {FolderOpenIcon} from "@heroicons/react/24/solid";

export default function Page() {
  return (
    <>
      <Title title="Rent orders" text="List all of your rent orders"/>


      <Table>
        <TableCaption>A list of your recent invoices.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Rent ID</TableHead>
            <TableHead>Post</TableHead>
            <TableHead>Customer</TableHead>
            <TableHead>Rent Date</TableHead>
            <TableHead>Rent Time</TableHead>
            <TableHead>Days Left</TableHead>
            <TableHead>Amount</TableHead>
            <TableHead>Payment Status</TableHead>
            <TableHead>Rent Status</TableHead>
            <TableHead>Action</TableHead>
            <TableHead className="text-right">Files</TableHead>
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
            <TableCell>Paid (offline)</TableCell>
            <TableCell>On going</TableCell>
            <TableCell>
              <Button variant="outline" size="icon">
                <ChevronDownIcon className="h-4 w-4" />
              </Button> 
            </TableCell>
            <TableCell className="text-right">
              <Button variant="outline" size="icon">
                <FolderOpenIcon className="h-4 w-4" />
              </Button>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </>
  );
}
