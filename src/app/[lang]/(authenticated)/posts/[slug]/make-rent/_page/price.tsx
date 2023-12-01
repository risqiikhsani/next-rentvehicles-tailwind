import { Separator } from "@/components/ui/separator"
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { EstimatedPriceType } from "@/types/types"

export default function Price({ data }: { data: EstimatedPriceType }) {
    return (
        <>
            <Table>
                <TableCaption>Estimate Price</TableCaption>
                <TableHeader>
                    <TableRow>
                        <TableHead className="w-[200px]">name</TableHead>
                        <TableHead>data</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    <TableRow>
                        <TableCell className="font-medium">Total days</TableCell>
                        <TableCell>{data.rent_days}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell className="font-medium">Normal price (total)</TableCell>
                        <TableCell>{data.estimated_normal_price}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell className="font-medium">Saved price</TableCell>
                        <TableCell>{data.estimated_saved_price}</TableCell>
                    </TableRow>
                    <TableRow className="bg-green-500">
                        <TableCell className="font-medium">Final price (total)</TableCell>
                        <TableCell>{data.estimated_final_price}</TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </>
    )
}