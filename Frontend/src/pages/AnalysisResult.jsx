import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  AlertTriangle,
  HelpCircle,
  Bookmark,
  Share2,
  ScanLine,
} from "lucide-react";

import Header from "@/components/layout/Header";
import InfoCard from "@/components/cards/InfoCard";
import IngredientItem from "@/components/cards/IngredientItem";
import { StatusBadge } from "@/components/ui/status-badge";
import { Button } from "@/components/ui/button";

const AnalysisResult = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const ingredients = location.state?.ingredients;

  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!ingredients) {
      navigate("/");
      return;
    }

    const fetchAnalysis = async () => {
      try {
        const res = await fetch("https://ingredisense-backend.onrender.com/api/analyze", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ ingredients }),
        });

        const data = await res.json();
        setResult(data);
      } catch (err) {
        console.error("Analysis failed", err);
      } finally {
        setLoading(false);
      }
    };

    fetchAnalysis();
  }, [ingredients, navigate]);

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <p className="text-muted-foreground">Analyzing ingredients…</p>
      </div>
    );
  }

  if (!result) return null;

  /* ===============================
     🚫 NOT INGREDIENT LIST STATE
     =============================== */
  if (result.type === "not_ingredients" || result.type === "invalid_input") {
    return (
      <div className="min-h-screen bg-background flex flex-col">
        <Header variant="minimal" />

        <main className="flex flex-1 flex-col items-center justify-center px-6 text-center">
          <h1 className="text-2xl font-bold text-foreground mb-3">
            {result.decision || "We couldn’t analyze this"}
          </h1>

          <p className="text-muted-foreground max-w-md mb-6">
            {result.reasoning ||
              "Please paste an ingredient list from a food label."}
          </p>

          <Button
            onClick={() => navigate("/")}
            className="bg-primary text-primary-foreground px-6"
          >
            Try again
          </Button>
        </main>
      </div>
    );
  }

  /* ===============================
     ✅ NORMAL ANALYSIS UI
     =============================== */
  return (
    <div className="min-h-screen bg-background">
      <Header variant="minimal" />

      <main className="container mx-auto px-4 pt-24 pb-32">
        {/* VERIFIED */}
        <div className="flex justify-center mb-4 animate-fade-in">
          <StatusBadge variant="verified" showIcon>
            Verified Analysis
          </StatusBadge>
        </div>

        {/* SHOULD I CARE */}
        {result.shouldICare && (
          <div className="text-center mb-2 animate-fade-in">
            <p className="text-sm text-muted-foreground">
              {result.shouldICare}
            </p>
          </div>
        )}

        {/* DECISION */}
        <div className="text-center mb-10 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-3">
            {result.decision}
          </h1>

          <p className="text-muted-foreground max-w-xl mx-auto text-sm">
            {result.reasoning}
          </p>
        </div>

        {/* PRIMARY + SECONDARY */}
        <div className="grid md:grid-cols-2 gap-4 max-w-4xl mx-auto mb-6">
          <InfoCard
            title="What Matters Most"
            icon={AlertTriangle}
            iconColor="text-warning"
          >
            <div className="space-y-3">
              <IngredientItem
                name={result.primaryConcern?.ingredient}
                description={result.primaryConcern?.whyItMatters}
                icon="⚠️"
                iconBg="bg-warning/20"
              />

              <IngredientItem
                name={result.secondaryConcern?.ingredient}
                description={result.secondaryConcern?.whyItMatters}
                icon="➕"
                iconBg="bg-secondary/20"
              />
            </div>
          </InfoCard>

          {/* COMPARISON */}
          <InfoCard
            title="Why This Matters"
            icon={HelpCircle}
            iconColor="text-primary"
          >
            <p className="text-foreground">{result.comparison}</p>
          </InfoCard>
        </div>

        {/* WHO */}
        <div className="grid md:grid-cols-2 gap-4 max-w-4xl mx-auto">
          <InfoCard
            title="Who Should Be Cautious"
            icon={AlertTriangle}
            iconColor="text-warning"
          >
            <div className="flex flex-wrap gap-2">
              {result.whoShouldAvoid?.map((item, idx) => (
                <StatusBadge key={idx} variant="warning">
                  {item}
                </StatusBadge>
              ))}
            </div>
          </InfoCard>

          <InfoCard
            title="Who Does NOT Need to Worry"
            icon={HelpCircle}
            iconColor="text-primary"
          >
            <div className="flex flex-wrap gap-2">
              {result.whoDoesNotNeedToWorry?.map((item, idx) => (
                <StatusBadge key={idx} variant="neutral">
                  {item}
                </StatusBadge>
              ))}
            </div>
          </InfoCard>
        </div>

        {/* UNCERTAINTY */}
        <div className="max-w-4xl mx-auto mt-4">
          <InfoCard
            title="Uncertainty & Limits"
            icon={HelpCircle}
            iconColor="text-muted-foreground"
          >
            <p className="text-sm text-muted-foreground">
              {result.uncertainty ||
                "Ingredient text was read from an image; minor details may be missed, but the overall pattern is clear."}
            </p>
          </InfoCard>
        </div>
      </main>

      {/* ACTION BAR */}
      <div className="fixed bottom-0 left-0 right-0 bg-background/95 backdrop-blur-xl border-t border-border py-4">
        <div className="container mx-auto px-4 flex items-center justify-center gap-3">
          <Button
            onClick={() => navigate("/")}
            className="bg-primary text-primary-foreground px-6"
          >
            <ScanLine className="h-4 w-4 mr-2" />
            Scan another item
          </Button>
          <Button variant="secondary" size="icon">
            <Bookmark className="h-4 w-4" />
          </Button>
          <Button variant="secondary" size="icon">
            <Share2 className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AnalysisResult;
