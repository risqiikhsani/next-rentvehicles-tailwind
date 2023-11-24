"use server";

import { cookies } from "next/headers";

export async function updateUser(id: string,formData: FormData) {
  const token = cookies().get("accesstoken")?.value;

  const response = await fetch(`http://localhost:8080/api/posts/${id}`, {
    method: "PUT",
    body: formData,
    headers: {
      "Content-Type": "multipart/form-data",
      "Authorization": `Bearer  `+`${token}`,
    },
  });

  return response

}


