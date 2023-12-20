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
import { formatTimestamp } from "@/lib/helpers";
import { Locale } from "@/i18n.config";
import localeCurrency from "@/lib/currency";


export default function Detail({ data,lang }: { data: RentType,lang:Locale }) {
    return (
        <>
            <Dialog>
                <DialogTrigger asChild>
                    <Button variant="outline" size="icon">
                        <ArrowRightIcon className="h-4 w-4" />
                    </Button>
                </DialogTrigger>
                <DialogContent className="lg:max-w-screen-lg overflow-y-scroll max-h-screen">
                    <DialogHeader>
                        <DialogTitle>Rent</DialogTitle>
                        
                            <Table>
                                <TableHeader className="text-left">
                                    <TableRow className="bg-cyan-300">
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
                                        <TableCell>{formatTimestamp(data.CreatedAt)}</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell className="font-medium">Updated At</TableCell>
                                        <TableCell>{formatTimestamp(data.UpdatedAt)}</TableCell>
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
                                        <TableCell>{formatTimestamp(data.start_date)}</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell className="font-medium">End Date</TableCell>
                                        <TableCell>{formatTimestamp(data.end_date)}</TableCell>
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
                        
                    </DialogHeader>
                    <DialogHeader>
                        <DialogTitle>Rent Detail</DialogTitle>
                        
                            <Table>
                                <TableHeader className="text-left">
                                    <TableRow className="bg-cyan-300">
                                        <TableHead>name</TableHead>
                                        <TableHead>data</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody className="text-left">
                                    <TableRow>
                                        <TableCell className="font-medium">Updated At</TableCell>
                                        <TableCell>{formatTimestamp(data.RentDetail.UpdatedAt)}</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell className="font-medium">Pickup Date</TableCell>
                                        <TableCell>{data.RentDetail.pickup_date && formatTimestamp(data.RentDetail.pickup_date)}</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell className="font-medium">Return Date</TableCell>
                                        <TableCell>{data.RentDetail.return_date && formatTimestamp(data.RentDetail.return_date)}</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell className="font-medium">Is this already paid</TableCell>
                                        <TableCell>{data.RentDetail.is_paid ? "true":"false"}</TableCell>
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
                                        <TableCell className="font-medium">Text notes (optional)</TableCell>
                                        <TableCell>{data.RentDetail.text}</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell className="font-medium">Estimated final price</TableCell>
                                        <TableCell>{localeCurrency(data.RentDetail.estimated_final_price,lang)}</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell className="font-medium">Estimated normal price</TableCell>
                                        <TableCell>{localeCurrency(data.RentDetail.estimated_normal_price,lang)}</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell className="font-medium">Estimated saved price</TableCell>
                                        <TableCell>{localeCurrency(data.RentDetail.estimated_saved_price,lang)}</TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                        
                    </DialogHeader>
                </DialogContent>
            </Dialog>
        </>
    )
}