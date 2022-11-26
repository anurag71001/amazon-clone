import React from 'react'
import {Carousel} from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css"

function Banner() {
  return (
    <div className='relative'>
        <div className='absolute w-full h-32 bg-gradient-to-t from-gray-100 to-transparent bottom-0 z-20'/>
        <Carousel
        autoPlay
        infiniteLoop
        showStatus={false}
        showThumbs={false}
        interval={5000}
        >
        <div>
            <img loading='lazy' src='https://m.media-amazon.com/images/I/81heLOdzE8L._SX3000_.jpg' alt=''/>
        </div> 

        <div>
        <img loading='lazy' src='https://m.media-amazon.com/images/I/61ttfSEi7fL._SX3000_.jpg' alt=''/>
        </div> 

        <div>
        <img loading='lazy' src='https://m.media-amazon.com/images/I/A18jYn38UwL._SX3000_.png' alt=''/>
        </div> 

        <div>
            <img loading='lazy' src='https://m.media-amazon.com/images/I/61TU7+NPnZL._SX3000_.jpg' alt=''/>
        </div>

        <div>
            <img loading='lazy' src='https://m.media-amazon.com/images/I/61ErCbG5L2L._SX3000_.jpg' alt=''/>
        </div>

        <div>
            <img loading='lazy' src='https://m.media-amazon.com/images/I/613-gA49v1L._SX3000_.jpg' alt=''/>
        </div>
            
        </Carousel>
    </div>
  )
}

export default Banner