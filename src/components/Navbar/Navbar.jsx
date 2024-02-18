import { Link } from "react-router-dom";
import logo_img from "./assets/imgs/logo.svg";
import user_icon from "./assets/icons/user_icon.svg";
import heart_icon from "./assets/icons/heart_icon.svg";
import cart_icon from "./assets/icons/cart_icon.svg";
import search_icon from "./assets/icons/search_icon.svg";
function Navbar() {
  return (
    <div className="navbar bg-base-100 px-5">
      <div className="navbar-start">
        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost lg:hidden p-0 px-1"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 "
          >
            <li>
              <Link className=" font-semibold text-black" to="/">
                Home
              </Link>
            </li>
            <li>
              <Link className=" font-semibold text-black" to="shop">
                Shop
              </Link>
            </li>
            <li>
              <Link className=" font-semibold text-black" to="about">
                About
              </Link>
            </li>
            <li>
              <Link className=" font-semibold text-black" to="contact">
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost text-xl p-0 ms-3 text-center">
          <img className=" md:w-auto w-11" src={logo_img} alt="logo" />
        </Link>
        <Link
          to="/"
          className="btn btn-ghost md:text-2xl text-xl p-1 py-1 text-center font-bold text-black "
        >
          Furniro
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex justify-between gap-3">
        <ul className="menu menu-horizontal px-1 flex justify-between gap-5">
          <li>
            <Link className=" font-semibold text-black" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className=" font-semibold text-black" to="shop">
              Shop
            </Link>
          </li>
          <li>
            <Link className=" font-semibold text-black" to="about">
              About
            </Link>
          </li>
          <li>
            <Link className=" font-semibold text-black" to="contact">
              Contact
            </Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <ul className="menu menu-horizontal px-1 flex justify-between items-center lg:gap-3 md:pe-5">
          <li>
            <Link className="sm:p-2 p-1" to="/">
              <img src={user_icon} alt="user" />
            </Link>
          </li>
          <li>
            <Link className="sm:p-2 p-1" to="/">
              <img src={search_icon} alt="search" />
            </Link>
          </li>
          <li>
            <Link className="sm:p-2 p-1" to="/">
              <img src={heart_icon} alt="heart" />
            </Link>
          </li>
          <li>
            <Link className="sm:p-2 p-1" to="Cart">
              <img src={cart_icon} alt="cart" />
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
export default Navbar;
