'use client'
import { useAuth } from '@/context/AuthContext';
import { IProduct } from '@/types'
import React from 'react'

const ProductDetail: React.FC<IProduct> = ({name, image, description, stock, price, id, categoryId}) => {

  const {userData} = useAuth();

  const handleAddToCart = () => {
      if(!userData?.token) {
          alert("Tienes que estar logueado para agregar productos")
      } else {
          const cart: IProduct[] = JSON.parse(localStorage.getItem("cart") || "[]")
          const productExist = cart.some((item: IProduct) => {
            if(item.id === id) return true;
            return false
          })

          if(productExist) {
            alert("Este producto ya está en tu carrito")
          } else {
            cart.push({
              name, image, id, description, stock, price, categoryId
            })
            localStorage.setItem("cart", JSON.stringify(cart))
            alert("Se agrego el producto a tu carrito")
          }
      }
  }
  
  return (
    <div>
        <h2>{name}</h2>
        <img src={image} alt={`${name} - product image`} />
        <p>{description}</p>
        <p>Stock {stock}</p>
        <p>Price ${price}</p>
        <button onClick={handleAddToCart} className="text-black bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Add to cart</button>
    </div>
  )
}

export default ProductDetail