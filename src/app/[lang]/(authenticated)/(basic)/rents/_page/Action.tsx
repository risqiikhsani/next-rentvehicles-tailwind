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
import Cancel from "./_action/Cancel";


export default function Action({ data }: { data: RentType }) {
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
            <Cancel data={data}/>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
}
