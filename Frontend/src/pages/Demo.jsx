import React from 'react';
import { useNavigate } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Navbar from "../components/layout/Navbar"; 
import ProductCard from "../components/cards/ProductCard";
import { StatusBadge } from "../components/ui/status-badge";

const demoProducts = [
  {
    id: "chips",
    name: "Classic Potato Chips",
    description: "Standard supermarket variety. Contains various additives, preservatives, and high sodium levels.",
    image: "https://images.unsplash.com/photo-1566478989037-eec170784d0b?w=400&h=300&fit=crop",
    badge: "ultra-processed",
    badgeLabel: "Ultra-processed",
    ingredients:
      "Potatoes, Vegetable Oil (Palm Oil), Salt, Dextrose, Artificial Flavors",
  },
  {
    id: "soda",
    name: "Orange Soda",
    description: "Popular carbonated beverage. High fructose corn syrup, artificial colors (Yellow 6), and caffeine.",
    image: "https://images.unsplash.com/photo-1625772299848-391b6a87d7b3?w=400&h=300&fit=crop",
    badge: "high-sugar",
    badgeLabel: "High Sugar",
    ingredients:
      "Carbonated Water, High Fructose Corn Syrup, Citric Acid, Artificial Flavors, Sodium Benzoate",
  },
  {
    id: "babyfood",
    name: "Organic Baby Food",
    description: "Pureed fruit and vegetable blend. Certified organic, no added sugars, and minimally processed.",
    image: "https://images.unsplash.com/photo-1590080875515-8a3a8dc5735e?w=400&h=300&fit=crop",
    badge: "clean-label",
    badgeLabel: "Clean Label",
    ingredients:
      "Organic Apples, Organic Carrots, Organic Sweet Potatoes, Water",
  },
];

const Demo = () => {
  const navigate = useNavigate();

  const handleAnalyze = (product) => {
    navigate("/analysis", {
      state: {
        ingredients: product.ingredients,
        productName: product.name,
        source: "demo",
      },
    });
  };

  return (
    <div className="min-h-screen bg-[#040806] text-white font-sans">
      <Navbar />

      <main className="container mx-auto px-6 pt-32 pb-20 max-w-6xl">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6 animate-fade-in">
            <StatusBadge className="bg-green-500/10 text-green-500 border-green-500/20 uppercase text-[10px] font-bold tracking-widest px-3 py-1">
              Live Demo
            </StatusBadge>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">
            Try an example
          </h1>

          <p className="text-gray-400 max-w-xl mx-auto animate-fade-in">
            Select a product below to see how our AI analyzes ingredients for safety, nutrition, and processing levels.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {demoProducts.map((product, index) => (
            <div key={product.id} className="animate-fade-in">
              <ProductCard {...product} onAnalyze={() => handleAnalyze(product)} />
            </div>
          ))}
        </div>

        <div className="text-center animate-fade-in space-y-4">
          <p className="text-gray-500 text-sm">Already know what you're eating?</p>
          <button
            onClick={() => navigate("/")}
            className="inline-flex items-center gap-2 font-bold hover:text-green-400 transition-colors group"
          >
            Skip demo and upload my own
            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </main>
    </div>
  );
};

export default Demo;
