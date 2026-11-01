import { Box, Typography } from "@mui/material";

export default function PageHeader(data) {
  return (
    <Box sx={{display: "flex", flexDirection: "column", gap: 1}}>
        <Typography variant="h2" sx={{textAlign:"center"}}>{data.data.title}</Typography>
        <Typography sx={{textAlign:"center"}}>{data.data.description}</Typography>
    </Box>
  )
}
