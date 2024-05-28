import React, { useEffect } from 'react'
import AddressCard from '../AddressCard/AddressCard'
import CartItem from '../Cart/CartItem'
import { Button } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { getOrderById } from '../../../State/Order/Action'
import { useLocation } from 'react-router-dom'
import { store } from '../../../State/store'
import { createPayment } from '../../../State/Payment/Action'

const OrderSummary = () => {
    const dispatch = useDispatch();
    const location = useLocation();
    const {order} = useSelector(store => store)
    const searchParamms = new URLSearchParams(location.search);
    const orderId = searchParamms.get("order_id")
    console.log("orderId-",orderId)

    useEffect(() => {
        dispatch(getOrderById(orderId))
    },[orderId])

    const  handlecheckout = () => {
        dispatch(createPayment(orderId))
    }

  return (
    <div>
        <div className='p-5 shadow-lg rounded-s-md border'>
            <AddressCard address = {order.order?.shippingAddress} />
        </div>

        <div>
        <div className='lg:grid grid-cols-3  relative border'>
            <div className='col-span-2 border'>
                {order.order?.orderItems.map((item) => (
                    <CartItem item = {item}/>
                ))}
            </div>
            <div className='px-5 sticky top-0 h-[100vh] mt-5 lg:mt-0'>
                <div className='border border-black'>
                    <p className='uppercase font-bold opacity-60 pb-4 pr-1 pl-1'>price details</p>
                    <hr/>
                    <div className='space-y-3 font-semibold pr-1 pl-1 mb-4'>
                        <div className='flex justify-between pt-3 text-black'>
                            <span>Price</span>
                            <span>{order.order?.totalPrice}</span>
                        </div>
                        <div className='flex justify-between pt-3 text-black'>
                            <span>Discount</span>
                            <span className='text-green-600'>- {order.order?.discount}</span>
                        </div>
                        <div className='flex justify-between pt-3 text-black'>
                            <span>Delivery Chaarge</span>
                            <span className='text-green-600'>Free</span>
                        </div>
                        <div className='flex justify-between pt-3 text-black'>
                            <span className='text-lg font-bold'>Total amount</span>
                            <span className='text-lg text-green-600 font-bold'>{order.order?.totalDiscountedPrice}</span>
                        </div>


                    </div>

                    <Button onClick = {handlecheckout} variant="contained" className=" w-full mt-5 " sx={{px:"3rem" , py:"1rem", }}>
                         Check Out
                    </Button>
                </div>
            </div>
        </div>
        </div>
    </div>
  )
}

export default OrderSummary