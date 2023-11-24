import { RentType } from "@/types/types";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { ArrowRightIcon, FolderOpenIcon } from "@heroicons/react/24/solid";
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


export default function Files({ data }: { data: RentType }) {
    return (
        <>
            <Dialog>
                <DialogTrigger>
                    <Button variant="outline" size="icon">
                        <FolderOpenIcon className="h-4 w-4" />
                    </Button>
                </DialogTrigger>
                <DialogContent className="lg:max-w-screen-lg overflow-y-scroll max-h-screen">
                    <DialogHeader>
                        <DialogTitle>Files</DialogTitle>
                        <DialogDescription>
                            Save files/images as informations related to the rent or user
                        </DialogDescription>
                    </DialogHeader>
                </DialogContent>
            </Dialog>
        </>
    )
}