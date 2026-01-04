import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Leaf, Camera, CheckCircle, FlaskConical } from "lucide-react";
import Tesseract from "tesseract.js";

import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

const Home = () => {
  const [ingredients, setIngredients] = useState("");
  const [ocrLoading, setOcrLoading] = useState(false);

  const navigate = useNavigate();
  const fileInputRef = useRef(null);

  const handleAnalyze = () => {
    if (ingredients.trim()) {
      navigate("/analysis", { state: { ingredients } });
    }
  };

  const handleDemo = () => {
    navigate("/demo");
  };

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setOcrLoading(true);

    try {
      const { data } = await Tesseract.recognize(file, "eng");

      // NOTE: We intentionally keep this raw.
      // The AI is designed to reason with imperfect input.
      const extractedText = data.text;

      navigate("/analysis", {
        state: {
          ingredients: extractedText,
        },
      });
    } catch (error) {
      console.error("OCR failed:", error);
      alert("Could not read text from image. Try a clearer photo.");
    } finally {
      setOcrLoading(false);
      e.target.value = ""; // reset input
    }
  };

  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center px-4 py-20">
      <div className="flex items-center gap-3 mb-3 animate-fade-in">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary shadow-lg">
          <Leaf className="h-6 w-6 text-primary-foreground" />
        </div>
        <h1 className="text-2xl font-bold text-foreground">IngrediSense</h1>
      </div>

      <p className="text-muted-foreground text-center mb-10 animate-fade-in">
        Understand what you eat — in seconds.
      </p>

      <div className="w-full max-w-xl glass-card p-6 animate-fade-in">
        <label className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3">
          Paste Ingredients List
        </label>

        <Textarea
          placeholder="e.g., Water, Sugar, Corn Syrup, Modified Food Starch..."
          value={ingredients}
          onChange={(e) => setIngredients(e.target.value)}
          className="min-h-[120px] bg-secondary resize-none"
        />

        <div className="flex items-center gap-4 my-6">
          <div className="flex-1 h-px bg-border" />
          <span className="text-xs text-muted-foreground uppercase">or</span>
          <div className="flex-1 h-px bg-border" />
        </div>

        {/* Hidden file input */}
        <input
          type="file"
          accept="image/*"
          capture="environment"
          ref={fileInputRef}
          onChange={handleImageUpload}
          className="hidden"
        />

        <Button
          variant="secondary"
          className="w-full mb-3"
          onClick={() => fileInputRef.current.click()}
          disabled={ocrLoading}
        >
          <Camera className="h-4 w-4 mr-2" />
          {ocrLoading ? "Reading label..." : "Upload food label photo"}
        </Button>

        <Button
          onClick={handleAnalyze}
          className="w-full bg-primary text-primary-foreground h-12 text-base"
        >
          <CheckCircle className="h-5 w-5 mr-2" />
          Analyze Safety
        </Button>
      </div>

      <button
        onClick={handleDemo}
        className="mt-8 flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
      >
        <FlaskConical className="h-4 w-4" />
        Try a demo product instead
      </button>
    </div>
  );
};

export default Home;
