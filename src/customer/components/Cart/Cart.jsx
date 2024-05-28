import React, { useEffect } from 'react'
import CartItem from './CartItem'
import { Button } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getCart } from '../../../State/Cart/Action'
import { store } from '../../../State/store'


const Cart = () => {
    const navigate = useNavigate();
    const {cart} = useSelector(store=> store)
    const dispatch = useDispatch();
    


    const handlecheckoutclick = () => {
        navigate("/checkout?step=2");
    }

    useEffect(()=>{
        dispatch(getCart())
    },[cart.updateCartItem,cart.deleteCartItem])

  return (
    <div>
        <div className='lg:grid grid-cols-3 lg:px-10 relative border'>
            <div className='col-span-2 border'>
                {cart.cart?.cartItems.map((item) =><CartItem item={item}/>)}
            </div>
            <div className='px-5 sticky top-0 h-[100vh] mt-5 lg:mt-0'>
                <div className='border border-black'>
                    <p className='uppercase font-bold opacity-60 pb-4 pr-1 pl-1'>price details</p>
                    <hr/>
                    <div className='space-y-3 font-semibold pr-1 pl-1 mb-4'>
                        <div className='flex justify-between pt-3 text-black'>
                            <span>Price</span>
                            <span>${cart.cart?.totalPrice}</span>
                        </div>
                        <div className='flex justify-between pt-3 text-black'>
                            <span>Discount</span>
                            <span className='text-green-600'>- {cart.cart?.discount}</span>
                        </div>
                        <div className='flex justify-between pt-3 text-black'>
                            <span>Delivery Charge</span>
                            <span className='text-green-600'>Free</span>
                        </div>
                        <div className='flex justify-between pt-3 text-black'>
                            <span className='text-lg font-bold'>Total amount</span>
                            <span className='text-lg text-green-600 font-bold'>{cart.cart?.totalDiscountedPrice}</span>
                        </div>


                    </div>

                    <Button onClick={handlecheckoutclick} variant="contained" className=" w-full mt-5 " sx={{px:"3rem" , py:"1rem", }}>
                         Check Out
                    </Button>
                </div>
            </div>
        </div>

        
        
    </div>
  )
}

export default Cart