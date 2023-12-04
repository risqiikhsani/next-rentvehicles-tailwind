import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export default function Sort() {
  return (
    <>
      <Select>
        <SelectTrigger className="w-[100px]" id="sort">
          <SelectValue placeholder="Sort" />
        </SelectTrigger>
        <SelectContent className="overflow-y-auto max-h-[30rem]">
          <SelectItem value="lowest_price">Lowest Price</SelectItem>
          <SelectItem value="highest_price">Highest Price</SelectItem>
          <SelectItem value="new_date">New date</SelectItem>
          <SelectItem value="old_date">Old date</SelectItem>
        </SelectContent>
      </Select>
    </>
  );
}
