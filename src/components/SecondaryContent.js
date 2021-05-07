import React from 'react'
import {Carousel} from 'react-bootstrap'
import CarouselLFS from '../carousel-items/CarouselLFS'
import CarouselLFW from '../carousel-items/CarouselLFW'


const SecondaryContent = () => {
    return (
        <Carousel
        indicators={false}
        prevLabel=''
        nextLabel=''
        interval={20000}
        >
            <Carousel.Item>
                <CarouselLFW/>
            </Carousel.Item>
            <Carousel.Item>
                <CarouselLFS/>
            </Carousel.Item>
        </Carousel>
    )
}

export default SecondaryContent