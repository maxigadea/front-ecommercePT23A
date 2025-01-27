
import Link from 'next/link';
import Card from './Card'
import { getProductsDB } from '@/helpers/product.helper'

const CardList = async () => {
  const products = await getProductsDB();
  return (
    <div className='flex flex-wrap items-center gap-4 p-4 justify-center'>
        {
            products && 
            products?.map((product) => {
                return (
                  <Link key={product.id} href={`/product/${product.id}`}>
                    <Card key={product.id} {...product} />
                  </Link>
                )
            })
        }
    </div>
  )
}

export default CardList