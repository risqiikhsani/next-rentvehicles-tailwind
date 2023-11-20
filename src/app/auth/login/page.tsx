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
import { useAuth } from "@/context/Auth"


interface LoginInput {
  username: string
  password: string
}

export default function Page() {

  const { handleLoginSuccess } = useAuth();

  const { register,
    handleSubmit,
    watch,
    formState: { errors },
    reset } = useForm<LoginInput>();

  const [loading, setLoading] = React.useState(false);
  const [error,setError] = React.useState("")

  const onSubmit: SubmitHandler<LoginInput> = async (data) => {
    console.log('Submitted data:', data);
    // You can handle login logic here
    setLoading(true);
    setError("")
    try {
      const response = await fetch("http://localhost:8080/api/login", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json"
        }
      });

      const responseData = await response.json();

      if (!response.ok) {
        toast.error('Error');
        setError(responseData.error)
        setLoading(false);
        return;
      }

      handleLoginSuccess(responseData)
      toast.success('Successfully Login');

      reset();
    } catch (error) {
      toast.error('Error occurred while processing');
      console.error('Error:', error);
    } finally {
      setLoading(false); // Set loading to false when the request is done (success or error)
    }
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
            {error && <p className="text-red-600">{error}</p>}
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="username">Username</Label>
                <Input {...register("username", { required: "Username is required" })} id="username" placeholder="username" />
                {errors.username && <p className="text-red-600">{errors.username.message}</p>}
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="password">Password</Label>
                <Input type="password" {...register("password", { required: "Password is required" })} id="password" />
                {errors.password && <p className="text-red-600">{errors.password.message}</p>}
              </div>
            </div>

          </CardContent>
          <CardFooter className="flex">
            <div className="flex-grow" />
            <Button type="submit" className="transition duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500">
              {loading && (
                <svg className="animate-spin h-5 w-5 mr-3 ..." xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
                </svg>
              )}
              Login</Button>
          </CardFooter>
        </form>

      </Card>
    </div>

  )
}
