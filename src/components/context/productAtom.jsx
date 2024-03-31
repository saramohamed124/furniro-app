import { atom } from "recoil";
import products from "../data/products";
const productAtom = atom({
  key: "productAtom", // unique ID (with respect to other atoms/selectors)
  default: [products], // default value (aka initial value)
});

export default productAtom;
