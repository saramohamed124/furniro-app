import { useRecoilState } from "recoil";
import productAtom from "../context/productAtom";

function Products() {
  const [product, setProduct] = useRecoilState(productAtom);
  return (
    <div>
      <h1>Products In Progress</h1>
      {console.log(product)}
      {product.map((e) => (
        <h1 key={e.id}>{e.title}</h1>
      ))}
    </div>
  );
}
export default Products;
