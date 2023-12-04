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
import localeCurrency from "@/lib/currency"
import { getDictionary } from "@/lib/dictionary"

export const CarCard = async({ data,lang }: { data: PostType,lang:Locale }) => {

    const dictionary = await getDictionary(lang)

    return (
        <Card className="w-[300px] hover:border-solid hover:border-2 hover:border-indigo-600">
            <CardHeader className="h-[270px]">

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
                            1 {dictionary['post_detail'].day}
                        </p>
                        <div className="flex flex-col items-center">
                            <p className="font-semibold text-blue-600 dark:text-slate-100">{localeCurrency(data.price_per_day_after_discount,lang)}</p>
                            {data.discount_percentage != 0 &&<p className="font-light line-through text-sm">{localeCurrency(data.price_per_day,lang)}</p>}
                        </div>
                    </div>
                    <div className="flex justify-between my-1 items-center">
                        <p className="text-sm">
                            7 {dictionary['post_detail'].day}
                        </p>
                        <div className="flex flex-col items-center">
                            <p className="font-semibold text-blue-600 dark:text-slate-100">{localeCurrency(data.price_per_week_after_discount,lang)}</p>
                            {data.discount_percentage != 0 &&<p className="font-light line-through text-sm">{localeCurrency(data.price_per_week,lang)}</p>}
                        </div>
                    </div>
                    <div className="flex justify-between my-1 items-center">
                        <p className="text-sm">
                            30 {dictionary['post_detail'].day}
                        </p>


                        <div className="flex flex-col items-center">
                            <p className="font-semibold text-blue-600 dark:text-slate-100">{localeCurrency(data.price_per_month_after_discount,lang)}</p>
                            {data.discount_percentage != 0 &&<p className="font-light line-through text-sm">{localeCurrency(data.price_per_month,lang)}</p>}
                        </div>
                    </div>
                </div>

            </CardHeader>
            <CardContent>
                <div className="h-[200px] flex items-center w-full">
                    <Image src={data.MainImage.url} width={920} height={360} alt="car" className="rounded-xl" />
                </div>
                <Table className="max-w-sm">
                    <TableBody>
                        <TableRow className="hover:bg-inherit">
                            <TableCell className="font-medium">
                                <Badge variant="outline" className="my-2">
                                    {dictionary['post_detail'].car_type}
                                </Badge>
                            </TableCell>
                            <TableCell className="text-left">{data.vehicle_type}</TableCell>
                        </TableRow>
                        <TableRow className="hover:bg-inherit">
                            <TableCell className="font-medium">
                                <Badge variant="outline" className="my-2">
                                {dictionary['post_detail'].transmission}
                                </Badge>
                            </TableCell>
                            <TableCell className="text-left">{data.transmission}</TableCell>
                        </TableRow>
                        <TableRow className="hover:bg-inherit">
                            <TableCell className="font-medium">
                                <Badge variant="outline" className="my-2">
                                {dictionary['post_detail'].fuel_type}
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
