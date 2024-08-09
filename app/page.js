import * as React from "react";
import Box from "@mui/material/Box";
import Inventory from "./components/inventory";

export default function Home() {
  return (
    <Box
      height={500}
      width={500}
      my={4}
      display="flex"
      flexDirection="column"
      alignItems="center"
      gap={2}
      p={2}
      marginRight="auto"
      marginLeft="auto"
    >
      <Inventory />
    </Box>
  );
}
