"use client";

import CustomLink from "@/components/CustomLink";
import { Button } from "@/components/ui/button";
import { useAppCtx } from "@/context/App";
import { useAuth } from "@/context/Auth";
import { Locale } from "@/i18n.config";
import api from "@/lib/axios";
import { PostType } from "@/types/types";
import { ArrowRightIcon, HeartIcon as HeartIconSolid} from "@heroicons/react/24/solid";
import { HeartIcon as HeartIconOutline} from "@heroicons/react/24/outline";
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
      const response = await api.post(`/api/favorites?post_id=${data.ID}`);
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
      const response = await api.delete(`/api/favorites?post_id=${data.ID}`);
      if (response.data) {
        toast.success("Car removed from favorites");
        fetchFavorites();
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex gap-2 justify-end w-full items-center">
      {user.role == "Basic" && isFavorite && (
        // <Button variant="outline" className="grow" onClick={onUnFavorite}>
        //   Favorited
        //   <HeartIconSolid className="ml-2 h-4 w-4 text-red-400" />
        // </Button>
        <HeartIconSolid className="h-7 w-7 transition duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:cursor-pointer text-red-400 hover:text-red-200" onClick={onUnFavorite}/>
      )}

      {user.role == "Basic" && !isFavorite && (
        // <Button variant="outline" className="grow" onClick={onFavorite}>
        //   Favorite
        //   <HeartIconOutline className="ml-2 h-4 w-4 " />
        // </Button>
        <HeartIconOutline className="h-7 w-7 transition duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:cursor-pointer hover:text-red-100 text-red-400" onClick={onFavorite}/>
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
