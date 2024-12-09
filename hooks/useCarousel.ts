import { CarouselContext } from '@/components/elements/Carousel/CarouselContext';
import React from 'react';

export function useCarousel() {
    const context = React.useContext(CarouselContext);

    if (!context) {
        throw new Error('useCarousel must be used within a <Carousel />');
    }

    return context;
}
