"use client";
import * as React from "react";
import { useState } from "react";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";

export default function Inventory() {
  const [items, setItems] = useState([
    { name: "test", quantity: 0 },
    { name: "bot", quantity: 10 },
  ]);
  return (
    <Box
      className="box"
      sx={{ width: "100%" }}
    >
      <Stack
        className="stack"
        spacing={2}
      >
        <ul>
          {items.map((groceries, id) => (
            <li key={id}>
              <div className="inventory-container">
                <span>{groceries.name}</span>
                <span className="quantity">{groceries.quantity}</span>
              </div>
              <button
                className="remove"
                type="submit"
              >
                X
              </button>
            </li>
          ))}
        </ul>
      </Stack>
    </Box>
  );
}
