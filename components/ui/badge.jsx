import * as React from "react";
import { cva } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold transition-all duration-300 hover:scale-110",
  {
    variants: {
      variant: {
        default:
          "bg-gradient-to-r from-pink-100 to-purple-100 text-pink-700 border border-pink-200",
        secondary:
          "bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-700 border border-blue-200",
        outline: "text-pink-600 border-2 border-pink-300",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

function Badge({ className, variant, ...props }) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}

export { Badge, badgeVariants };
