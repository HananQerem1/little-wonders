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
import * as headerOption from "./../data/authHeaders.js"
import PageHeader from "../../../sharedUI/PageHeader.jsx";

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
        <Box sx={{display: "flex", flexDirection: "column", alignItems:'center' ,gap:5}}>
          <PageHeader data={headerOption.login}/>
          <Link to="/create-account">Create an Account</Link>
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
              Name={isSubmitting ? "LOGGING IN..." : "LOGIN"}
            />
            <Typography variant="body2">Forgot Password?
              <Link to="/reset-password">Reset Password</Link>
            </Typography>
          </Grid>
        </Box>
      </Container>
    </>
  )
}
