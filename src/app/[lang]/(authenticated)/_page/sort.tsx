import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export default function Sort() {
  return (
    <>
      <Select>
        <SelectTrigger className="w-[100px]" id="sort">
          <SelectValue placeholder="Sort" />
        </SelectTrigger>
        <SelectContent className="overflow-y-auto max-h-[30rem]">
          <SelectItem value="light">Lowest Price</SelectItem>
          <SelectItem value="dark">Highest Price</SelectItem>
          <SelectItem value="system">New date</SelectItem>
          <SelectItem value="system">Old date</SelectItem>
        </SelectContent>
      </Select>
    </>
  );
}
