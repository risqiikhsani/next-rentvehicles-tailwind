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
import { DocumentTextIcon } from "@heroicons/react/24/solid";

interface NoteProps {
    data: RentType; // Replace 'any' with the appropriate type for your 'data'
}
export default function Note({ data }: NoteProps) {
    const disabled = data.is_cancelled || data.RentDetail.status == "Done" || data.RentDetail.status == "Declined"

    return (
        <>
            <Dialog>
                <DialogTrigger disabled={disabled} asChild>
                    <Button variant="outline" size="icon" >
                        <DocumentTextIcon className="h-4 w-4" />
                    </Button>
                </DialogTrigger>
                <DialogContent className="lg:max-w-screen-lg overflow-y-scroll max-h-screen">
                    <DialogHeader>
                        <DialogTitle>Note text</DialogTitle>
                        <DialogDescription>
                            Save any informations related to the rent or user
                        </DialogDescription>
                    </DialogHeader>
                </DialogContent>
            </Dialog>
        </>
    )
}