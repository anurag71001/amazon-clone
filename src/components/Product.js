import React, { useState } from 'react'
import Image from 'next/image'
import { StarIcon } from '@heroicons/react/solid'
import Currency from 'react-currency-formatter'

const MAX_RATING = 5;
const MIN_RATING = 1;

function Product({id, title, price, description,category, image}) {
    // Rating code
    const [rating] = useState(
        Math.floor(Math.random() * (MAX_RATING - MIN_RATING +1)) + MIN_RATING
    );

    // Prime feature
    const [hasPrime] = useState(
        Math.random() < 0.5
    )
  return (
    <div className='relative flex flex-col m-5 bg-white z-30 p-10'>
        <p className='absolute top-2 right-2 text-xs italic text-gray-400'>{category}</p>

        <Image 
        src={image} 
        height={200}
        width={200}
        objectFit="contain"/>
        <h4>{title}</h4>
        <div className='flex'>
            {Array(rating)
            .fill()
            .map((_, i) => (
                <StarIcon className='h-5 text-yellow-500'/>
            ))}
        
        </div>

        <p className='text-xs my-2 line-clamp-2'>{description}</p>
        <div className='mb-5'>
            <Currency quantity={price} currency='INR'/>
        </div>
        {hasPrime && (
            <div className='flex item-center space-x-2 -mt-5'>
                <img className='w-12' src='https://th.bing.com/th/id/R.69773cf306af4190ca5d7c0f8492b997?rik=U0hNnJ9rS9%2fQkw&riu=http%3a%2f%2fg-ecx.images-amazon.com%2fimages%2fG%2f01%2fmarketing%2fprime%2fpdp%2fcheckPrime._CB336387061_.png&ehk=InJBl0o7PRBIbsOsNOkl9JldDwvHFao3UwOber9eUuU%3d&risl=&pid=ImgRaw&r=0' alt=''/>
                <p className='text-xs text-gray-500'>FREE Next-day Delivery</p>
            </div>
        )}
        <button className='mt-auto button'>Add to Cart</button>
    </div>
  )
}

export default Product