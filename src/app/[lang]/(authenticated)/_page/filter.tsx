'use client'

import { Input } from "@/components/ui/input";
import { AdjustmentsHorizontalIcon } from "@heroicons/react/24/solid";

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

import { carFuelTypes, carTransmission, carTypes, manufacturers } from "@/constants";
import { Button } from "@/components/ui/button";


export default function Filter() {
  return (
    <>
      <Dialog>
        <DialogTrigger className="px-2 py-1 border-solid border-2 flex rounded-md border-slate-200">
          <AdjustmentsHorizontalIcon className="m-auto h-4 w-4 mr-2" />
          Filter
        </DialogTrigger>
        <DialogContent className="overflow-y-scroll max-h-screen">
          <DialogHeader>
            <DialogTitle>Filter</DialogTitle>
            <DialogDescription className="py-4 text-black flex flex-col gap-4">
              <div>
                <Label>Brand</Label>
                <Select>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="brand" />
                  </SelectTrigger>
                  <SelectContent className="overflow-y-auto max-h-[30rem]">
                    <SelectItem value="all">All</SelectItem>
                    {manufacturers.map((a, index) => (
                      <SelectItem key={index} value={a}>
                        {a}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label>Car Types</Label>
                <Select>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="car type" />
                  </SelectTrigger>
                  <SelectContent className="overflow-y-auto max-h-[30rem]">
                    <SelectItem value="all">All</SelectItem>
                    {carTypes.map((a, index) => (
                      <SelectItem key={index} value={a}>
                        {a}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="flex gap-2 items-center">
                <Label>min.year</Label>
                <Input id="from_year" placeholder="2000" />
                <Label>max.year</Label>
                <Input id="to_year" placeholder="2023" />
              </div>

              <div className="flex gap-2 items-center">
                <Label>min.price</Label>
                <Input id="from_year" />
                <Label>max.price</Label>
                <Input id="to_year" />
              </div>

              <div>
                <Label>Fuel Type</Label>
                <Select>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="fuel type" />
                  </SelectTrigger>
                  <SelectContent className="overflow-y-auto max-h-[30rem]">
                    <SelectItem value="all">All</SelectItem>
                    {carFuelTypes.map((a, index) => (
                      <SelectItem key={index} value={a}>
                        {a}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label>Transmission</Label>
                <Select>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="transmission" />
                  </SelectTrigger>
                  <SelectContent className="overflow-y-auto max-h-[30rem]">
                    <SelectItem value="all">All</SelectItem>
                    {carTransmission.map((a, index) => (
                      <SelectItem key={index} value={a}>
                        {a}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label>Available</Label>
                <Select>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="available" />
                  </SelectTrigger>
                  <SelectContent className="overflow-y-auto max-h-[30rem]">
                    <SelectItem value="all">All</SelectItem>
                    <SelectItem value="available">Available only</SelectItem>
                    <SelectItem value="not_available">
                      Not available only
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label>Bookable</Label>
                <Select>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="bookable" />
                  </SelectTrigger>
                  <SelectContent className="overflow-y-auto max-h-[30rem]">
                    <SelectItem value="all">All</SelectItem>
                    <SelectItem value="available">Bookable only</SelectItem>
                    <SelectItem value="not_available">
                      Not bookable only
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button type="submit" className="transition duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500">Filter</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}
