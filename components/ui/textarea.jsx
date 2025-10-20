import * as React from "react";
import { cn } from "@/lib/utils";

const Textarea = React.forwardRef(({ className, ...props }, ref) => {
  return (
    <textarea
      className={cn(
        "flex min-h-[120px] w-full rounded-xl border-2 border-pink-200 bg-white/50 backdrop-blur-sm px-4 py-3 text-sm transition-all duration-300 placeholder:text-gray-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pink-400 focus-visible:border-pink-400 disabled:cursor-not-allowed disabled:opacity-50 resize-none",
        className
      )}
      ref={ref}
      {...props}
    />
  );
});
Textarea.displayName = "Textarea";

export { Textarea };
