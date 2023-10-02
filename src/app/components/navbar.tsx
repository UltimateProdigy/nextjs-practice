import Link from "next/link";
import './navbar.css'

const Navbar = () => {
  return (
    <div className="navbar">
      <Link className="about" href="/about">About</Link>
      <Link className="home" href="/home">Home</Link>
    </div>
  );
};

export default Navbar;
