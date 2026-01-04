import { ScanLine } from "lucide-react";
import { Button } from "@/components/ui/button";
import { StatusBadge } from "@/components/ui/status-badge";

const ProductCard = ({
  name,
  description,
  image,
  badgeLabel,
  onAnalyze,
}) => {
  return (
    <div className="glass-card overflow-hidden h-full flex flex-col">
      <img
        src={image}
        alt={name}
        className="h-40 w-full object-cover"
      />

      <div className="p-4 flex flex-col flex-1">
        <div className="mb-2">
          <StatusBadge variant="neutral">{badgeLabel}</StatusBadge>
        </div>

        <h3 className="font-semibold text-foreground mb-1">
          {name}
        </h3>

        <p className="text-sm text-muted-foreground mb-4 flex-1">
          {description}
        </p>

        <Button
          onClick={onAnalyze}
          className="w-full bg-primary text-primary-foreground font-medium"
        >
          <ScanLine className="h-4 w-4 mr-2" />
          Analyze
        </Button>
      </div>
    </div>
  );
};

export default ProductCard;
