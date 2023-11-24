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
import { RentType } from "@/types/types";

import { ChevronDownIcon } from "@heroicons/react/24/solid";
import { FolderOpenIcon } from "@heroicons/react/24/solid";
import { cookies } from 'next/headers'
import moment from 'moment';
import formatTimestamp from "@/lib/helpers";
import { ArrowRightIcon } from "@heroicons/react/24/solid";
import Detail from "./_page/Detail";
import Files from "./_page/Files";
import Action from "./_page/Action";
import Note from "./_page/Note";


async function getData() {
  // const res = await fetch('http://localhost:8080/api/posts',{ next: { tags: ['posts'] } })
  const res = await fetch("http://localhost:8080/api/rents", {
    cache: "no-store",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${cookies().get("accesstoken")?.value}`,
    },
  });

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch rent-order data");
  }

  return res.json();
}

export default async function Page() {
  const data: RentType[] = await getData();



  return (
    <>
      <Title title="Rent orders" text="List all of your rent orders" />

      <Table>
        <TableCaption>A list of your recent invoices.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Rent ID</TableHead>
            <TableHead>Post</TableHead>
            <TableHead>Customer</TableHead>
            <TableHead>Rent Date</TableHead>
            <TableHead>Rent Days</TableHead>
            <TableHead>Remaining Days</TableHead>
            <TableHead>Total price</TableHead>
            <TableHead>Payment Status</TableHead>
            <TableHead>Rent Status</TableHead>
            <TableHead>Cancelled by user</TableHead>
            <TableHead>Action</TableHead>
            <TableHead>Files</TableHead>
            <TableHead>Note (optional)</TableHead>
            <TableHead className="text-right">Detail</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data &&
            data.map((a: RentType, index: number) => (
              <TableRow key={index}>
                <TableCell className="font-medium">{a.ID}</TableCell>
                <TableCell>{a.post_id}</TableCell>
                <TableCell>{a.user_id}</TableCell>
                <TableCell>{`${formatTimestamp(a.start_date)} - ${formatTimestamp(a.end_date)}`}</TableCell>
                <TableCell>{a.RentDetail.rent_days}</TableCell>

                <TableCell>-</TableCell>
                <TableCell>{a.RentDetail.estimated_final_price}</TableCell>
                <TableCell>{a.RentDetail.is_paid ? "paid" : "not paid"}</TableCell>
                <TableCell>{a.RentDetail.status}</TableCell>
                <TableCell className="text-center">{a.is_cancelled ? "true":"-"}</TableCell>
                <TableCell>
                  <Action data={a}/>
                </TableCell>
                <TableCell>
                  <Files data={a}/>
                </TableCell>
                <TableCell>
                  <Note data={a}/>
                </TableCell>
                <TableCell>
                  <Detail data={a} />
                </TableCell>
              </TableRow>
            ))}

          {!data && <TableRow><p>no data found.</p></TableRow>}
        </TableBody>
      </Table>
    </>
  );
}
