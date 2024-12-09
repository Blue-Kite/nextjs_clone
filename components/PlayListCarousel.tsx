'use client';
import { Playlist } from '@/types';
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from './elements/Carousel/CarouselProvider';
import { PlayListCard } from './PlayListCard';

interface PlayListCarouselProps {
    title: string;
    subTitle?: string;
    Thumbnail?: React.ReactNode;
    playlistArray?: Playlist[];
}

const PlayListCarousel: React.FC<PlayListCarouselProps> = ({
    title,
    subTitle,
    Thumbnail,
    playlistArray,
}) => {
    return (
        <div className="w-full">
            <Carousel>
                <div className={'flex flex-row justify-between items-end my-2'}>
                    <article className="flex flex-row items-center gap-3">
                        {Thumbnail}
                        <div className="flex flex-col justify-center">
                            <div>
                                {subTitle && (
                                    <p className=" text-neutral-500">
                                        {subTitle}
                                    </p>
                                )}
                            </div>
                            <p className="text-[34px] font-bold">{title}</p>
                        </div>
                    </article>
                    <div className="relative">
                        <div className="flex flex-row gap-[20px]">
                            <CarouselPrevious />
                            <CarouselNext />
                        </div>
                    </div>
                </div>
                <CarouselContent className="mt-4">
                    {playlistArray?.map((playlist, index) => {
                        return (
                            <CarouselItem key={index}>
                                <PlayListCard playList={playlist} />
                            </CarouselItem>
                        );
                    })}
                </CarouselContent>
            </Carousel>
        </div>
    );
};

export default PlayListCarousel;
