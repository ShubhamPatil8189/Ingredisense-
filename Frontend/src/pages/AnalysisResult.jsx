import { useLocation, useNavigate, Link } from "react-router-dom";
import { CheckCircle, AlertTriangle, HelpCircle, Bookmark, Share2, ScanLine } from "lucide-react";
import Header from "@/components/layout/Header";
import InfoCard from "@/components/cards/InfoCard";
import IngredientItem from "@/components/cards/IngredientItem";
import { StatusBadge } from "@/components/ui/status-badge";
import { Button } from "@/components/ui/button";

const AnalysisResult = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const productName = location.state?.productName || "Sample Product";

  return (
    <div className="min-h-screen bg-background">
      <Header variant="minimal" />
      
      <main className="container mx-auto px-4 pt-24 pb-32">
        <div className="flex justify-center mb-6 animate-fade-in">
          <StatusBadge variant="verified" showIcon>Verified Analysis</StatusBadge>
        </div>

        <div className="text-center mb-10 animate-fade-in" style={{ animationDelay: "0.1s" }}>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 leading-tight">
            Generally safe for<br />occasional consumption
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            The main concern is high added sugar, which matters if consumed daily, but otherwise the ingredients are clean.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-4 max-w-4xl mx-auto mb-6">
          <InfoCard title="What Matters Most" icon={AlertTriangle} iconColor="text-warning" className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <div className="space-y-3">
              <IngredientItem name="High Fructose Corn Syrup" description="High Glycemic Index sweetener" icon="🍬" iconBg="bg-warning/20" />
              <IngredientItem name="Red 40" description="Artificial Colorant" icon="🔴" iconBg="bg-destructive/20" />
            </div>
          </InfoCard>

          <InfoCard title="Why This Matters" icon={HelpCircle} iconColor="text-primary" className="animate-fade-in" style={{ animationDelay: "0.25s" }}>
            <p className="text-foreground mb-4">
              This product is acceptable as a sweet treat. However, the combination of liquid sugars and artificial dyes suggests it shouldn't be a staple of your diet.
            </p>
            <p className="text-sm text-muted-foreground mb-4">
              The sugar content exceeds recommended daily limits for children in a single serving.
            </p>
            <Link to="/transparency" className="inline-flex items-center text-sm text-primary hover:underline font-medium">
              Read full analysis →
            </Link>
          </InfoCard>
        </div>

        <div className="grid md:grid-cols-2 gap-4 max-w-4xl mx-auto">
          <InfoCard title="Who Should Be Cautious" icon={AlertTriangle} iconColor="text-warning" className="animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <div className="flex flex-wrap gap-2">
              <StatusBadge variant="warning">Diabetics</StatusBadge>
              <StatusBadge variant="warning">Children (Hyperactivity)</StatusBadge>
              <StatusBadge variant="neutral">Dye Sensitivity</StatusBadge>
            </div>
          </InfoCard>

          <InfoCard title="Uncertainty & Limits" icon={HelpCircle} iconColor="text-muted-foreground" className="animate-fade-in" style={{ animationDelay: "0.35s" }}>
            <p className="text-sm text-muted-foreground">
              We could not verify the specific source of the "Natural Flavors" listed on the package.
            </p>
          </InfoCard>
        </div>
      </main>

      <div className="fixed bottom-0 left-0 right-0 bg-background/95 backdrop-blur-xl border-t border-border py-4">
        <div className="container mx-auto px-4 flex items-center justify-center gap-3">
          <Button onClick={() => navigate("/")} className="bg-primary hover:bg-primary/90 text-primary-foreground font-medium px-6">
            <ScanLine className="h-4 w-4 mr-2" />
            Scan another item
          </Button>
          <Button variant="secondary" size="icon" className="bg-secondary hover:bg-secondary/80">
            <Bookmark className="h-4 w-4" />
          </Button>
          <Button variant="secondary" size="icon" className="bg-secondary hover:bg-secondary/80">
            <Share2 className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AnalysisResult;
