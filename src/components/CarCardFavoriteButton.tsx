"use client"

import { useAppCtx } from "@/context/App";
import { useAuth } from "@/context/Auth";
import { Locale } from "@/i18n.config";
import api from "@/lib/axios";
import { PostType } from "@/types/types";
import { HeartIcon as HeartIconOutline } from "@heroicons/react/24/outline";
import { HeartIcon as HeartIconSolid } from "@heroicons/react/24/solid";
import { toast } from "sonner";
export default function CarCardFavoriteButton({
    data
}: {
    data: PostType
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
        <>
            {user.role == "Basic" && isFavorite && (
                <HeartIconSolid className="h-7 w-7 transition duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:cursor-pointer text-red-400 hover:text-red-200" onClick={onUnFavorite} />
            )}

            {user.role == "Basic" && !isFavorite && (
                <HeartIconOutline className="h-7 w-7 transition duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:cursor-pointer hover:text-red-100 text-red-400" onClick={onFavorite} />
            )}
        </>
    )
}