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
import { Badge } from "./ui/badge"
import { PostType } from "@/types/types"
import Link from "next/link"
import CarCardButtons from "./CarCardButtons"


export function CarCard({ data }: { data: PostType }) {
    return (
        <Card className="w-[300px] hover:border-solid hover:border-2 hover:border-indigo-600">
            <CardHeader>
                <div className="flex">
                    <div className="w-full">
                        <CardTitle className="text-xl italic">{data.brand}</CardTitle>
                        <CardDescription className="text-lg">{data.brand_model}</CardDescription>
                    </div>
                    <div className="flex flex-col w-full">
                        <div className="flex justify-between rounded-md my-1 p-2 bg-green-400">
                            <Badge variant="outline">
                                1d
                            </Badge>
                            <p>{data.price_per_day}</p>

                        </div>
                        <div className="flex justify-between rounded-md my-1 p-2 bg-green-400">
                            <Badge variant="outline" >
                                7d
                            </Badge>
                            <p>{data.price_per_week}</p>

                        </div>
                        <div className="flex justify-between rounded-md my-1 p-2 bg-green-400">
                            <Badge variant="outline">
                                30d
                            </Badge>
                            <p>{data.price_per_month}</p>

                        </div>
                    </div>
                </div>
            </CardHeader>
            <CardContent>
                <Image src={data.MainImage.url} width={920} height={360} alt="car" className="rounded-xl" />
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
            <CardFooter className="flex justify-between">
                <CarCardButtons data={data}/>
            </CardFooter>
        </Card>
    )
}
