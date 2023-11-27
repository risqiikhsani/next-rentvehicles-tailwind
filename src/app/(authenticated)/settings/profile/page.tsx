import Title from "@/components/typography/Title";
import { UserType } from "@/types/types";
import { cookies } from "next/headers";
import UpdateProfile from "./_page/form";

async function getData() {
  // const res = await fetch('http://localhost:8080/api/posts',{ next: { tags: ['posts'] } })
  const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/me/user`, {
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
  const user: UserType = await getData()

  return (
    <>
      <Title title="Profile Settings" />
        <UpdateProfile defaultValue={user}/>
    </>
  );
}
