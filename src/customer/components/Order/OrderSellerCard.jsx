import { Grid} from '@mui/material'
import GradeIcon from '@mui/icons-material/Grade';
import React from 'react'

const OrderSellerCard = () => {
  return (
    <div className='p-4 shadow-md shadow-black hover:shadow-2xl border mr-2'>
        <Grid container spacing={2} sx={{justifyContent:"space-between"}}>

            <Grid item xs={6}>
                <div className='flex cursor-pointer'>
                    <img className="w-[8rem] h-[8rem] object-cover object-top" src="https://tailwindui.com/img/ecommerce-images/product-page-02-tertiary-product-shot-01.jpg" alt=""></img>
                    <div className='ml-5 space-y-2'>
                        <p className='mb-2'>T-shirt</p>
                        <div className='flex item-center no-wrap justify-between'>  
                            <p className='opacity-50 text-xs font-semibold'>Size: L</p>
                            <p className='opacity-50 text-xs font-semibold'>Colour: Black</p>
                        </div>
                        <p className='text-lg font-bold'>Seller: Mahesh</p>
                        <p className='text-lg font-bold'>$155</p>

                    </div>
                </div>
            </Grid>

            <Grid item xs={2} sx={{ justifyContent: 'center', alignItems: 'center' }}>
                <div className='flex mt-12'>
                    <GradeIcon sx={{width:"20px", height:"20px"}} className="text-indigo-400 mr-2 text-sm" />
                    <span >Rate & Review Product</span>
                </div>                
                
                
            </Grid>

        </Grid>
    </div>
  )
}

export default OrderSellerCard