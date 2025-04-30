import Header from "@/app/ui/header";
import Navbar from "@/app/ui/navbar";
import { Box, Container } from "@mui/material";

export default function PagesLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <div>
        <Header />
      </div>
      <Box sx={{ flexDirection: "row", display: "flex" }}>
        <div>
          <Navbar />
        </div>
        <Container
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "start",
          }}
        >
          {children}
        </Container>
      </Box>
    </div>
  );
}
