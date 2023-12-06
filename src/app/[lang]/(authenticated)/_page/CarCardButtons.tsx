"use client";

import CustomLink from "@/components/CustomLink";
import { Button } from "@/components/ui/button";
import { useAppCtx } from "@/context/App";
import { useAuth } from "@/context/Auth";
import { Locale } from "@/i18n.config";
import api from "@/lib/axios";
import { PostType } from "@/types/types";
import { ArrowRightIcon, HeartIcon } from "@heroicons/react/24/solid";
import { toast } from "sonner";

export default function CarCardButtons({
  data,
  lang,
}: {
  data: PostType;
  lang: Locale;
}) {
  const { user } = useAuth();
  const { favorites, fetchFavorites } = useAppCtx();

  const isFavorite = favorites.some((favorite) => favorite.PostID === data.ID);

  const onFavorite = async () => {
    try {
      const response = await api.post(`/api/favorite?post_id=${data.ID}`);
      if (response.data) {
        toast.success("Car added to favorites");
        fetchFavorites();
      }
    } catch (error) {
      console.log(error);
    }
  };

  const onUnFavorite = async () => {
    try {
      const response = await api.delete(`/api/favorite?post_id=${data.ID}`);
      if (response.data) {
        toast.success("Car removed from favorites");
        fetchFavorites();
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex gap-2 justify-end w-full">
      {user.role == "Basic" && isFavorite && (
        <Button variant="outline" className="grow" onClick={onUnFavorite}>
          Favorited
          <HeartIcon className="ml-2 h-4 w-4 bg-red-400" />
        </Button>
      )}

      {user.role == "Basic" && !isFavorite && (
        <Button variant="outline" className="grow" onClick={onFavorite}>
          Favorite
          <HeartIcon className="ml-2 h-4 w-4 " />
        </Button>
      )}

      <Button asChild className="grow">
        <CustomLink lang={lang} href={`/posts/${data.ID}`}>
          Detail
          <ArrowRightIcon className="ml-2 h-4 w-4" />
        </CustomLink>
      </Button>
    </div>
  );
}
