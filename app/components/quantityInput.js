"use client";
import * as React from "react";

export default function QuantityControl() {
  return (
    <div className="quantity-container">
      <form className="quantity-form">
        <input
          className="item-input"
          placeholder="Item"
          type="text"
        ></input>
        <input
          className="quantity-input"
          placeholder="Quantity"
          type="number"
        ></input>
        <button
          className="item-add"
          type="submit"
        >
          +
        </button>
      </form>
    </div>
  );
}
