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
import Loader from "@/components/spinner/Loader"


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
                <Loader/>
                // <svg aria-hidden="true" role="status" className="inline w-4 h-4 me-3 text-white animate-spin" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                // <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="#E5E7EB"/>
                // <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentColor"/>
                // </svg>
              )}
              Login</Button>
          </CardFooter>
        </form>

      </Card>
    </div>

  )
}
