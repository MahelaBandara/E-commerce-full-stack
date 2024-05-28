import React from 'react'
import "./ProductCard.css"
import { useNavigate } from 'react-router-dom'

const ProductCard = ({product}) => {
    const navigate = useNavigate();
    const handleproductclick = () => {
        navigate(`/product/${product.id}`)
    }
    return (
        <div onClick ={handleproductclick} className='productcard w-[15rem] m-3 transition-all cursor-pointer'>
            <div className='h-[20rem]'>
                <img className='h-full w-full object-cover object-left-top' src={product.imageUrl} alt=''></img>
            </div>
            <div className='textpart bg-white p-3'>
                <div>
                    <p className='font-bold opacity-60'>{product.brand}</p>
                    <p className='justify-center'>{product.title}</p>
                </div>
                <div className='flex items-center space-x-2'>
                    <p className='font-semibold'>${product.discountedPrice}</p>
                    <p className='line-through opacity-50'>${product.price}</p>
                    <p className='font-semibold text-green-600 '>{product.discountPercent} % off</p>
                </div>
            </div>
        </div>
    )
}

export default ProductCard