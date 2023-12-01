import * as React from "react"

import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Separator } from "@radix-ui/react-select"
import Image from "next/image"
import { ArrowRightIcon, HeartIcon } from "@heroicons/react/24/solid"
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { PostType } from "@/types/types"
import Link from "next/link"
import CarCardButtons from "./CarCardButtons"
import { CiDiscount1 } from "react-icons/ci";
import { Locale } from "@/i18n.config"

export function CarCard({ data,lang }: { data: PostType,lang:Locale }) {
    return (
        <Card className="w-[300px] hover:border-solid hover:border-2 hover:border-indigo-600">
            <CardHeader className="h-[200px]">

                <div className="flex">
                    <div className="w-full">
                        <CardTitle className="text-xl italic">{data.brand}</CardTitle>
                        <CardDescription className="text-lg">{data.brand_model}</CardDescription>
                        <Badge variant="secondary">
                            {data.available ? "available" : "not available"}
                            {data.available ? <div className="w-2 h-2 rounded-full bg-green-600 ml-2"></div> : <div className="w-2 h-2 rounded-full ml-2 bg-red-600"></div>}
                        </Badge>
                    </div>
                    {data.discount_percentage != 0 && <div className="flex">
                        <CiDiscount1 className="w-10 h-10" />
                        <p className="font-bold text-red-600">{data.discount_percentage}%</p>
                    </div>}

                </div>


                <div className="flex flex-col w-full border-2 rounded-xl  p-2 shadow-md">
                    <div className="flex justify-between my-1 items-center">
                        <p className="text-sm">
                            1 day
                        </p>
                        <div className="flex items-center gap-2">
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
                            <p className="font-semibold text-blue-600 dark:text-slate-100">{data.price_per_day_after_discount}</p>
                            {data.discount_percentage != 0 &&<p className="font-light line-through text-sm">{data.price_per_day}</p>}
                        </div>
                    </div>
                    <div className="flex justify-between my-1 items-center">
                        <p className="text-sm">
                            7 days
                        </p>
                        <div className="flex items-center gap-2">
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
                            <p className="font-semibold text-blue-600 dark:text-slate-100">{data.price_per_week_after_discount}</p>
                            {data.discount_percentage != 0 &&<p className="font-light line-through text-sm">{data.price_per_week}</p>}
                        </div>
                    </div>
                    <div className="flex justify-between my-1 items-center">
                        <p className="text-sm">
                            30 days
                        </p>


                        <div className="flex items-center gap-2">
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
                            <p className="font-semibold text-blue-600 dark:text-slate-100">{data.price_per_month_after_discount}</p>
                            {data.discount_percentage != 0 &&<p className="font-light line-through text-sm">{data.price_per_month}</p>}
                        </div>
                    </div>
                </div>

            </CardHeader>
            <CardContent>
                <div className="h-[200px] flex items-center w-full">
                    <Image src={data.MainImage.url} width={920} height={360} alt="car" className="rounded-xl" />
                </div>
                <Table className="max-w-sm my-2">
                    <TableBody>
                        <TableRow className="hover:bg-inherit">
                            <TableCell className="font-medium">
                                <Badge variant="outline" className="my-2">
                                    Type
                                </Badge>
                            </TableCell>
                            <TableCell className="text-left">{data.vehicle_type}</TableCell>
                        </TableRow>
                        <TableRow className="hover:bg-inherit">
                            <TableCell className="font-medium">
                                <Badge variant="outline" className="my-2">
                                    Transmission
                                </Badge>
                            </TableCell>
                            <TableCell className="text-left">{data.transmission}</TableCell>
                        </TableRow>
                        <TableRow className="hover:bg-inherit">
                            <TableCell className="font-medium">
                                <Badge variant="outline" className="my-2">
                                    Fuel Type
                                </Badge>
                            </TableCell>
                            <TableCell className="text-left">{data.fuel_type}</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </CardContent>
            <CardFooter>
                <CarCardButtons data={data} lang={lang} />
            </CardFooter>
        </Card>
    )
}
