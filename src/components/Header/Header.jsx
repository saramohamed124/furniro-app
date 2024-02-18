import Box from "./components/Box";
import header from "./imgs/header-sec1.png";
import "./header.css";
function Header() {
  return (
    <div className="relative overflow-hidden">
      <img className="object-fit w-full header-img" src={header} alt="header" />
      <Box />
    </div>
  );
}
export default Header;
