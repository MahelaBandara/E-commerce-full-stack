
import { Avatar, Box, Grid , Rating } from '@mui/material'
import React from 'react'

const ProductReveiwCard = () => {
  return (
    <div>
        <Grid container spacing={2} gap={3}>
            <Grid item xs={1}>
                <Box>
                    <Avatar className='text-white mt-7' sx={{width:56,height:56,bgcolor:"blue" }}>R</Avatar>
                </Box>
            </Grid>

            <Grid item xs={9}>
                <div className='space-y-2'>
                    <div>
                       <p className='font-semibold text-lg'>Raam</p>
                       <p className='opacity-70'>Aprill 5, 2024</p>
                    </div>
                    <Rating value={4.5} name ="half-rating" readOnly precision={0.5}/>
                    <p>Nice product</p>
                </div>
            </Grid>
        </Grid>
    </div>
  )
}

export default ProductReveiwCard