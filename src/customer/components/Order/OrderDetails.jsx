import React from 'react'
import AddressCard from '../AddressCard/AddressCard'
import OrderTracker from './OrderTracker'
import { Grid } from '@mui/material'
import OrderSellerCard from './OrderSellerCard'

const OrderDetails = () => {
  return (
    <div className='px:5 lg:px-20'>
        <div>
            <h1 className='font-bold text-xl py-7'>Delivery Address</h1>
            <AddressCard/>   
        </div>

        <div className='py-20'>
            <OrderTracker activeStep={3}/>
        </div>

        <Grid item xs={9} >
                <div className='space-y-5'>
                    {[1,1,1,1,1,].map((item) => <OrderSellerCard/>)}   
                </div>
        </Grid>

        
    </div>
  )
}

export default OrderDetails