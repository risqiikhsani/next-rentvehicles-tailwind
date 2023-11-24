import { RentType } from "@/types/types";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { ArrowRightIcon } from "@heroicons/react/24/solid";
import { Button } from "@/components/ui/button";

import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"


export default function Detail({ data }: { data: RentType }) {
    return (
        <>
            <Dialog>
                <DialogTrigger>
                    <Button variant="outline" size="icon">
                        <ArrowRightIcon className="h-4 w-4" />
                    </Button>
                </DialogTrigger>
                <DialogContent className="lg:max-w-screen-lg overflow-y-scroll max-h-screen">
                    <DialogHeader>
                        <DialogTitle>Rent</DialogTitle>
                        <DialogDescription>
                            <Table>
                                <TableHeader className="text-left">
                                    <TableRow>
                                        <TableHead >name</TableHead>
                                        <TableHead >data</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody className="text-left">
                                    <TableRow>
                                        <TableCell className="font-medium">ID</TableCell>
                                        <TableCell>{data.ID}</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell className="font-medium">Created At</TableCell>
                                        <TableCell>{data.CreatedAt}</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell className="font-medium">Updated At</TableCell>
                                        <TableCell>{data.UpdatedAt}</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell className="font-medium">User</TableCell>
                                        <TableCell>{data.user_id}</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell className="font-medium">Post</TableCell>
                                        <TableCell>{data.post_id}</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell className="font-medium">Start Date</TableCell>
                                        <TableCell>{data.start_date}</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell className="font-medium">End Date</TableCell>
                                        <TableCell>{data.end_date}</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell className="font-medium">Payment Method</TableCell>
                                        <TableCell>{data.payment_method}</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell className="font-medium">Cancelled by user?</TableCell>
                                        <TableCell>{data.is_cancelled ? "true":"false"}</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell className="font-medium">Cancelled reason</TableCell>
                                        <TableCell>{data.cancel_reason}</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell className="font-medium">Discount Applied</TableCell>
                                        <TableCell>{data.discount_voucher}</TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </DialogDescription>
                    </DialogHeader>
                    <DialogHeader>
                        <DialogTitle>Rent Detail</DialogTitle>
                        <DialogDescription>
                            <Table>
                                <TableHeader className="text-left">
                                    <TableRow>
                                        <TableHead>name</TableHead>
                                        <TableHead>data</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody className="text-left">
                                    <TableRow>
                                        <TableCell className="font-medium">Updated At</TableCell>
                                        <TableCell>{data.RentDetail.UpdatedAt}</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell className="font-medium">License Plate</TableCell>
                                        <TableCell>{data.RentDetail.license_plate}</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell className="font-medium">Pickup Date</TableCell>
                                        <TableCell>{data.RentDetail.pickup_date}</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell className="font-medium">Return Date</TableCell>
                                        <TableCell>{data.RentDetail.return_date}</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell className="font-medium">Is this already paid</TableCell>
                                        <TableCell>{data.RentDetail.is_paid}</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell className="font-medium">Total rent days</TableCell>
                                        <TableCell>{data.RentDetail.rent_days}</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell className="font-medium">Status</TableCell>
                                        <TableCell>{data.RentDetail.status}</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell className="font-medium">Decline reason</TableCell>
                                        <TableCell>{data.RentDetail.decline_reason}</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell className="font-medium">Optional Text</TableCell>
                                        <TableCell>{data.RentDetail.rent_days}</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell className="font-medium">Estimated final price</TableCell>
                                        <TableCell>{data.RentDetail.estimated_final_price}</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell className="font-medium">Estimated normal price</TableCell>
                                        <TableCell>{data.RentDetail.estimated_normal_price}</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell className="font-medium">Estimated saved price</TableCell>
                                        <TableCell>{data.RentDetail.estimated_saved_price}</TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </DialogDescription>
                    </DialogHeader>
                </DialogContent>
            </Dialog>
        </>
    )
}