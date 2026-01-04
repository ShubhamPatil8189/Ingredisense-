import { BarChart3 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { StatusBadge } from "@/components/ui/status-badge";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ id, name, description, image, badge, badgeLabel }) => {
  const navigate = useNavigate();

  const handleAnalyze = () => {
    navigate("/analysis", { state: { productId: id, productName: name } });
  };

  return (
    <div className="glass-card overflow-hidden animate-fade-in group">
      <div className="relative aspect-[4/3] overflow-hidden">
        <img src={image} alt={name} className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105" />
        <div className="absolute top-3 left-3">
          <StatusBadge variant={badge} showIcon>{badgeLabel}</StatusBadge>
        </div>
      </div>
      
      <div className="p-5">
        <h3 className="text-lg font-semibold text-foreground mb-2">{name}</h3>
        <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{description}</p>
        
        <Button onClick={handleAnalyze} className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-medium">
          <BarChart3 className="h-4 w-4 mr-2" />
          Analyze
        </Button>
      </div>
    </div>
  );
};

export default ProductCard;
