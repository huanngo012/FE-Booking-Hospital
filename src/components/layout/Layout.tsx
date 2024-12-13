import { Box } from "@mui/material"
import Header from "~/components/layout/header/Header"

const Layout = () => {
  return <Box
  sx={{
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
    height: "100%",
    background: "#e8f2f7",
  }}
>
<Header />
</Box>
}

export default Layout
