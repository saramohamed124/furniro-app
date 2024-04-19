import { useRecoilState } from "recoil";
import productAtom from "../context/productAtom";

function Products() {
  const [product] = useRecoilState(productAtom);
  return (
    <div className="container">
      <h1 className="heading-one">Our Products</h1>
      {console.log(product[0])}
      <div className="products">
      {product[0].map((e) => (
        <div key={e.id}>
          <img key={e.id}src={e.src} alt={e.title} />
          <div className="bg-zinc-100 text-start p-4 flex flex-col gap-y-2" key={e.id}>
          <h1 className="font-bold text-xl" key={e.id}>{e.title}</h1>
          <p key={e.id} className="text-sm text-gray-500">{e.category}</p>
          <div  key ={e.id} className="flex justify-between">
            <span key={e.id} className="font-bold">{e.price}</span>
            {e.past_price?<del key={e.id} className="text-sm text-gray-400">{e.past_price}</del>:""}
          </div>
          </div>
        </div>
      ))}
      </div>
    </div>
  );
}
export default Products;
