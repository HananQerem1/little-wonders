import { Box, Container, Grid, Typography } from "@mui/material";
import CheckoutOption from "./../components/CheckoutOption";
import authOptions from "./../data/authOptions.json";

export default function CheckoutOptions() {
  return (
    <>
      <Container>
        <Box sx={{display: "flex", flexDirection: "column", gap: 5}}>
          <Box sx={{display: "flex", flexDirection: "column", gap: 1}}>
            <Typography variant="h2" sx={{textAlign:"center"}}>Choose how you'd like to continue</Typography>
            <Typography sx={{textAlign:"center"}}>Your handcrafted heirloom toys are safely reserved in your cart. Choose how you'd like to proceed to checkout.</Typography>
          </Box>
          <Grid container spacing={2} sx={{alignItems: "stretch"}}>
            {authOptions.map((option) => (
              <Grid key={option.id} size={{ xs: 12, md: 6 }} sx={{ display: "flex", border:"2px solid #d8dad0", borderRadius: 4, overflow:"hidden"}}>
                <CheckoutOption option={option} />
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </>
  )
}