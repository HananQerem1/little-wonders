import { Button } from "@mui/material";

export default function ButtonPrimary({type,Name}) {
  return (
    <>
      <Button type={type} variant="contained" sx={{bgcolor: "#516442", width: "100%", py:2, fontSize:20}}>{Name}</Button>
    </>
  )
}
