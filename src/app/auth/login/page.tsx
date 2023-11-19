"use client"

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
import { toast } from "sonner"
import { LoginAccount } from "./actions"

import { useForm, SubmitHandler } from "react-hook-form"


interface LoginInput {
  username: string
  password: string
}

export default function Page() {

  const { register, 
    handleSubmit, 
    watch,
    formState: { errors }, 
    reset } = useForm<LoginInput>();



  const onSubmit: SubmitHandler<LoginInput> = (data) => {
    console.log('Submitted data:', data);
    // You can handle login logic here
    reset();
  }

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
          <CardTitle>Login</CardTitle>
          <CardDescription>Enter your username and password !</CardDescription>
        </CardHeader>
        <form onSubmit={handleSubmit(onSubmit)}>
          <CardContent>
            
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="username">Username</Label>
                <Input {...register("username", { required: "Username is required"})} id="username" placeholder="username" />
                {errors.username && <p className="text-red-600">{errors.username.message}</p>}
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="password">Password</Label>
                <Input type="password" {...register("password", { required: "Password is required"})} id="password" />
                {errors.password && <p className="text-red-600">{errors.password.message}</p>}
              </div>
            </div>

          </CardContent>
          <CardFooter className="flex">
            <div className="flex-grow" />
            <Button type="submit" onClick={() => toast.success('Login')}>Login</Button>
          </CardFooter>
        </form>

      </Card>
    </div>

  )
}
