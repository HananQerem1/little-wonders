import LoginForm from './../components/LoginForm.jsx';
import * as headerOption from "./../data/authHeaders.js"
import PageHeader from "../../../sharedUI/PageHeader.jsx";
import { Box, Container } from '@mui/material';
import { Link } from 'react-router';

export default function Login() {
  return (
    <>
    <Container maxWidth="lg" sx={{bgcolor:"#ffffff", borderRadius:3, p:6 }}>
      <Box sx={{display: "flex", flexDirection: "column", alignItems:'center' ,gap:5}}>
        <PageHeader data={headerOption.login}/>
        <Link to="/create-account">Create an Account</Link>
        <LoginForm />
      </Box>
    </Container>
    </>
  )
}
