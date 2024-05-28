import { Grid } from '@mui/material'
import AdjustIcon from '@mui/icons-material/Adjust';
import React from 'react'
import { useNavigate } from 'react-router-dom';

const OrderCard = () => {
    const navigate = useNavigate()
    const handleordernumber = () => {
        navigate(`/acount/order/${5}`)
    }
  return (
    <div onClick={handleordernumber} className='p-4 shadow-md shadow-black hover:shadow-2xl border mr-2'>
        <Grid container spacing={2} sx={{justifyContent:"space-between"}}>

            <Grid item xs={6}>
                <div className='flex cursor-pointer'>
                    <img className="w-[5rem] h-[5rem] object-cover object-top" src="https://tailwindui.com/img/ecommerce-images/product-page-02-tertiary-product-shot-01.jpg" alt=""></img>
                    <div className='ml-5 space-y-2'>
                        <p className='mb-2'>T-shirt</p>
                        <p className='opacity-50 text-xs font-semibold'>Size: M</p>
                        <p className='opacity-50 text-xs font-semibold'>Colour: Black</p>
                    </div>
                </div>
            </Grid>

            <Grid item xs={2}>
                <p>$156</p>
            </Grid>

            <Grid item xs={4}>
                {true && <p>
                    <AdjustIcon sx={{width:"20px",height:"20px"}} className="text-green-600 mr-2 text-sm"/>
                    <span>Deliverd on March 10</span>
                    <p><span>Your item has been delivered</span></p>
                    
                </p>}

                {false && <p>
                    <span>Expected Delivery on March 10</span>
                </p>}
            </Grid>

        </Grid>
    </div>
  )
}

export default OrderCard