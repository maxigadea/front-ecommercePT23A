'use client'
import { useAuth } from '@/context/AuthContext'
import { createOrder } from '@/helpers/orders.helper';
import { IProduct } from '@/types';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'

const CartView = () => {
  const {userData} = useAuth();
  const [cart, setCart] = useState<IProduct[]>([]);
  const [total, setTotal] = useState<number>(0);

  const router = useRouter();
  useEffect(() => {
    !userData && router.push("/login")
  }, [])
  
  useEffect( () => {
    const storedCart = JSON.parse(localStorage.getItem("cart") || "[]")
    if(storedCart) {
      let totalCart = 0;
      storedCart.map((item: IProduct) => {
        totalCart = totalCart + item.price
      })
      setTotal(totalCart)
      setCart(storedCart)
    }
  }, []) 

  const handleCheckout = async () => {
      const idProducts = cart?.map((product) => product.id)
      if(userData?.token) {
        await createOrder(idProducts, userData?.token)
        setCart([])
        setTotal(0)
        localStorage.setItem("cart", "[]")
      }
  }

  return (
    <div className='flex flex-row items-center justify-between w-full px-5'>
        <div>
          Your Products
          {
            cart.length ? cart?.map((item: IProduct) => {
              return (
                <div key={item.id}>
                  <p>{item.name}</p>
                  <p>{item.price}</p>
                </div>
              )
            }) : (<div>You dont have products in your cart</div>)
          }
        </div>
        <div className='flex gap-4 items-center flex-col'>
          Total: {total}
          <button onClick={handleCheckout}>Checkout</button>
        </div>
    </div>

  )
}

export default CartView