import { Link } from "react-router-dom";

function Box() {
  return (
    <div
      className="absolute sm:w-[35%] md:text-start h-fit bg-orange-100 pt-7 md:top-[80px] top-[50%]
   sm:right-0 sm:translate-x-0  sm:me-12 m-6 p-7 rounded card-center box-parent"
    >
      <p className="text-sm font-semibold">New Arrival</p>
      <h1 className="font-bold lg:text-4xl text-2xl text-yellow-700 md:w-[70%]">
        Discover Our New Collection
      </h1>
      <p className=" md:text-sm text-[12px] w-100 font-semibold pt-3">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus,
        luctus nec ullamcorper mattis.
      </p>
      <Link to="shop">
        <button className="text-sm bg-yellow-700 text-white font-bold md:p-5 p-3 md:px-12 px-7 md:mt-9 mt-5">
          Buy Now
        </button>
      </Link>
    </div>
  );
}
export default Box;
