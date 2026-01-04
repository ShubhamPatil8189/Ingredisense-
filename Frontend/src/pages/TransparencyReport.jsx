import { useNavigate, Link } from "react-router-dom";
import { CheckCircle, AlertTriangle, ListOrdered, ArrowRight } from "lucide-react";
import Header from "@/components/layout/Header";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const TransparencyReport = () => {
  const navigate = useNavigate();

  // 45 Realistic Ingredients for a Plant-Based Burger
  const ingredients = [
    "Water", "Organic Pea Protein", "Expeller-Pressed Canola Oil", "Refined Coconut Oil", "Rice Protein", 
    "Natural Flavors", "Dried Yeast", "Mung Bean Protein", "Methylcellulose", "Potato Starch", 
    "Apple Extract", "Potassium Chloride", "Salt", "Vinegar", "Lemon Juice Concentrate", 
    "Sunflower Lecithin", "Beet Juice Extract", "Pomegranate Fruit Powder", "Lycopene", "Vitamins (B3, B6, B12)", 
    "Pantothenate", "Zinc Gluconate", "Ferric Orthophosphate", "Calcium", "Magnesium Carbonate",
    "Organic Garlic Powder", "Organic Onion Powder", "Hickory Smoke Flavor", "Spices", "Bamboo Cellulose",
    "Cultured Dextrose", "Vegetable Glycerin", "Guar Gum", "Gum Arabic", "Citric Acid",
    "Ascorbic Acid", "Annatto Color", "Organic Cane Sugar (Trace)", "Sea Salt", "Potassium Citrate",
    "Iron Pyrophosphate", "Thiamine Hydrochloride", "Riboflavin", "Niacinamide", "Pyridoxine"
  ];

  return (
    <div className="min-h-screen bg-[#070b09] text-white font-sans selection:bg-green-500/30">
      <Header variant="full" showSearch />
      
      <main className="container mx-auto px-6 pt-20 pb-16 max-w-5xl">
        {/* Header Section */}
        <div className="mb-8 animate-fade-in">
          <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#22c55e] mb-2">
            TRANSPARENCY REPORT
          </p>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-3 tracking-tight">
            How we analyzed this product
          </h1>
          <p className="text-gray-400 text-sm md:text-base">
            A complete breakdown of our findings for <span className="text-white font-medium">Organic Plant-Based Burger Patties</span>.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-6">
          {/* Left Column */}
          <div className="lg:col-span-8 space-y-6">
            
            {/* Analysis Conclusion Card */}
            <div className="bg-[#0f1712] border border-white/5 rounded-xl p-6 shadow-sm">
              <div className="flex items-center gap-2.5 mb-4">
                <CheckCircle className="h-5 w-5 text-[#22c55e]" />
                <h2 className="text-lg font-semibold text-white">Analysis Conclusion</h2>
              </div>
              <p className="text-gray-300 leading-relaxed mb-6 text-sm">
                Based on your preferences for <span className="text-white font-semibold">Low Sugar</span> and <span className="text-white font-semibold">Vegan</span> diets, we analyzed the nutritional panel and 45 distinct ingredients to ensure they meet your safety standards. The product contains no animal-derived ingredients and falls within the acceptable sugar intake range for a single serving.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 rounded-full bg-[#14261c] text-[#4ade80] text-[11px] font-bold border border-[#22c55e]/20">
                  Safe to consume
                </span>
                <span className="px-3 py-1 rounded-full bg-[#1a1f1c] text-gray-400 text-[11px] font-bold border border-white/10">
                  No Allergens Detected
                </span>
              </div>
            </div>

            {/* Our Philosophy Card */}
            <div className="bg-[#0f1712] border border-white/5 rounded-xl p-6">
              <h2 className="text-lg font-semibold text-white mb-3">Our Philosophy</h2>
              <p className="text-gray-400 leading-relaxed text-sm">
                We focus on ingredients that impact daily health decisions. Our AI prioritizes evidence-based nutritional science over marketing claims. We flag additives, excessive preservatives, and hidden sugars to give you a clear picture of what you are eating.
              </p>
            </div>

            {/* Accordion Ingredient List */}
            <Accordion type="single" collapsible className="bg-[#0f1712] border border-white/5 rounded-xl overflow-hidden">
              <AccordionItem value="ingredients" className="border-none">
                <AccordionTrigger className="px-6 py-4 hover:no-underline hover:bg-white/5">
                  <div className="flex items-center gap-3">
                    <ListOrdered className="h-5 w-5 text-gray-400" />
                    <span className="text-base font-semibold text-white">Full Ingredient List (45 items)</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-6 border-t border-white/5 pt-4">
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-4 gap-y-2">
                    {ingredients.map((item, i) => (
                      <div key={i} className="text-[12px] text-gray-500 flex items-center gap-2">
                        <span className="text-[10px] text-green-800 font-mono">{(i + 1).toString().padStart(2, '0')}</span>
                        {item}
                      </div>
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>

          {/* Right Column (Sidebar) */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* Data Sources Card */}
            <div className="bg-[#0f1712] border border-white/5 rounded-xl p-6">
              <h3 className="text-xs font-bold text-white uppercase tracking-widest mb-5">Data Sources</h3>
              <div className="space-y-4">
                {[
                  "USDA FoodData Central", 
                  "OpenFoodFacts Database", 
                  "FDA GRAS List (Generally Recognized as Safe)"
                ].map((source, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="h-4 w-4 text-[#22c55e] flex-shrink-0 mt-0.5" />
                    <span className="text-gray-400 text-[13px] leading-tight">{source}</span>
                  </div>
                ))}
              </div>
              <div className="mt-6 pt-5 border-t border-white/5">
                <Link to="#" className="text-[#22c55e] text-[12px] font-bold flex items-center gap-2 hover:opacity-80 transition-opacity">
                  Learn more about our methodology <ArrowRight className="h-3 w-3" />
                </Link>
              </div>
            </div>

            {/* Disclaimer Card */}
            <div className="bg-[#14100b] border border-orange-900/20 rounded-xl p-6">
              <div className="flex items-center gap-2.5 mb-3">
                <AlertTriangle className="h-4 w-4 text-orange-500/80" />
                <h3 className="text-xs font-bold text-orange-500/80 uppercase tracking-wider">Important Disclaimer</h3>
              </div>
              <p className="text-[11px] text-gray-500 leading-relaxed">
                This analysis is generated by AI and is not medical advice. While we strive for accuracy, formulations can change. Always check the physical packaging label before consumption, especially if you have severe allergies.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default TransparencyReport;