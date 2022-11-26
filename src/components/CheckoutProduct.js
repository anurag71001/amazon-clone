import { StarIcon } from '@heroicons/react/solid'
import Image from 'next/image'
import React from 'react'
import Currency from 'react-currency-formatter'
import { useDispatch } from 'react-redux'
import {addToBasket, removeFromBasket} from '../slices/basketSlice'

function CheckoutProduct({
    id, 
    title, 
    price, 
    rating,
    description,
    category, 
    image,
    hasPrime,
}) {
    const dispatch=useDispatch();
    const addItemToBasket = () =>{
        const product = {
            id, 
            title, 
            price, 
            rating,
            description,
            category, 
            image,
            hasPrime,
        }
        // push items into redux
        dispatch(addToBasket(product))
    }

    const removeItemFromBasket = () => {
        // Remove item from redux
        dispatch(removeFromBasket({id}))
    }
  return (
    <div className='grid grid-cols-5'>
        <Image 
        src={image}
        height={200}
        width={200}
        objectFit='contain'
        />
        {/* Middle section */}
        <div className='col-span-3 mx-5'>
            <p>{title}</p>
            <div className='flex'>
                {Array(rating)
                .fill()
                .map((_,i) =>(
                    <StarIcon key={i} className='h-5 text-yellow-500'/>
                ))
                }
            </div>
            <p className='text-xs mt-2 mb-2 line-clamp-3'>{description}</p>
            <Currency
            quantity={price}
            currency='INR'
            />
            {hasPrime && (
                <div className='flex items-center space-x-2'>
                    <img
                    loading='lazy'
                    className='w-12'
                    src='https://th.bing.com/th/id/R.69773cf306af4190ca5d7c0f8492b997?rik=U0hNnJ9rS9%2fQkw&riu=http%3a%2f%2fg-ecx.images-amazon.com%2fimages%2fG%2f01%2fmarketing%2fprime%2fpdp%2fcheckPrime._CB336387061_.png&ehk=InJBl0o7PRBIbsOsNOkl9JldDwvHFao3UwOber9eUuU%3d&risl=&pid=ImgRaw&r=0'
                    alt=''
                    />
                    <p className='text-xs text-gray-500'>FREE Next-day delivery</p>
                </div>
            )}
        </div>
        <div className='flex flex-col space-y-2 my-auto justify-self-end'>
            <button className='button' onClick={addItemToBasket}>Add to Cart</button>
            <button className='button' onClick={removeItemFromBasket}>Remove from Cart</button>
        </div>
    </div>
  )
}

export default CheckoutProduct