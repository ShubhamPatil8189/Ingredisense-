"use strict";

import * as React from "react";
import { cva } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { AlertTriangle, CheckCircle, XCircle, Leaf } from "lucide-react";

const badgeVariants = cva(
  "inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-medium transition-colors",
  {
    variants: {
      variant: {
        safe: "bg-primary/20 text-primary border border-primary/30",
        warning: "bg-warning/20 text-warning border border-warning/30",
        danger: "bg-destructive/20 text-destructive border border-destructive/30",
        neutral: "bg-muted text-muted-foreground border border-border",
        verified: "bg-primary/20 text-primary",
        "ultra-processed": "bg-destructive/90 text-destructive-foreground",
        "high-sugar": "bg-warning/90 text-warning-foreground",
        "clean-label": "bg-primary/90 text-primary-foreground",
      },
    },
    defaultVariants: {
      variant: "neutral",
    },
  }
);

const StatusBadge = ({ variant, children, showIcon = false, className }) => {
  const getIcon = () => {
    switch (variant) {
      case "safe":
      case "verified":
      case "clean-label":
        return <CheckCircle className="h-3 w-3" />;
      case "warning":
      case "high-sugar":
        return <XCircle className="h-3 w-3" />;
      case "danger":
      case "ultra-processed":
        return <AlertTriangle className="h-3 w-3" />;
      default:
        return <Leaf className="h-3 w-3" />;
    }
  };

  return (
    <span className={cn(badgeVariants({ variant }), className)}>
      {showIcon && getIcon()}
      {children}
    </span>
  );
};

export { StatusBadge, badgeVariants };