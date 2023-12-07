
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
import CarCardFavoriteButton from "./CarCardFavoriteButton";

export default function CarCardButtons({
  data,
  lang,
}: {
  data: PostType;
  lang: Locale;
}) {
  
  

  return (
    <div className="flex gap-2 justify-end w-full items-center">
    
      <CarCardFavoriteButton data={data}/>

      <Button asChild className="grow">
        <CustomLink lang={lang} href={`/posts/${data.ID}`}>
          Detail
          <ArrowRightIcon className="ml-2 h-4 w-4" />
        </CustomLink>
      </Button>
    </div>
  );
}
