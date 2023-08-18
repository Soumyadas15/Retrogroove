"use client";

import Image from "next/image";

import useLoadImage from "@/hooks/useLoadImage";
import { Song } from "@/types";
import usePlayer from "@/hooks/usePlayer";

interface MediaItemProps {
  data: Song;
  onClick?: (id: string) => void;
}

const MediaItem: React.FC<MediaItemProps> = ({
  data,
  onClick,
}) => {
  const player = usePlayer();
  const imageUrl = useLoadImage(data);

  const handleClick = () => {
    if (onClick) {
      return onClick(data.id);
    }
  
    return player.setId(data.id);
  };

  return ( 
    <div
      onClick={handleClick}
      className="
        flex 
        items-center
        gap-x-3 
        cursor-pointer 
        hover:bg-[#D0C195]
        w-full 
        group
        p-2 
        rounded-md
        transition
      "
    >
      <div 
        className="
          relative 
          group
          rounded-md 
          min-h-[48px] 
          min-w-[48px] 
          overflow-hidden
        "
      >
        <Image
          fill
          src={imageUrl || "/images/music-placeholder.png"}
          alt="MediaItem"
          className="object-cover group-hover:scale-120 transition"
        />
      </div>
      <div className="flex flex-col gap-y-1 overflow-hidden">
        <p className="text-black  truncate">{data.title}</p>
        <p className="text-neutral-600 text-sm truncate">
          By {data.author}, {data.year}
        </p>
        
      </div>
    </div>
  );
}
 
export default MediaItem;