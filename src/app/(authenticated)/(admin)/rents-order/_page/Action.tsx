import { RentType } from "@/types/types";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { ChevronDownIcon } from "@heroicons/react/24/solid";
import { Button } from "@/components/ui/button";


export default function Action({ data }: { data: RentType }) {
    return (
        <>
            <DropdownMenu>
                <DropdownMenuTrigger>
                    <Button variant="outline" size="icon">
                        <ChevronDownIcon className="h-4 w-4" />
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                    <DropdownMenuLabel>Action</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>Accept</DropdownMenuItem>
                    <DropdownMenuItem>Decline</DropdownMenuItem>
                    <DropdownMenuItem>Ready to pickup</DropdownMenuItem>
                    <DropdownMenuItem>Item has been picked up now</DropdownMenuItem>
                    <DropdownMenuItem>On Process</DropdownMenuItem>
                    <DropdownMenuItem>Item has been returned now</DropdownMenuItem>
                    <DropdownMenuItem>Done</DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        </>
    )
}