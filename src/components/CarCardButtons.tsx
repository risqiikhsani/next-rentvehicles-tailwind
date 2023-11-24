"use client";

import { ArrowRightIcon, HeartIcon } from "@heroicons/react/24/solid";
import { PencilIcon } from "@heroicons/react/24/solid";
import { TrashIcon } from "@heroicons/react/24/solid";
import { Button } from "./ui/button";
import Link from "next/link";
import { PostType } from "@/types/types";
import { useAuth } from "@/context/Auth";
import { UserType } from "../types/types";
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

export default function CarCardButtons({ data }: { data: PostType }) {
  const { user } = useAuth();

  return (
    <div className="flex gap-2 justify-end w-full">
      {user.role == "Basic" && (
        <Button variant="outline" className="grow">
            Favorite
            <HeartIcon className="ml-2 h-4 w-4" />
        </Button>
      )}

      <Button asChild className="grow">
        <Link href={`posts/${data.ID}`}>
          Detail
          <ArrowRightIcon className="ml-2 h-4 w-4" />
        </Link>
      </Button>
    </div>
  );
}
