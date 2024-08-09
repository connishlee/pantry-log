"use client";
import * as React from "react";
import { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";

import { addItems, delItems, readItems } from "../helpers/datacalls";

export default function Inventory() {
  const [items, setItems] = useState([]);
  const [newItems, setNewItems] = useState({ name: "", quantity: "" });

  useEffect(() => {
    const readInventory = async () => {
      let items = await readItems();
      setItems(items);
    };
    readInventory();
  }, [items]);

  const handleAddItems = async (e) => {
    e.preventDefault();
    await addItems(newItems);
    setNewItems({ name: "", quantity: 0 });
  };

  const handleDeleteItems = async (id) => {
    await delItems(id);
  };

  return (
    <Box>
      <Stack
        className="stack"
        spacing={2}
      >
        <div className="quantity-container">
          <form className="quantity-form">
            <input
              value={newItems.name}
              onChange={(e) =>
                setNewItems({ ...newItems, name: e.target.value })
              }
              className="item-input"
              placeholder="Item"
              type="text"
            ></input>
            <input
              value={newItems.quantity}
              onChange={(e) =>
                setNewItems({
                  ...newItems,
                  quantity: e.target.value,
                })
              }
              className="quantity-input"
              placeholder="Quantity"
              type="number"
            ></input>
            <button
              onClick={handleAddItems}
              className="item-add"
              type="submit"
            >
              +
            </button>
          </form>
        </div>
        <ul className="groceries-list">
          {items.map((groceries) => (
            <li key={groceries.id}>
              <div className="inventory-container">
                <span className="name">{groceries.name}</span>
                <span className="quantity">Quantity: {groceries.quantity}</span>
                <button
                  className="remove"
                  onClick={() => handleDeleteItems(groceries.id)}
                >
                  X
                </button>
              </div>
            </li>
          ))}
        </ul>
      </Stack>
    </Box>
  );
}
