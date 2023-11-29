import { RentType } from "@/types/types";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDownIcon } from "@heroicons/react/24/solid";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Decline from "./_action/Decline";
import ReadyToPickup from "./_action/ReadyToPickup";

interface ActionProps {
  data: RentType
}

export default function Action({data}: ActionProps) {
  const disabled =
    data.is_cancelled ||
    data.RentDetail.status == "Done" ||
    data.RentDetail.status == "Declined";

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger disabled={disabled} asChild>
          <Button variant="outline" size="icon" >
            <ChevronDownIcon className="h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel>Action</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>Accept</DropdownMenuItem>
            <Decline data={data}/>
            <ReadyToPickup data={data}/>
          <DropdownMenuItem>Item has been picked up now</DropdownMenuItem>
          <DropdownMenuItem>On Process</DropdownMenuItem>
          <DropdownMenuItem>Item has been returned now</DropdownMenuItem>
          <DropdownMenuItem>Done</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
}
