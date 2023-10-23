import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// @mui
import { Link, Stack, IconButton, InputAdornment, TextField, Checkbox } from '@mui/material';
import { LoadingButton } from '@mui/lab';
// components
import Iconify from '../../../components/iconify';

// ----------------------------------------------------------------------

export default function LoginForm() {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
 
  const loginUser = async (value)=>{
    try{
        const response = await fetch('/user/login',{
            method: "post",
            headers: {"Content-Type":"application/json"},
            body:JSON.stringify(value)
        }).then(response =>{
            if(!response.ok){
                console.log("fail");
            }else{
                return response.json();
            }
            return response.json();
        });
        console.log("action called", response.data);
/*         if(response.result === "success"){
            console.log("acton-loginsuccess 실행");
            dispatch({type:'LOGIN_SUCCESS',payload: response.data})
            sessionStorage.setItem('currentUser',response.data)
            return response.data;
        }
        
        dispatch({type:'LOGIN_ERROR',error:response.result})
        return ; */

    }catch (error){
        // dispatch({type:'LOGIN_ERROR',error: error})
        console.log(error);
    }
}

  const handleClick = () => {
    loginUser();
    /** true 설정시 첫번째 인자의 주소로 넘어간후 뒤로가기를 하더라도 이전 페이지로 돌아가지 않는다. 대신 "/"로 돌아간다.(Default : false) */
    navigate('/dashboard', { replace: true }); 
  };

  return (
    <>
      <Stack spacing={3}>
        <TextField name="email" label="Email address" />

        <TextField
          name="password"
          label="Password"
          type={showPassword ? 'text' : 'password'}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={() => setShowPassword(!showPassword)} edge="end">
                  <Iconify icon={showPassword ? 'eva:eye-fill' : 'eva:eye-off-fill'} />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      </Stack>

      <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ my: 2 }}>
        <Checkbox name="remember" label="Remember me" />
        <Link variant="subtitle2" underline="hover">
          Forgot password?
        </Link>
      </Stack>

      <LoadingButton fullWidth size="large" type="submit" variant="contained" onClick={handleClick}>
        Login
      </LoadingButton>
    </>
  );
}
