import React from 'react';
import { Link, useLocation } from "react-router-dom";
import { Triangle } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const location = useLocation();

  // Updated navigation links to match the images
  const navLinks = [
    { label: "Home", path: "/" },
    { label: "About", path: "/about" },
    { label: "Demo", path: "/demo" },
    { label: "Contact", path: "/contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-[#070b09]/95 backdrop-blur-xl">
      <div className="container mx-auto flex h-16 items-center justify-between px-6">
        
        {/* Left Side: Logo */}
        <div className="flex items-center">
          <Link to="/" className="flex items-center gap-2 group">
            <div className="flex h-6 w-6 items-center justify-center rounded bg-[#22c55e] transition-transform group-hover:scale-110">
              {/* Diamond-style logo using Triangle */}
              <Triangle className="h-3.5 w-3.5 fill-black text-black rotate-180" />
            </div>
            <span className="text-lg font-bold tracking-tight text-white">
              Ingredient AI
            </span>
          </Link>
        </div>
        
        {/* Right Side: Navigation and Get Started */}
        <div className="flex items-center gap-8">
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
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