import { LocationType } from "@/types/types";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button";
import { Bars3Icon } from "@heroicons/react/24/solid";
import Link from "next/link";

export default function CardLocation({ data }: { data: LocationType }) {
    return (
        <>
            <Card className="m-10 hover:border hover:border-blue-400 w-full" >
                <CardHeader className="flex flex-row">
                    <div className="grow">
                    <CardTitle>{data.name}</CardTitle>
                    <CardDescription>{data.description}</CardDescription>
                    <CardDescription>{data.ID}</CardDescription>
                    </div>

                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="outline" size="icon">
                                <Bars3Icon className="w-4 h-4"/>
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent>
                            <DropdownMenuItem asChild>
                                <Link href={`edit-location/${data.ID}`}>Update</Link>
                            </DropdownMenuItem>
                            <DropdownMenuItem>Delete</DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </CardHeader>
                <CardContent>
                    <Table>
                        <TableCaption>Address detail</TableCaption>
                        <TableBody>
                            <TableRow>
                                <TableCell className="font-medium">Address</TableCell>
                                <TableCell>{data.address}</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell className="font-medium">City</TableCell>
                                <TableCell>{data.city}</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell className="font-medium">Street</TableCell>
                                <TableCell>{data.street_name}</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell className="font-medium">Post code</TableCell>
                                <TableCell>{data.post_code}</TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </CardContent>
                <CardFooter>
                    <Button variant="link" asChild className="w-full">
                    <Link href={`locations/${data.ID}`}>See detail</Link>
                    </Button>
                </CardFooter>
            </Card>
        </>
    )
}