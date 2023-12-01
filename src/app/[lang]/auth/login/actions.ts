"use server"


export async function LoginAccount(formData: FormData){
    const username = formData.get("username");
    const password = formData.get("password");

    console.log({ username, password });
}