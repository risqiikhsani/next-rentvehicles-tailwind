import * as React from "react"

import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from '@/components/ui/separator';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import Link from "next/link"

export default function Page() {
    return (
        <div className="flex mx-auto flex-col">
            <div className="flex h-5 items-center space-x-4 text-sm m-4 justify-center">
                <Link href="/auth/login">Login</Link>
                <Separator orientation="vertical" />
                <Link href="/auth/register">Sign Up</Link>
                <Separator orientation="vertical" />
                <Link href="/auth/forgot-password">Forgot Password</Link>
            </div>

            <Card className="w-[350px]">
                <CardHeader>
                    <CardTitle>Sign Up</CardTitle>
                    <CardDescription>Register new account.</CardDescription>
                </CardHeader>
                <CardContent>
                    <form>
                        <div className="grid w-full items-center gap-4">
                            <div className="flex flex-col space-y-1.5">
                                <Label htmlFor="name">Email</Label>
                                <Input id="name" placeholder="email@gmail.com" type="email" />
                            </div>
                            <div className="flex flex-col space-y-1.5">
                                <Label htmlFor="name">Username</Label>
                                <Input id="name" placeholder="username" />
                            </div>
                            <div className="flex flex-col space-y-1.5">
                                <Label htmlFor="name">Password</Label>
                                <Input id="name" type="password" />
                            </div>
                            <div className="flex flex-col space-y-1.5">
                                <Label htmlFor="name">Confirm Password</Label>
                                <Input id="name" type="password" />
                            </div>
                        </div>
                    </form>
                </CardContent>
                <CardFooter className="flex">
                    <div className="flex-grow" />
                    <Button>Sign up</Button>
                </CardFooter>


            </Card>
        </div>

    )
}
