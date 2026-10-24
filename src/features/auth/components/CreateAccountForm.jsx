import PasswordStrengthBar from "react-password-strength-bar";
const StrengthBar = PasswordStrengthBar.default ?? PasswordStrengthBar;
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
import { registerSchema } from "./../../../validation/authSchemas";
import {registerUser} from "../services/registerApi";
import { useNavigate } from "react-router";
import { Alert } from "@mui/material";
import FormHelperText from "@mui/material/FormHelperText";

export default function CreateAccountForm() {
  const standardPasswordId = React.useId();
  const [showPassword, setShowPassword] = React.useState(false);
  const [password, setPassword] = useState("");
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
    formState: { errors },
  } = useForm({
    resolver: yupResolver(registerSchema),
    mode: "onBlur",
  });

  const onSubmit = async (data) => {
    setServerError(null);
    const result = await registerUser(data);

    if (result.success) {
    navigate("/login");
    } else {
    setServerError(result.message);
    }
  };

  return (
    <>
      {serverError && (
        <Alert severity="error">
          {serverError}
        </Alert>
      )}
      <Container maxWidth="lg" sx={{bgcolor:"#ffffff", borderRadius:3, p:6 }}>
        <Box sx={{display: "flex", flexDirection: "column", gap:5}}>
          <Box sx={{display:"flex", flexDirection: "column", gap: 1}}>
            <Typography variant="h2" component={"h2"}>Create Your Account</Typography>
            <Typography>Join over 18,000+ happy parents and caregivers.</Typography>
          </Box>
          <Grid container component={"form"} spacing={6} onSubmit={handleSubmit(onSubmit)}>
            <Grid size={6}>
              <TextField
                id="full-name"
                label="Full Name"
                placeholder="Leen Mohammad"
                multiline
                variant="standard"
                fullWidth
                {...register('fullName')}
                error={!!errors.fullName}
                helperText={errors.fullName?.message}
              />
            </Grid>
            <Grid size={6}>
              <TextField
                id="user-name"
                label="Use Name"
                placeholder="leen"
                multiline
                variant="standard"
                fullWidth
                {...register('userName')}
                error={!!errors.userName}
                helperText={errors.userName?.message}
              />
            </Grid>
             <Grid size={6}>
              <TextField
                id="phone-number"
                label="Phone Number"
                placeholder="+970599123456"
                variant="standard"
                fullWidth
                {...register('phoneNumber')}
                error={!!errors.phoneNumber}
                helperText={errors.phoneNumber?.message}
              />
            </Grid>
            <Grid size={6}>
              <TextField
                id="email-address"
                label="Email Address"
                placeholder="LeenMohammad@gmail.com"
                variant="standard"
                fullWidth
                {...register('email')}
                error={!!errors.email}
                helperText={errors.email?.message}
              />
            </Grid>
            <Grid size={12}>
              <FormControl sx={{ m: 1 }} fullWidth variant="standard" error={!!errors.password}>
                <InputLabel htmlFor={`${standardPasswordId}-input`}>
                  Password
                </InputLabel>

                <Input
                  id={`${standardPasswordId}-input`}
                  type={showPassword ? "text" : "password"}
                  {...register("password", {
                    onChange: (event) => setPassword(event.target.value),
                  })}
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
                {errors.password && (
                  <FormHelperText>
                    {errors.password.message}
                  </FormHelperText>
                )}
              </FormControl>
              <StrengthBar password={password} />
            </Grid>
            <ButtonPrimary type="submit" Name="CREATE ACCOUNT & GET $10 GIFT" />
            <Typography sx={{textAlign:"center", width: "100%"}}>Already have an account? 
              <Link to="/login">Login</Link>
            </Typography>
          </Grid>
        </Box>
      </Container>
    </>
  )
}
