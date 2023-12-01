"use client";

import { ArrowRightIcon, HeartIcon } from "@heroicons/react/24/solid";
import { PencilIcon } from "@heroicons/react/24/solid";
import { TrashIcon } from "@heroicons/react/24/solid";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { PostType } from "@/types/types";
import { useAuth } from "@/context/Auth";
import { UserType } from "@/types/types";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import api from "@/lib/axios";
import { toast } from "sonner";
import { revalidatePath } from 'next/cache'
import { useRouter } from 'next/navigation'


export default function Buttons({ data }: { data: PostType }) {
  const router = useRouter()
  const { user } = useAuth();

  const deletePost = async () => {
    try {
      const response = await api.delete(`api/posts/${data.ID}`);
      console.log(response.data)
      toast.success("Post has been deleted")
      router.refresh()
    } catch (error) {
      // Handle errors here
      toast.error("Something went wrong, error delete post.")
      console.error('Error delete post:', error);
    }
  }

  return (
    <div className="flex gap-2 flex-wrap">

      <Button asChild className="grow">
        <Link href={`posts/${data.ID}`}>
          Detail
          <ArrowRightIcon className="ml-2 h-4 w-4" />
        </Link>
      </Button>

      {user.ID == data.UserID && (
        <>
          <Button asChild className="grow">
            <Link href={`edit-post/${data.ID}`}>
              Edit
              <PencilIcon className="ml-2 h-4 w-4" />
            </Link>
          </Button>

          <AlertDialog>
            <AlertDialogTrigger className="grow">
              <Button className="w-full bg-red-400 hover:bg-red-300">
                Delete
                <TrashIcon className="ml-2 h-4 w-4" />
              </Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>
                  Are you absolutely sure to delete this post?
                </AlertDialogTitle>
                <AlertDialogDescription>
                  This action cannot be undone. This will permanently delete your
                  post and remove your data from our servers.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
                <AlertDialogAction onClick={deletePost}>Continue</AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </>
      )}


    </div>
  )
}
