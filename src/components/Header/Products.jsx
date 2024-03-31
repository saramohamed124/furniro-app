import { useRecoilState } from "recoil";
import productAtom from "../context/productAtom";

function Products() {
  const [product, setProduct] = useRecoilState(productAtom);
  return (
    <div>
      <h1>Products In Progress</h1>
      {console.log(product[0])}
      {product[0].map((e) => (
        <>
          <img src={e.src} alt={e.title} />
          <h1 key={e.id}>{e.title}</h1>
        </>
      ))}
    </div>
  );
}
export default Products;
