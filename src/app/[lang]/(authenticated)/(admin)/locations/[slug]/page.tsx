import Title from "@/components/typography/Title";
import { LocationType } from "@/types/types";
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
async function getData(locationId: string) {
    // const res = await fetch('http://localhost:8080/api/posts',{ next: { tags: ['posts'] } })
    const res = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/locations/${locationId}`,
        { cache: "no-store" }
    );

    if (!res.ok) {
        // This will activate the closest `error.js` Error Boundary
        throw new Error("Failed to fetch data");
    }

    return res.json();
}
export default async function Page({ params }: { params: { slug: string } }) {
    const location: LocationType = await getData(params.slug)

    return (
        <>
            <Title title="Location" text="location detail." />
            <Table>
                <TableCaption>Address detail</TableCaption>
                <TableBody>
                    <TableRow>
                        <TableCell className="font-medium">Location ID</TableCell>
                        <TableCell>{location.ID}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell className="font-medium">Name</TableCell>
                        <TableCell>{location.name}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell className="font-medium">Description</TableCell>
                        <TableCell>{location.description}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell className="font-medium">Address</TableCell>
                        <TableCell>{location.address}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell className="font-medium">City</TableCell>
                        <TableCell>{location.city}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell className="font-medium">Street</TableCell>
                        <TableCell>{location.street_name}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell className="font-medium">Post code</TableCell>
                        <TableCell>{location.post_code}</TableCell>
                    </TableRow>

                    <TableRow>
                        <TableCell className="font-medium">Latitude</TableCell>
                        <TableCell>{location.latitude}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell className="font-medium">Longitude</TableCell>
                        <TableCell>{location.longitude}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell className="font-medium">Created at</TableCell>
                        <TableCell>{location.CreatedAt}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell className="font-medium">Updated at</TableCell>
                        <TableCell>{location.UpdatedAt}</TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </>
    )
}