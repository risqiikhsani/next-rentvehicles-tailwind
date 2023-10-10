import { CarCard } from '@/components/CarCard'
import LeftNavBar from '@/components/left-navbar'
import { Badge } from '@/components/ui/badge'
import { Button, buttonVariants } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'
import { Input } from "@/components/ui/input"
import { Label } from '@/components/ui/label'
import { AdjustmentsHorizontalIcon } from '@heroicons/react/24/solid'

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Separator } from '@/components/ui/separator'



export default function Home() {
    return (
        <>
                <div className='flex justify-around items-center my-5'>

                    <div className='flex gap-4'>
                        <Input id="search" type="text" placeholder='search' />
                        <Button>Search</Button>
                    </div>

                    <Button id='filter' className='rounded-3xl'>
                        <AdjustmentsHorizontalIcon className="mr-2 h-4 w-4" />
                        Filter
                    </Button>

                    <Select>
                        <SelectTrigger className="w-[100px]" id="sort">
                            <SelectValue placeholder="Sort" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="light">Light</SelectItem>
                            <SelectItem value="dark">Dark</SelectItem>
                            <SelectItem value="system">System</SelectItem>
                        </SelectContent>
                    </Select>

                </div>

                <Separator className='my-6' />

                <div className='flex flex-wrap gap-4 justify-center'>
                    <CarCard />
                    <CarCard />
                    <CarCard />
                    <CarCard />
                    <CarCard />
                    <CarCard />
                    <CarCard />
                    <CarCard />
                    <CarCard />
                    <CarCard />
                    <CarCard />
                    <CarCard />
                    <CarCard />
                    <CarCard />
                </div>
        </>
    )
}
