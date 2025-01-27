
import { IProduct } from '@/types'
import React from 'react'

const Card: React.FC<IProduct> = ({name, price, image}) => {

  return (
    <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow ">
        <a href="#">
            <img className="p-8 rounded-t-lg" src={image} alt="product image" />
        </a>
        <div className="px-5 pb-5">
            <a href="#">
                <h5 className="text-xl font-semibold tracking-tight text-gray-900 ">{name}</h5>
            </a>
            
            <div className="flex items-center justify-between">
                <span className="text-3xl font-bold text-gray-900">${price}</span>
                
            </div>
        </div>
    </div>
  )
}

export default Card