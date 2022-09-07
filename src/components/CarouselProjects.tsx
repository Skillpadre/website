import React, { ReactNode } from 'react'
import useEmblaCarousel, { EmblaOptionsType } from 'embla-carousel-react'

type PropType = {
    options?: EmblaOptionsType
}

export const EmblaCarousel = (props: PropType) => {
    const { options } = props
    const [emblaRef] = useEmblaCarousel(options)

    return (
        <div  className="embla" ref={emblaRef}>
            <div className="embla__container">
                <div className="embla__slide" key={1}>
                    1
                </div>
                <div className="embla__slide" key={2} >
                2
            </div>
            <div className="embla__slide" key={3} >
            3
        </div>
        {/* {slides.map((slide, index) => (
          <div className="embla__slide" key={index}>
            {slide}
          </div>
        ))} */}
      </div >
    </div >
  )
}

export default EmblaCarousel