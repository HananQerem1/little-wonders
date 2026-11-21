import PageHeader from "./../../../sharedUI/PageHeader.jsx"
import * as headerOption from "./../data/authHeaders.js"
import { Box, Grid, TextField, Typography } from "@mui/material";
import ButtonPrimary from "../../../sharedUI/ButtonPrimary.jsx";
import { useState } from "react";
import { yupResolver } from "@hookform/resolvers/yup"
import { useForm } from "react-hook-form";
import { resetPasswordSchema } from "./../../../validation/authSchemas";
import { resetPasswordUser } from "./../services/resetPasswordApi.js";
import { useNavigate } from "react-router";
import StepperCard from "../../../sharedUI/StepperCard.jsx";


export default function ResetPasswordForm() {
  const {
    register,
    handleSubmit,
    formState: {isSubmitting },
  } = useForm({
    resolver: yupResolver(resetPasswordSchema),
    mode: "onBlur",
  });

  const navigate = useNavigate();
  const [serverError, setServerError] = useState(null);
  const onSubmit = async (data) => {
      setServerError(null);
      const result = await resetPasswordUser(data);
  
      if (result.success) {
      navigate("/");
      } else {
      setServerError(result.message);
      }
    };
  return (
    <>
      <PageHeader data={headerOption.resetPassword} />
      <StepperCard />
      <Box>
        <Typography>Forgot Your Password? Don't Worry!</Typography>
        <Typography>It happens to the best of parents! Enter the email address linked to your account and we'll send a 6-digit verification code.</Typography>
        <Grid container component={"form"} spacing={6} onSubmit={handleSubmit(onSubmit)}>
          <Grid size={8}>
            <TextField
              id="email-address"
              label="Email Address"
              placeholder="LeenMohammad@gmail.com"
              variant="standard"
              fullWidth
            {...register('email')}
            />
          </Grid>
          <Grid size={4}>
            <ButtonPrimary 
              type="submit"
              disabled={isSubmitting}
              Name={isSubmitting ? "Code Already Sent" : "Send Code"}
            />
          </Grid>
        </Grid>
      </Box>
    </>
  )
}
