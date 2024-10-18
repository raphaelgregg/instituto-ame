import { Carousel } from "../components/carousel";

export function Project() {
    const setting = {
        loop: true,
        slides: {
            perView:5,
            spacing: 38
        }
    }

    return(
        <Carousel settings={setting}>
        <div className="keen-slider__slide number-slide1">Slide 1</div>
        <div className="keen-slider__slide number-slide2">Slide 2</div>
        <div className="keen-slider__slide number-slide3">Slide 3</div>
        <div className="keen-slider__slide number-slide4">Slide 4</div>
        <div className="keen-slider__slide number-slide5">Slide 5</div>
        <div className="keen-slider__slide number-slide6">Slide 6</div>
        </Carousel>
    )
}