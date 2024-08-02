import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

import "../globals.css";

export default function Header() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        className="app-bar"
        position="static"
      >
        <Toolbar>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1 }}
          >
            Pantry Tracker
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
