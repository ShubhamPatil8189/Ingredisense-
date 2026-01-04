import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Leaf, Camera, CheckCircle, FlaskConical } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

const Home = () => {
  const [ingredients, setIngredients] = useState("");
  const navigate = useNavigate();

  const handleAnalyze = () => {
    if (ingredients.trim()) {
      navigate("/analysis", { state: { ingredients } });
    }
  };

  const handleDemo = () => {
    navigate("/demo");
  };

  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center px-4 py-20">
      <div className="flex items-center gap-3 mb-3 animate-fade-in">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary shadow-lg">
          <Leaf className="h-6 w-6 text-primary-foreground" />
        </div>
        <h1 className="text-2xl font-bold text-foreground">IngrediSense</h1>
      </div>
      
      <p className="text-muted-foreground text-center mb-10 animate-fade-in" style={{ animationDelay: "0.1s" }}>
        Understand what you eat — in seconds.
      </p>

      <div className="w-full max-w-xl glass-card p-6 animate-fade-in" style={{ animationDelay: "0.2s" }}>
        <label className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3">
          Paste Ingredients List
        </label>
        
        <Textarea
          placeholder="e.g., Water, Sugar, Corn Syrup, Modified Food Starch..."
          value={ingredients}
          onChange={(e) => setIngredients(e.target.value)}
          className="min-h-[120px] bg-secondary border-border resize-none text-foreground placeholder:text-muted-foreground focus:ring-primary"
        />

        <div className="flex items-center gap-4 my-6">
          <div className="flex-1 h-px bg-border" />
          <span className="text-xs text-muted-foreground uppercase">or</span>
          <div className="flex-1 h-px bg-border" />
        </div>

        <Button variant="secondary" className="w-full mb-3 bg-secondary hover:bg-secondary/80 text-foreground border border-border">
          <Camera className="h-4 w-4 mr-2" />
          Upload food label photo
        </Button>

        <Button onClick={handleAnalyze} className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold h-12 text-base animate-pulse-glow">
          <CheckCircle className="h-5 w-5 mr-2" />
          Analyze Safety
        </Button>
      </div>

      <button onClick={handleDemo} className="mt-8 flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors animate-fade-in" style={{ animationDelay: "0.3s" }}>
        <FlaskConical className="h-4 w-4" />
        Try a demo product instead
      </button>
    </div>
  );
};

export default Home;
