import Title from "@/components/typography/Title";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { AccountType } from "@/types/types";
import { CheckIcon, InformationCircleIcon, XCircleIcon } from "@heroicons/react/24/solid";
import { cookies } from 'next/headers'
import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "@/components/ui/alert"
import { IoAlertCircle } from "react-icons/io5";
import { formatTimestamp } from "@/lib/helpers";
async function getData() {
  // const res = await fetch('http://localhost:8080/api/posts',{ next: { tags: ['posts'] } })
  const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/me/account`, {
    cache: "no-store",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${cookies().get("accesstoken")?.value}`,
    },
  });

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function Page() {

  const account: AccountType = await getData()

  return (
    <>
      <Title title="Account Settings" />

      {!account.email_verified && (
        <Alert variant="destructive" className="my-6">
          <IoAlertCircle className="h-4 w-4" />
          <AlertTitle>Account needs an action</AlertTitle>
          <AlertDescription>
            Please verify your email address.
          </AlertDescription>
        </Alert>
      )}

      {account.phone == "" && (
        <Alert variant="destructive" className="my-6">
          <IoAlertCircle className="h-4 w-4" />
          <AlertTitle>Account needs an action</AlertTitle>
          <AlertDescription>
            Please insert the phone number.
          </AlertDescription>
        </Alert>
      )}





      <div className="my-2">
        <p className="text-lg font-semibold">Username</p>
        <p className="font-light">{account.username}</p>
      </div>

      <div className="my-2">
        <p className="text-lg font-semibold">Email</p>
        <p className="font-light">{account.email}</p>
        <div className="flex gap-2 items-center">
          <p className="italic">{account.email_verified ? "email verified" : "email not verified"}</p>
          {account.email_verified && <CheckIcon className="h-8 w-8 text-blue-500" />}
        </div>
      </div>

      <div className="my-2">
        <p className="text-lg font-semibold">Phone</p>
        <p className="font-light">{account.phone == "" ? "you haven't added a phone number yet" : account.phone}</p>
      </div>

      <div className="my-2">
        <p className="text-lg font-semibold">Created at</p>
        <p className="font-light">{formatTimestamp(account.CreatedAt)}</p>
      </div>

      <div className="my-2">
        <p className="text-lg font-semibold">Last Updated</p>
        <p className="font-light">{formatTimestamp(account.UpdatedAt)}</p>
      </div>

      <Separator className="my-6" />
      <h2>Password and Authentication</h2>
      <Button>Change Password</Button>
      <Separator className="my-6" />
      <h2>TWO-FACTOR AUTHENTICATION</h2>
      <p>
        Protect your account with extra layer of security. Once configured,
        you'll be required to enter both your password and an authentication
        code from your mobile phone in order to sign in.
      </p>
      <Button>Enable Two-Factor Auth</Button>
    </>
  )
}