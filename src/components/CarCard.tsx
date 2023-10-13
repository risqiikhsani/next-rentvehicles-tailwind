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


export function CarCard() {
    return (
        <Card className="w-[300px] hover:border-solid hover:border-2 hover:border-indigo-600">
            <CardHeader>
                <div className="flex">
                    <div className="flex-grow">
                        <CardTitle>Lamborghini</CardTitle>
                        <CardDescription>Aventador</CardDescription>
                    </div>
                    <div className="flex flex-col justify-end">
                        <div className="rounded-md my-1 p-1 bg-emerald-400">
                            $50 / day
                        </div>
                        <div className="rounded-md my-1 p-1 bg-emerald-400">
                            $300 / week
                        </div>
                        <div className="rounded-md my-1 p-1 bg-emerald-400">
                            $1100 / month
                        </div>
                    </div>
                </div>
            </CardHeader>
            <CardContent>
                <Image src="/car1.png" width={920} height={360} alt="car" />
                <Table className="max-w-sm my-2">
                    <TableBody>
                    <TableRow className="hover:bg-inherit">
                            <TableCell className="font-medium">
                                <Badge variant="outline" className="my-2">
                                    Type
                                </Badge>
                            </TableCell>
                            <TableCell className="text-left">Sport</TableCell>
                        </TableRow>
                        <TableRow className="hover:bg-inherit">
                            <TableCell className="font-medium">
                                <Badge variant="outline" className="my-2">
                                    Transmission
                                </Badge>
                            </TableCell>
                            <TableCell className="text-left">Manual</TableCell>
                        </TableRow>
                        <TableRow className="hover:bg-inherit">
                            <TableCell className="font-medium">
                                <Badge variant="outline" className="my-2">
                                    Fuel Type
                                </Badge>
                            </TableCell>
                            <TableCell className="text-left">Gasoline</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </CardContent>
            <CardFooter className="flex justify-between">
                <Button variant="outline">
                    <HeartIcon className="mr-2 h-4 w-4" />
                    Favorite</Button>
                <Button>
                    See Detail
                    <ArrowRightIcon className="ml-2 h-4 w-4" /></Button>
            </CardFooter>
        </Card>
    )
}
