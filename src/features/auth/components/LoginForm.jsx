import * as React from 'react';
import { Box, Container, FormControl, Grid, TextField, Typography } from "@mui/material";
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Visibility from '@mui/icons-material/Visibility';
import Input from '@mui/material/Input';
import ButtonPrimary from './../../../sharedUI/ButtonPrimary';
import { Link } from 'react-router';
import { useState } from "react";
import { yupResolver } from "@hookform/resolvers/yup"
import { useForm } from "react-hook-form";
import { loginSchema } from "./../../../validation/authSchemas";
import {loginUser} from "../services/loginApi";
import { useNavigate } from "react-router";
import { Alert } from "@mui/material";

export default function LoginForm() {
  const standardPasswordId = React.useId();
  const [showPassword, setShowPassword] = React.useState(false);
  const navigate = useNavigate();
  const [serverError, setServerError] = useState(null);

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseUpPassword = (event) => {
    event.preventDefault();
  };
  const handleMouseDownPassword = (event) => {
      event.preventDefault();
  };
  const {
    register,
    handleSubmit,
    formState: {isSubmitting },
  } = useForm({
    resolver: yupResolver(loginSchema),
    mode: "onBlur",
  });

  const onSubmit = async (data) => {
    setServerError(null);
    const result = await loginUser(data);

    if (result.success) {
    navigate("/");
    } else {
    setServerError(result.message);
    }
  };

  return (
    <>
      <Container maxWidth="lg" sx={{bgcolor:"#ffffff", borderRadius:3, p:6 }}>
        {serverError && (
          <Alert severity="error">
            {serverError}
          </Alert>
        )}
        <Box sx={{display: "flex", flexDirection: "column", gap:5}}>
          <Box sx={{display:"flex", flexDirection: "column", gap: 1}}>
            <Typography variant="h2" component={"h2"}>Login</Typography>
            <Typography sx={{width: "100%"}}>New to Little Wonders?  
              <Link to="/create-account">Create an Account</Link>
            </Typography>          
          </Box>
          <Grid container component={"form"} spacing={6} onSubmit={handleSubmit(onSubmit)}>
            <Grid size={12}>
              <TextField
                id="email-address"
                label="Email Address"
                placeholder="LeenMohammad@gmail.com"
                variant="standard"
                fullWidth
                {...register('email')}
              />
            </Grid>
            <Grid size={12}>
              <FormControl sx={{ m: 1 }} fullWidth variant="standard">
                <InputLabel htmlFor={`${standardPasswordId}-input`}>
                  Password
                </InputLabel>

                <Input
                  id={`${standardPasswordId}-input`}
                  type={showPassword ? "text" : "password"}
                  {...register("password")}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label={showPassword ? "hide the password" : "display the password"}
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        onMouseUp={handleMouseUpPassword}

                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  }
                />
              </FormControl>
            </Grid>
            <ButtonPrimary 
              type="submit"
              disabled={isSubmitting}
              Name={isSubmitting ? "CREATING ACCOUNT..." : "CREATE ACCOUNT"}
            />
          </Grid>
        </Box>
      </Container>
    </>
  )
}
