import Title from "@/components/typography/Title";
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

import { Badge } from "@/components/ui/badge";
import { Locale } from "@/i18n.config";
import { getDictionary } from "@/lib/dictionary";
import { formatTimestamp } from "@/lib/helpers";
import { cookies } from 'next/headers';
import ActionNew from "./_page/ActionNew";
import Detail from "./_page/Detail";

async function getData() {
  // const res = await fetch('http://localhost:8080/api/posts',{ next: { tags: ['posts'] } })
  const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/rents`, {
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

export default async function Page({params}:{params:{lang:Locale}}) {
  const data: RentType[] = await getData();
  const dict = await getDictionary(params.lang)


  return (
    <>
      <Title title={dict.rent_orders.title} text={dict.rent_orders.description} />

      <Table>
        <TableCaption>A list of your recent invoices.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="hidden md:table-cell">Rent ID</TableHead>
            <TableHead className="hidden md:table-cell">Post</TableHead>
            <TableHead className="hidden md:table-cell">Customer</TableHead>
            <TableHead className="hidden md:table-cell">Rent Date</TableHead>
            <TableHead >Rent Days</TableHead>
            <TableHead className="hidden md:table-cell">Remaining Days</TableHead>
            <TableHead >Total price</TableHead>
            <TableHead className="hidden md:table-cell">Payment Status</TableHead>
            <TableHead >Rent Status</TableHead>
            <TableHead className="hidden md:table-cell">Cancelled by user</TableHead>

            <TableHead >Action</TableHead>
            {/* <TableHead className="hidden md:table-cell">Files</TableHead>
            <TableHead className="hidden md:table-cell">Note (optional)</TableHead> */}
            <TableHead >Detail</TableHead>
            {/* <TableHead className="table-cell md:hidden">More</TableHead> */}
          </TableRow>
        </TableHeader>
        <TableBody>
          {data &&
            data.map((a: RentType, index: number) => (
              <TableRow key={index}>
                <TableCell className="font-medium hidden md:table-cell">{a.ID}</TableCell>
                <TableCell className="hidden md:table-cell">{a.post_id}</TableCell>
                <TableCell className="hidden md:table-cell">{a.user_id}</TableCell>
                <TableCell className="hidden md:table-cell">{`${formatTimestamp(a.start_date)} - ${formatTimestamp(a.end_date)}`}</TableCell>
                <TableCell>{a.RentDetail.rent_days}</TableCell>

                <TableCell className="hidden md:table-cell">-</TableCell>
                <TableCell >{a.RentDetail.estimated_final_price}</TableCell>
                <TableCell className="hidden md:table-cell">{a.RentDetail.is_paid ? "paid" : "not paid"}</TableCell>
                <TableCell>
                  <Badge className={a.RentDetail.status == "Declined" ? "bg-red-600 hover:bg-red-700" : "bg-green-600 hover:bg-green-700"}>
                    {a.RentDetail.status}
                  </Badge>
                </TableCell>
                <TableCell className="text-center hidden md:table-cell">{a.is_cancelled ? "true" : "-"}</TableCell>
                <TableCell>
                  <ActionNew data={a}/>
                </TableCell>

                {/* <TableCell >
                  <Action data={a} />
                </TableCell>
                <TableCell className="hidden md:table-cell">
                  <Files data={a} />
                </TableCell>
                <TableCell className="hidden md:table-cell">
                  <Note data={a} />
                </TableCell> */}
                <TableCell >
                  <Detail data={a} />
                </TableCell>
                {/* <TableCell className="table-cell md:hidden" >
                  <DropdownMenu >
                    <DropdownMenuTrigger asChild >
                      <Button variant="outline" size="icon">
                        <Bars3Icon className="w-4 h-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                      <DropdownMenuLabel>More</DropdownMenuLabel>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem>Detail</DropdownMenuItem>
                      <DropdownMenuItem>Files</DropdownMenuItem>
                      <DropdownMenuItem>Note</DropdownMenuItem>

                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell> */}
              </TableRow>
            ))}

          {!data && <TableRow><p>no data found.</p></TableRow>}
        </TableBody>
      </Table>
    </>
  );
}
