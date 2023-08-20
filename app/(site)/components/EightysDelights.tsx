"use client";

import { Song } from "@/types";
import SongItem from "@/components/SongItem";
import useOnPlay from "@/hooks/useOnPlay";

interface EightysDelightsProps {
  songs: Song[];
}

const shuffleArray = (array: any[]) => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

const EightysDelights: React.FC<EightysDelightsProps> = ({ songs }) => {
  const onPlay = useOnPlay(songs);

  const filteredSongs = songs.filter(
    (song) => song.year >= 1980 && song.year <= 1990
  );
  const shuffledSongs = shuffleArray(filteredSongs).slice(0, 5); // Take 5 random songs

  if (shuffledSongs.length === 0) {
    return (
      <div className="mt-4 text-neutral-400">No songs available.</div>
    );
  }

  return (
    <div
      className="
        grid
        grid-cols-2
        sm:grid-cols-3
        md:grid-cols-3
        lg:grid-cols-4
        xl:grid-cols-5
        2xl:grid-cols-8
        gap-4
        mt-4
      "
    >
      {shuffledSongs.map((item) => (
        <SongItem
          onClick={(id: string) => onPlay(id)}
          key={item.id}
          data={item}
        />
      ))}
    </div>
  );
};

export default EightysDelights;
