import Link from "next/link";

const Navbar = () => {
  return (
    <div className="navbar">
      <Link href="/about">About</Link>
      <Link href="/home">Home</Link>
    </div>
  );
};

export default Navbar;
