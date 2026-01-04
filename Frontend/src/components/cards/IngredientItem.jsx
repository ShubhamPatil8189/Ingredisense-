import { cn } from "@/lib/utils";

const IngredientItem = ({ name, description, icon, iconBg = "bg-warning/20" }) => {
  return (
    <div className="flex items-center gap-3 p-3 rounded-lg bg-secondary/50 transition-colors hover:bg-secondary">
      <div className={cn("flex h-10 w-10 items-center justify-center rounded-full", iconBg)}>
        <span className="text-lg">{icon}</span>
      </div>
      <div>
        <p className="font-medium text-foreground">{name}</p>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
    </div>
  );
};

export default IngredientItem;
