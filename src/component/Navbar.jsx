import { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">

      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* LOGO */}
        <h1 className="text-xl font-semibold">
          🌿 Swadesi
        </h1>


        {/* DESKTOP MENU */}
        <div className="hidden md:flex gap-8 text-gray-700">

          <Link to="/" className="hover:text-black transition">
            Home
          </Link>

          <Link to="/about" className="hover:text-black transition">
            About
          </Link>

          <Link to="/products" className="hover:text-black transition">
            Products
          </Link>

          <Link to="/contact" className="hover:text-black transition">
            Contact
          </Link>

        </div>


        {/* RIGHT SIDE */}
        <div className="hidden md:flex items-center gap-4">

          <button className="border px-4 py-1 rounded-full hover:bg-green-700 hover:text-white transition cursor-pointer">
            Login
          </button>

          <button className="bg-green-700 text-white px-4 py-1 rounded-full cursor-pointer">
            Cart 🛒
          </button>

        </div>


        {/* MOBILE MENU BUTTON */}
        <button 
          className="md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>

      </div>


      {/* MOBILE MENU */}
      {menuOpen && (
        <div className="md:hidden px-6 pb-4 space-y-3 text-gray-700">

          <Link to="/" className="block">Home</Link>
          <Link to="/about" className="block">About</Link>
          <Link to="/products" className="block">Products</Link>
          <Link to="/contact" className="block">Contact</Link>

          <button className="w-full border py-2 rounded-full mt-2">
            Login
          </button>

          <button className="w-full bg-green-700 text-white py-2 rounded-full">
            Cart 🛒
          </button>

        </div>
      )}

    </nav>
  );
}

export default Navbar;