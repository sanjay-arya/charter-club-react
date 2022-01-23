import { Box } from "@mui/material";
import MainNav from "./MainNav";
import SnackLayout from "./SnackLayout";

export default function MainLayout({ children }) {
  return (
    <>
      <SnackLayout />
      <MainNav />
      <Box component='main' sx={{ flexGrow: 1, pt: 8 }}>
        {children}
      </Box>
    </>
  )
};
