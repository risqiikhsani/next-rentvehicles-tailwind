"use server";

import { cookies } from "next/headers";

export async function updateUser(id: string,formData: FormData) {
  const token = cookies().get("accesstoken")?.value;

  const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/posts/${id}`, {
    method: "PUT",
    body: formData,
    headers: {
      "Content-Type": "multipart/form-data",
      "Authorization": `Bearer  `+`${token}`,
    },
  });

  return response

}


