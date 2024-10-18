import { ReactNode } from 'react';
import {KeenSliderOptions, useKeenSlider} from 'keen-slider/react';

import 'keen-slider/keen-slider.min.css';
import "styles";

interface CarouselProps {
    children: ReactNode;
    settings?: KeenSliderOptions;
}

export function Carousel({children, settings}: CarouselProps) {

    const defaultSettings: KeenSliderOptions = {
        slides: {
            spacing: 50,
            perView: 3
        }
    };

    const [sliderRef] = useKeenSlider<HTMLDivElement>({
        ...defaultSettings,
        ...settings
    });

    const slideStyle = {
        animation: 'scroll 10s linear infinite'
    };

    return (
        <div ref={sliderRef} className="keen-slider">
            {children}
        </div>
    )
}