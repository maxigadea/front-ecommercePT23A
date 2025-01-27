import { getProductsById } from '@/helpers/product.helper'
import ProductDetail from '@/views/ProductDetail'
import React from 'react'

const Detail = async ({
    params,
  }: {
    params: Promise<{ productId: string }>
  }) => {
    const productID = (await params).productId
    const product = await getProductsById(productID);
    
  return (
    <ProductDetail {...product} />
  )
}

export default Detail