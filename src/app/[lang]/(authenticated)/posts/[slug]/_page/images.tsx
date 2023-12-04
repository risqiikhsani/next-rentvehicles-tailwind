"use client";

import { PostType } from "@/types/types";
import Image from "next/image";
import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";

export default function Images({ data }: { data: PostType }) {
  const [index, setIndex] = useState(-1);

  return (
    <>
      <div className="flex overflow-x-auto w-fit">
        {data.Images &&
          data.Images.map((a, i) => (
            <Image
              key={i}
              className="rounded-xl m-4 w-20 h-20 hover:border-4 hover:border-indigo-600 hover:cursor-pointer"
              src={a.url}
              alt="pic"
              width={500}
              height={500}
              onClick={() => setIndex(i)}
            />
          ))}
      </div>

      <Lightbox
        slides={data.Images.map((a) => ({ src: a.url }))}
        index={index}
        open={index >= 0}
        close={() => setIndex(-1)}
      />
    </>
  );
}
