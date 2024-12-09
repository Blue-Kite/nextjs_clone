'use client';
import { getRandomElementFromArray } from '@/lib/utils';
import { Playlist } from '@/types';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { FiPlay } from 'react-icons/fi';

interface PlayListCardProps {
    playList: Playlist;
}
export const PlayListCard = ({ playList }: PlayListCardProps) => {
    const { push } = useRouter();
    const { id, owner = '', playlistName = '', songList = [] } = playList ?? {};
    const songListLen = songList?.length;
    const imageSrc = getRandomElementFromArray(songList)?.imageSrc;

    const onClickCard = () => {
        if (id) push(`/playlist?list=${id}`);
    };

    const onClickPlay = () => {};

    return (
        <article className=" h-[240px] cursor-pointer group">
            <section onClick={onClickCard} className="relative h-[136px] ">
                <Image
                    src={
                        imageSrc ||
                        'https://images.unsplash.com/photo-1707833558984-3293e794031c'
                    }
                    fill={true}
                    alt="thumbnail"
                    className="object-cover rounded-md"
                />
                <div className="hidden relative group-hover:block bg-gradient-to-b from-[rgba(0,0,0,0.7)] top-0 w-full h-[136px] ">
                    <div className=" absolute top-2 right-4">
                        <button>플레이</button>
                    </div>
                    <div
                        onClick={onClickPlay}
                        className="absolute bottom-4 right-4 flex items-center justify-center
           transform-gpu transition-transform hover:scale-110 
           bg-[rgba(0,0,0,0.7)] w-[45px] h-[45px] rounded-full
           hover:bg-[rgba(0,0,0,0.9)] pl-[1.5px]
           "
                    >
                        <FiPlay size={22} color="red" />
                    </div>
                </div>
            </section>
            <section>
                <div>{playlistName}</div>
                <div>{`${owner} - 트랙 ${songListLen}개`}</div>
            </section>
        </article>
    );
};
