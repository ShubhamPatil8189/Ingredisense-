import { useNavigate } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Header from "@/components/layout/Header";
import ProductCard from "@/components/cards/ProductCard";
import { StatusBadge } from "@/components/ui/status-badge";

const demoProducts = [
  {
    id: "chips",
    name: "Classic Potato Chips",
    description: "Standard supermarket variety. Contains various additives.",
    image:
      "https://images.unsplash.com/photo-1566478989037-eec170784d0b?w=400&h=300&fit=crop",
    badge: "ultra-processed",
    badgeLabel: "Ultra-processed",
    ingredients:
      "Potatoes, Vegetable Oil (Palm Oil), Salt, Dextrose, Artificial Flavors",
  },
  {
    id: "soda",
    name: "Orange Soda",
    description: "Popular carbonated beverage with high fructose corn syrup.",
    image:
      "https://images.unsplash.com/photo-1625772299848-391b6a87d7b3?w=400&h=300&fit=crop",
    badge: "high-sugar",
    badgeLabel: "High Sugar",
    ingredients:
      "Carbonated Water, High Fructose Corn Syrup, Citric Acid, Artificial Flavors, Sodium Benzoate",
  },
  {
    id: "babyfood",
    name: "Organic Baby Food",
    description: "Pureed fruit and vegetable blend. Certified organic.",
    image:
      "https://images.unsplash.com/photo-1590080875515-8a3a8dc5735e?w=400&h=300&fit=crop",
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
    <div className="min-h-screen bg-background">
      <Header variant="full" />

      <main className="container mx-auto px-4 pt-24 pb-20">
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4 animate-fade-in">
            <StatusBadge
              variant="safe"
              className="uppercase text-xs font-semibold tracking-wider"
            >
              Live Demo
            </StatusBadge>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 animate-fade-in">
            Try an example
          </h1>

          <p className="text-muted-foreground max-w-xl mx-auto animate-fade-in">
            Select a product below to see how our AI analyzes ingredients.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-16">
          {demoProducts.map((product, index) => (
            <div
              key={product.id}
              style={{ animationDelay: `${0.2 + index * 0.1}s` }}
            >
              <ProductCard
                {...product}
                onAnalyze={() => handleAnalyze(product)}
              />
            </div>
          ))}
        </div>

        <div className="text-center animate-fade-in">
          <p className="text-muted-foreground mb-3">
            Already know what you're eating?
          </p>
          <button
            onClick={() => navigate("/")}
            className="inline-flex items-center gap-2 font-semibold text-foreground hover:text-primary transition-colors"
          >
            Skip demo and upload my own
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </main>
    </div>
  );
};

export default Demo;
