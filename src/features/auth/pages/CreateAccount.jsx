import { Box, Container } from "@mui/material";
import CreateAccountForm from "./../components/CreateAccountForm";
import PageHeader from "../../../sharedUI/PageHeader";
import * as headerOption from "./../data/authHeaders.js"

export default function CreateAccount() {
  return (
    <Container maxWidth="lg" sx={{bgcolor:"#ffffff", borderRadius:3, p:6 }}>
      <Box sx={{display: "flex", flexDirection: "column", gap:5}}>
        <PageHeader data={headerOption.createAccount}/>
        <CreateAccountForm />
      </Box>
    </Container>
  )
}
