import PageHeader from "./../../../sharedUI/PageHeader.jsx"
import resetPasswordHeader from "./../data/resetPasswordHeader.json";
import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import Stack from '@mui/material/Stack';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Check from '@mui/icons-material/Check';
import EmailIcon from '@mui/icons-material/Email';
import VerifiedIcon from '@mui/icons-material/Verified';
import PasswordIcon from '@mui/icons-material/Password';
import StepConnector, { stepConnectorClasses } from '@mui/material/StepConnector';
import { Box, Grid, TextField, Typography } from "@mui/material";
import ButtonPrimary from "../../../sharedUI/ButtonPrimary.jsx";
import { useState } from "react";
import { yupResolver } from "@hookform/resolvers/yup"
import { useForm } from "react-hook-form";
import { resetPasswordSchema } from "./../../../validation/authSchemas";
import { resetPasswordUser } from "./../services/resetPasswordApi.js";
import { useNavigate } from "react-router";

const QontoStepIconRoot = styled('div')(({ theme }) => ({
  color: '#eaeaf0',
  display: 'flex',
  height: 22,
  alignItems: 'center',
  '& .QontoStepIcon-completedIcon': {
    color: '#516442',
    zIndex: 1,
    fontSize: 18,
  },
  '& .QontoStepIcon-circle': {
    width: 8,
    height: 8,
    borderRadius: '50%',
    backgroundColor: 'currentColor',
  },
  ...theme.applyStyles('dark', {
    color: theme.palette.grey[700],
  }),
  variants: [
    {
      props: ({ ownerState }) => ownerState.active,
      style: {
        color: '#516442',
      },
    },
  ],
}));

function QontoStepIcon(props) {
  const { active, completed, className } = props;

  return (
    <QontoStepIconRoot ownerState={{ active }} className={className}>
      {completed ? (
        <Check className="QontoStepIcon-completedIcon" />
      ) : (
        <div className="QontoStepIcon-circle" />
      )}
    </QontoStepIconRoot>
  );
}

QontoStepIcon.propTypes = {
  /**
   * Whether this step is active.
   * @default false
   */
  active: PropTypes.bool,
  className: PropTypes.string,
  /**
   * Mark the step as completed. Is passed to child components.
   * @default false
   */
  completed: PropTypes.bool,
};

const ColorlibConnector = styled(StepConnector)(({ theme }) => ({
  [`&.${stepConnectorClasses.alternativeLabel}`]: {
    top: 22,
  },
  [`&.${stepConnectorClasses.active}`]: {
    [`& .${stepConnectorClasses.line}`]: {
     background:'#516442',
    },
  },
  [`&.${stepConnectorClasses.completed}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      background:'#516442',
    },
  },
  [`& .${stepConnectorClasses.line}`]: {
    height: 3,
    border: 0,
    backgroundColor: '#eaeaf0',
    borderRadius: 1,
    ...theme.applyStyles('dark', {
      backgroundColor: theme.palette.grey[800],
    }),
  },
}));

const ColorlibStepIconRoot = styled('div')(({ theme }) => ({
  backgroundColor: '#ccc',
  zIndex: 1,
  color: '#fff',
  width: 50,
  height: 50,
  display: 'flex',
  borderRadius: '50%',
  justifyContent: 'center',
  alignItems: 'center',
  ...theme.applyStyles('dark', {
    backgroundColor: theme.palette.grey[700],
  }),
  variants: [
    {
      props: ({ ownerState }) => ownerState.active,
      style: {
        background:'#516442',
        boxShadow: '0 4px 10px 0 rgba(0,0,0,.25)',
      },
    },
    {
      props: ({ ownerState }) => ownerState.completed,
      style: {
       background:'#516442',
      },
    },
  ],
}));

function ColorlibStepIcon(props) {
  const { active, completed, className } = props;

  const icons = {
    1: <EmailIcon />,
    2: <VerifiedIcon />,
    3: <PasswordIcon />,
  };

  return (
    <ColorlibStepIconRoot ownerState={{ completed, active }} className={className}>
      {icons[String(props.icon)]}
    </ColorlibStepIconRoot>
  );
}

ColorlibStepIcon.propTypes = {
  /**
   * Whether this step is active.
   * @default false
   */
  active: PropTypes.bool,
  className: PropTypes.string,
  /**
   * Mark the step as completed. Is passed to child components.
   * @default false
   */
  completed: PropTypes.bool,
  /**
   * The label displayed in the step icon.
   */
  icon: PropTypes.node,
};

const steps = ['Enter Email', 'Verify Code', 'Set New Password'];



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
      <PageHeader data={resetPasswordHeader} />
      <Stack sx={{ width: '100%' }} spacing={4}>
        <Stepper alternativeLabel activeStep={1} connector={<ColorlibConnector />}>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel slots={{ stepIcon: ColorlibStepIcon }}>{label}</StepLabel>
          </Step>
        ))}
        </Stepper>
      </Stack>
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
