import { Container } from "@mui/material";
import ResetPasswordForm from "./../components/ResetPasswordForm";
import PageHeader from "../../../sharedUI/PageHeader";
import * as headerOption from "./../data/authHeaders.js"
import StepperCard from "../../../sharedUI/StepperCard";

export default function ResetPassword() {
  return (
    <>
    <Container>
      <PageHeader data={headerOption.resetPassword} />
      <StepperCard />
      <ResetPasswordForm />
    </Container>
    </>
  )
}
