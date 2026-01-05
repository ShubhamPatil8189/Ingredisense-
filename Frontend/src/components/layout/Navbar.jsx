import React from 'react';
import { Link, useLocation } from "react-router-dom";
import { Leaf } from "lucide-react"; // Switched to Leaf to match your Header
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const location = useLocation();

  const navLinks = [
    { label: "Home", path: "/" },
    { label: "Transparency", path: "/transparency" },
    { label: "Demo", path: "/demo" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-[#070b09]/95 backdrop-blur-xl">
      <div className="container mx-auto flex h-16 items-center justify-between px-6">
        
        {/* Left Side: Logo */}
        <div className="flex items-center">
          <Link to="/" className="flex items-center gap-2 group">
            {/* Icon container using your Primary Green color */}
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#22c55e] transition-transform group-hover:scale-110">
              <Leaf className="h-5 w-5 text-black" /> 
            </div>
            <span className="text-lg font-bold tracking-tight text-white">
              IngredieSense
            </span>
          </Link>
        </div>
        
        {/* Right Side: Navigation and Get Started */}
        <div className="flex items-center gap-8">
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.path}
                className={`text-sm transition-colors ${
                  location.pathname === link.path 
                    ? "text-white font-medium" 
                    : "text-gray-400 hover:text-white"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Bright Green "Get Started" Button */}
          <Link to="/get-started">
            <Button className="bg-[#22c55e] hover:bg-[#1eb054] text-[#070b09] font-bold px-5 h-10 rounded-lg transition-all text-sm">
              Get Started
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;