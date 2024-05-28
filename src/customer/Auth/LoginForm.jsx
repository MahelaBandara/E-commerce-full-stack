import { Grid, TextField ,Button} from '@mui/material'
import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { login } from '../../State/Auth/Action'

const LoginForm = () => {

   const navigate = useNavigate();
   const dispatch = useDispatch();

    const handleSubmit = (event) => {
        event.preventDefault()
        const data = new FormData(event.currentTarget)
        const userData = {
            email:data.get("email"),
            password:data.get("password")
        }

        dispatch(login(userData))
        console.log("userData ",userData)
    }

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <Grid container spacing={3} >
              
                <Grid item xs={12} >
                    <TextField
                        required
                        id='email'
                        name='email'
                        label='Email'
                        fullWidth
                        autoComplete='email'
                    />
                </Grid>
                <Grid item xs={12} >
                    <TextField
                        required
                        id='password'
                        name='password'
                        label='Password'
                        fullWidth
                        autoComplete='password'
                    />
                </Grid>
                <Grid item xs={12} >
                    <Button classnName='bg-[#9155FD]' fullWidth type='submit' variant='contained' size='large' sx={{padding:".8rem 0",bgcolor:'#9155FD'}}>
                        Login
                    </Button>
                </Grid>
            </Grid>
        </form>  
        <div className='flex justify-center flex-col items-center'>
            <div className='py-3 flex items-center'>
                <p> if you don't have an acount?</p>
                <Button onClick={()=>navigate("/register")} className='ml-5' size='small'>Register</Button>
            </div>
        </div> 
    </div>
  )
}

export default LoginForm