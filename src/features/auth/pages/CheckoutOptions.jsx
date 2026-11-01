import { Box, Container, Grid} from "@mui/material";
import CheckoutOption from "./../components/CheckoutOption";
import authOptions from "./../data/authOptions.json";
import chechoutHeader from "./../data/chechoutHeader.json";
import PageHeader from "./../../../sharedUI/PageHeader";

export default function CheckoutOptions() {

  return (
    <>
      <Container>
        <Box sx={{display: "flex", flexDirection: "column", gap: 5}}>
          <PageHeader data={chechoutHeader} />
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