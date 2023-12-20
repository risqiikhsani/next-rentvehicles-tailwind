import Title from "@/components/typography/Title";
import { RentType } from "@/types/types";

import { Badge } from "@/components/ui/badge";
import { Locale } from "@/i18n.config";
import { getDictionary } from "@/lib/dictionary";
import { formatTimestamp } from "@/lib/helpers";
import { cookies } from "next/headers";
import Action from "./_page/Action";
import Detail from "./_page/Detail";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { HoverCardPost } from "@/components/hover-card-post";
import localeCurrency from "@/lib/currency";
import { CheckCircleIcon, XCircleIcon } from "@heroicons/react/24/outline";

async function getData() {
  // const res = await fetch('http://localhost:8080/api/posts',{ next: { tags: ['posts'] } })
  const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/rents`, {
    cache: "no-store",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${cookies().get("accesstoken")?.value}`,
    },
  });

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch rent history data");
  }

  return res.json();
}

export default async function Page({ params }: { params: { lang: Locale } }) {
  const data: RentType[] = await getData();
  const dict = await getDictionary(params.lang);

  return (
    <>
      <Title
        title={dict.rent_history.title}
        text={dict.rent_history.description}
      />

      {data.map((a: RentType, i: number) => (
        <div
          key={i}
          className="flex flex-col items-end border rounded-xl p-2 shadow-md my-2 hover:border-solid hover:border-2 hover:border-indigo-600"
        >
          <Action data={a} />
          <Table>
            <TableBody>
              <TableRow>
                <TableCell>Rent ID</TableCell>
                <TableCell>
                  {a.ID}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Post ID</TableCell>
                <TableCell>
                  <HoverCardPost id={a.post_id.toString()} />
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Rent date</TableCell>
                <TableCell>{`${formatTimestamp(
                  a.start_date
                )} - ${formatTimestamp(a.end_date)}`}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Rent days</TableCell>
                <TableCell>{a.RentDetail.rent_days}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Final price</TableCell>
                <TableCell>
                  {localeCurrency(a.RentDetail.estimated_final_price,params.lang)}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Is paid</TableCell>
                <TableCell>
                  {a.RentDetail.is_paid ? <CheckCircleIcon className="w-6 h-6"/> : <XCircleIcon className="w-6 h-6"/>}
                </TableCell>
              </TableRow>
              {!a.is_cancelled && (
                <TableRow>
                  <TableCell>Rent status</TableCell>
                  <TableCell>
                    <Badge
                      className={
                        a.RentDetail.status === "Declined"
                          ? "bg-red-600 hover:bg-red-700"
                          : "bg-green-600 hover:bg-green-700"
                      }
                    >
                      {a.RentDetail.status}
                    </Badge>
                  </TableCell>
                </TableRow>
              )}
              {a.is_cancelled && (
                <TableRow>
                  <TableCell>Cancelled by user</TableCell>
                  <TableCell>
                    {a.is_cancelled && <Badge>order cancelled</Badge>}
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
          <Detail data={a} lang={params.lang}/>
        </div>
      ))}
    </>
  );
}
