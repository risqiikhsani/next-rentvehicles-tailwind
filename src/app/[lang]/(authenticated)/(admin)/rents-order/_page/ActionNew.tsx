import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { RentType } from "@/types/types";
import ReadyToPickup from "./_action/ReadyToPickup";
import Decline from "./_action/Decline";
import { ChevronDownIcon } from "@heroicons/react/24/solid";
import OnProgress from "./_action/OnProgress";
import Done from "./_action/Done";
import Accept from "./_action/Accept";

export default function ActionNew({ data }: { data: RentType }) {
  const disabled =
    data.is_cancelled ||
    data.RentDetail.status == "Done" ||
    data.RentDetail.status == "Declined";

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild disabled={disabled}>
        <Button variant="outline" size="icon">
          <ChevronDownIcon className="h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>Order</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <Accept text="Accept" data={data} />
          <ReadyToPickup text="Ready to pickup" data={data} />
          <OnProgress text="On progress" data={data} />
          <Done text="Done" data={data} />
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>
            Set time when user pick up the car
            <DropdownMenuShortcut>⌘+T</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem>
            Set time when user returned back the car
            <DropdownMenuShortcut>⌘+T</DropdownMenuShortcut>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuSub>
          <DropdownMenuSubTrigger>More</DropdownMenuSubTrigger>
          <DropdownMenuPortal>
            <DropdownMenuSubContent>
              <DropdownMenuItem>Manage photos</DropdownMenuItem>
              <DropdownMenuItem>Manage text</DropdownMenuItem>
            </DropdownMenuSubContent>
          </DropdownMenuPortal>
        </DropdownMenuSub>
        <DropdownMenuSeparator />
        <Decline text="Decline" data={data} />
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
