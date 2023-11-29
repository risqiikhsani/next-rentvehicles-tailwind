'use client'

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { AdjustmentsHorizontalIcon } from "@heroicons/react/24/solid";

import Loader from "@/components/spinner/Loader";
import {
    Dialog,
    DialogContent,
    DialogDescription,
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
import { useState } from "react";

import { SubmitHandler, useForm } from "react-hook-form";
import { carFuelTypes, carTransmission, carTypes, manufacturers } from "@/constants";

interface SearchInput {
    text: string;
}

export default function Search({
    children,
}: {
    children: React.ReactNode
}) {


    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
        reset,
    } = useForm<SearchInput>();

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const onSubmit: SubmitHandler<SearchInput> = async (data) => {
        console.log("Submitted data:", data);

    };

    return (
        <>

            <form onSubmit={handleSubmit(onSubmit)} className="flex justify-between items-center my-5">

                <div className="flex gap-2">
                    <Input
                        {...register("text")}
                        id="text"
                        placeholder="search for car"
                    />
                    <Button
                        type="submit"
                        className="transition duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500"
                    >
                        {loading && (
                            <Loader />
                        )}
                        Search
                    </Button>
                </div>

                <Dialog>
                    <DialogTrigger className="px-2 py-1 border-solid border-2 flex rounded-md border-slate-200">
                        <AdjustmentsHorizontalIcon className="m-auto h-4 w-4 mr-2" />
                        Filter
                    </DialogTrigger>
                    <DialogContent>
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
                                    <Input
                                        id="from_year"
                                        placeholder="2000"
                                    />
                                    <Label>max.year</Label>
                                    <Input
                                        id="to_year"
                                        placeholder="2023"
                                    />
                                </div>

                                <div className="flex gap-2 items-center">
                                    <Label>min.price</Label>
                                    <Input
                                        id="from_year"
                                    />
                                    <Label>max.price</Label>
                                    <Input
                                        id="to_year"
                                    />
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
                                            <SelectItem value="not_available">Not available only</SelectItem>
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
                                            <SelectItem value="not_available">Not bookable only</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>

                            </DialogDescription>
                        </DialogHeader>
                    </DialogContent>
                </Dialog>

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




            </form>

            {children}
        </>
    )
}