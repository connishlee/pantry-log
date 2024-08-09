import {
  collection,
  doc,
  addDoc,
  deleteDoc,
  query,
  getDocs,
} from "firebase/firestore";
import { db } from "./firebase";

// function to capitalize first letter
function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

// function to add Item to inventory
export const addItems = async (newItems) => {
  if (newItems.name && newItems.quantity > 0) {
    await addDoc(collection(db, "inventory"), {
      name: capitalizeFirstLetter(newItems.name),
      quantity: newItems.quantity,
    });
  }
};

// function to get Items from inventory
export const readItems = async () => {
  const q = query(collection(db, "inventory"));
  const querySnapshot = await getDocs(q);
  let itemsArr = [];
  querySnapshot.forEach((doc) => {
    itemsArr.push({ ...doc.data(), id: doc.id });
  });
  return itemsArr;
};

// function to remove Item from inventory

export const delItems = async (id) => {
  await deleteDoc(doc(db, "inventory", id));
};
