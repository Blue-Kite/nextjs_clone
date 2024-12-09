'use client';
import React from 'react';
import { CarouselApi, CarouselContext, CarouselProps } from './CarouselContext';
import useEmblaCarousel from 'embla-carousel-react';
import { useCarousel } from '@/hooks/useCarousel';
import { GrPrevious } from 'react-icons/gr';
import { GrNext } from 'react-icons/gr';

export const Carousel = React.forwardRef<
    HTMLDivElement,
    React.HTMLAttributes<HTMLDivElement> & CarouselProps
>(
    (
        {
            orientation = 'horizontal',
            opts,
            setApi,
            plugins,
            className,
            children,
            ...props
        },
        ref
    ) => {
        const [carouselRef, api] = useEmblaCarousel(
            {
                ...opts,
                axis: orientation === 'horizontal' ? 'x' : 'y',
            },
            plugins
        );

        const [canScrollPrev, setCanScrollPrev] = React.useState(false);
        const [canScrollNext, setCanScrollNext] = React.useState(false);

        const onSelect = React.useCallback((api: CarouselApi) => {
            if (!api) {
                return;
            }

            setCanScrollPrev(api.canScrollPrev());
            setCanScrollNext(api.canScrollNext());
        }, []);

        React.useEffect(() => {
            if (!api) return;
            onSelect(api);
            api.on('select', onSelect);

            return () => {
                api.off('select', onSelect);
            };
        }, [api, onSelect]);

        const scrollPrev = React.useCallback(() => {
            api?.scrollPrev();
        }, [api]);

        const scrollNext = React.useCallback(() => {
            api?.scrollNext();
        }, [api]);

        const handleKeyDown = React.useCallback(
            (event: React.KeyboardEvent<HTMLDivElement>) => {
                if (event.key === 'ArrowLeft') {
                    event.preventDefault();
                    scrollPrev();
                } else if (event.key === 'ArrowRight') {
                    event.preventDefault();
                    scrollNext();
                }
            },
            [scrollPrev, scrollNext]
        );

        return (
            <CarouselContext.Provider
                value={{
                    carouselRef,
                    api: api,
                    opts,
                    orientation:
                        orientation ||
                        (opts?.axis === 'y' ? 'vertical' : 'horizontal'),
                    scrollPrev,
                    scrollNext,
                    canScrollPrev,
                    canScrollNext,
                }}
            >
                <div ref={ref} onKeyDownCapture={handleKeyDown} {...props}>
                    {children}
                </div>
            </CarouselContext.Provider>
        );
    }
);

export const CarouselContent = React.forwardRef<
    HTMLDivElement,
    React.HTMLAttributes<HTMLDivElement>
>(({ ...props }, ref) => {
    const { carouselRef, orientation } = useCarousel();

    return (
        <div ref={carouselRef} className="overflow-hidden">
            <div
                ref={ref}
                className={`flex ${
                    orientation === 'horizontal' ? '-ml-4' : '-mt-4 flex-col'
                }`}
                {...props}
            />
        </div>
    );
});

export const CarouselItem = React.forwardRef<
    HTMLDivElement,
    React.HTMLAttributes<HTMLDivElement>
>(({ ...props }, ref) => {
    const { orientation } = useCarousel();

    return (
        <div
            ref={ref}
            role="group"
            aria-roledescription="slide"
            className={`min-w-0 shrink-0 grow-0 basis-full
            ${orientation === 'horizontal' ? 'pl-4' : 'pt-4'}`}
            {...props}
        />
    );
});

export const CarouselPrevious = React.forwardRef<
    HTMLButtonElement,
    React.ButtonHTMLAttributes<HTMLButtonElement>
>(({ ...props }, ref) => {
    const { scrollPrev, canScrollPrev } = useCarousel();

    return (
        <button
            ref={ref}
            disabled={!canScrollPrev}
            onClick={scrollPrev}
            {...props}
        >
            <GrPrevious className="h-4 w-4" />
        </button>
    );
});

export const CarouselNext = React.forwardRef<
    HTMLButtonElement,
    React.ButtonHTMLAttributes<HTMLButtonElement>
>(({ ...props }, ref) => {
    const { scrollNext, canScrollNext } = useCarousel();

    return (
        <button
            ref={ref}
            disabled={!canScrollNext}
            onClick={scrollNext}
            {...props}
        >
            <GrNext className="h-4 w-4" />
        </button>
    );
});
