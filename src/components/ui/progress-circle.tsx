import * as React from "react";
import { cn } from "@/lib/utils";

interface ProgressCircleProps extends React.HTMLAttributes<HTMLDivElement> {
  value: number;
  max?: number;
  size?: "sm" | "md" | "lg";
  variant?: "default" | "success" | "warning" | "danger";
}

const ProgressCircle = React.forwardRef<HTMLDivElement, ProgressCircleProps>(
  (
    { className, value, max = 100, size = "md", variant = "default", ...props },
    ref
  ) => {
    const percentage = (value / max) * 100;
    const strokeWidth = size === "sm" ? 4 : size === "md" ? 6 : 8;
    const radius = size === "sm" ? 24 : size === "md" ? 36 : 48;
    const circumference = 2 * Math.PI * radius;
    const strokeDashoffset = circumference - (percentage / 100) * circumference;

    const sizeClasses = {
      sm: "h-12 w-12",
      md: "h-20 w-20",
      lg: "h-28 w-28",
    };

    const variantClasses = {
      default: "text-primary stroke-primary",
      success: "text-green-500 stroke-green-500",
      warning: "text-yellow-500 stroke-yellow-500",
      danger: "text-red-500 stroke-red-500",
    };

    return (
      <div
        ref={ref}
        className={cn(
          "relative inline-flex items-center justify-center",
          sizeClasses[size],
          className
        )}
        {...props}
      >
        <svg className="w-full h-full -rotate-90">
          <circle
            className="stroke-muted/25 fill-none"
            strokeWidth={strokeWidth}
            r={radius}
            cx="50%"
            cy="50%"
          />
          <circle
            className={cn(
              "fill-none transition-all duration-300 ease-in-out",
              variantClasses[variant]
            )}
            strokeWidth={strokeWidth}
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
            r={radius}
            cx="50%"
            cy="50%"
          />
        </svg>
        <span className="absolute text-sm font-medium">
          {Math.round(percentage)}%
        </span>
      </div>
    );
  }
);
ProgressCircle.displayName = "ProgressCircle";

export { ProgressCircle };
