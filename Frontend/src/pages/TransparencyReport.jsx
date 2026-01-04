import { useNavigate, Link } from "react-router-dom";
import { CheckCircle, AlertTriangle, ListOrdered, ArrowRight } from "lucide-react";
import Header from "@/components/layout/Header";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const TransparencyReport = () => {
  const navigate = useNavigate();

  // Example ingredient list used to demonstrate reasoning depth
  const ingredients = [
    "Water", "Pea Protein", "Canola Oil", "Coconut Oil", "Rice Protein",
    "Natural Flavors", "Methylcellulose", "Potato Starch", "Salt",
    "Vinegar", "Yeast Extract", "Beet Juice Extract", "Sunflower Lecithin",
    "Cultured Dextrose", "Citric Acid", "Spices"
  ];

  return (
    <div className="min-h-screen bg-[#070b09] text-white font-sans selection:bg-green-500/30">
      <Header variant="full" showSearch />

      <main className="container mx-auto px-6 pt-20 pb-16 max-w-5xl">
        {/* Header */}
        <div className="mb-8 animate-fade-in">
          <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#22c55e] mb-2">
            TRANSPARENCY REPORT
          </p>
          <h1 className="text-3xl md:text-4xl font-bold mb-3 tracking-tight">
            How IngrediSense reached this decision
          </h1>
          <p className="text-gray-400 text-sm md:text-base">
            This report explains how our AI evaluated the ingredient list and
            arrived at a recommendation — without relying on nutrition labels
            or health claims.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-6">
          {/* Left column */}
          <div className="lg:col-span-8 space-y-6">
            {/* Decision Logic */}
            <div className="bg-[#0f1712] border border-white/5 rounded-xl p-6">
              <div className="flex items-center gap-2.5 mb-4">
                <CheckCircle className="h-5 w-5 text-[#22c55e]" />
                <h2 className="text-lg font-semibold">
                  Decision Logic Summary
                </h2>
              </div>

              <p className="text-gray-300 text-sm leading-relaxed mb-5">
                IngrediSense does not judge foods as “good” or “bad.”
                Instead, it evaluates whether an ingredient combination
                supports <span className="text-white font-medium">routine consumption</span>
                or is better treated as an <span className="text-white font-medium">occasional choice</span>.
              </p>

              <ul className="space-y-2 text-sm text-gray-400">
                <li>• Ingredients linked to quick hunger return were prioritized</li>
                <li>• Additives were evaluated by their role in eating habits</li>
                <li>• The final decision reflects usage frequency, not safety claims</li>
              </ul>
            </div>

            {/* How the system thinks */}
            <div className="bg-[#0f1712] border border-white/5 rounded-xl p-6">
              <h2 className="text-lg font-semibold mb-3">
                How the AI reasons
              </h2>
              <p className="text-gray-400 text-sm leading-relaxed">
                The system identifies one primary ingredient that most strongly
                affects eating behavior, followed by one secondary ingredient
                that reinforces that effect. All other ingredients are ignored
                to reduce noise and decision fatigue.
              </p>
            </div>

            {/* Ingredient list */}
            <Accordion
              type="single"
              collapsible
              className="bg-[#0f1712] border border-white/5 rounded-xl overflow-hidden"
            >
              <AccordionItem value="ingredients" className="border-none">
                <AccordionTrigger className="px-6 py-4 hover:bg-white/5">
                  <div className="flex items-center gap-3">
                    <ListOrdered className="h-5 w-5 text-gray-400" />
                    <span className="text-base font-semibold">
                      Ingredients analyzed (example list)
                    </span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-6 pt-4 border-t border-white/5">
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-4 gap-y-2">
                    {ingredients.map((item, i) => (
                      <div
                        key={i}
                        className="text-[12px] text-gray-500 flex items-center gap-2"
                      >
                        <span className="text-[10px] text-green-800 font-mono">
                          {(i + 1).toString().padStart(2, "0")}
                        </span>
                        {item}
                      </div>
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>

          {/* Right column */}
          <div className="lg:col-span-4 space-y-6">
            {/* Data Philosophy */}
            <div className="bg-[#0f1712] border border-white/5 rounded-xl p-6">
              <h3 className="text-xs font-bold uppercase tracking-widest mb-4">
                What we use (and don’t)
              </h3>

              <ul className="space-y-3 text-[13px] text-gray-400">
                <li>✓ Ingredient ordering and grouping</li>
                <li>✓ Known usage patterns of common additives</li>
                <li>✓ Contextual reasoning about eating habits</li>
                <li className="text-red-400/80">✕ No nutrition label math</li>
                <li className="text-red-400/80">✕ No medical evaluation</li>
              </ul>
            </div>

            {/* Disclaimer */}
            <div className="bg-[#14100b] border border-orange-900/20 rounded-xl p-6">
              <div className="flex items-center gap-2.5 mb-3">
                <AlertTriangle className="h-4 w-4 text-orange-500/80" />
                <h3 className="text-xs font-bold uppercase tracking-wider text-orange-500/80">
                  Important context
                </h3>
              </div>
              <p className="text-[11px] text-gray-500 leading-relaxed">
                IngrediSense provides decision guidance, not health advice.
                Ingredient formulations and personal tolerance vary.
                Use this analysis to guide choices — not replace labels or professionals.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default TransparencyReport;
