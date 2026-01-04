import { cn } from "@/lib/utils";

const InfoCard = ({ title, icon: Icon, iconColor = "text-primary", children, className, style }) => {
  return (
    <div className={cn("glass-card p-5 animate-fade-in", className)} style={style}>
      {title && (
        <div className="flex items-center gap-2 mb-4">
          {Icon && <Icon className={cn("h-4 w-4", iconColor)} />}
          <h3 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">{title}</h3>
        </div>
      )}
      {children}
    </div>
  );
};

export default InfoCard;
