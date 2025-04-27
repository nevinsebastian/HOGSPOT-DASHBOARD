import * as React from "react";
import { cn } from "@/lib/utils";

interface HabitItemProps {
  title: string;
  trainer: string;
  completedSessions: number;
  totalSessions: number;
  date: string;
}

const HabitItem = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & HabitItemProps
>(
  (
    {
      className,
      title,
      trainer,
      completedSessions,
      totalSessions,
      date,
      ...props
    },
    ref
  ) => {
    const progress = (completedSessions / totalSessions) * 10;

    return (
      <div
        ref={ref}
        className={cn(
          "flex items-center justify-between py-3 space-x-4",
          className
        )}
        {...props}
      >
        <div className="flex items-center space-x-4">
          <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
            <span className="text-sm font-medium">{title[0]}</span>
          </div>
          <div>
            <h4 className="text-sm font-medium leading-none">{title}</h4>
            <p className="text-sm text-muted-foreground">Trainer: {trainer}</p>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <div className="flex space-x-1">
            {Array.from({ length: 10 }).map((_, i) => (
              <div
                key={i}
                className={cn(
                  "w-1.5 h-6 rounded-full",
                  i < progress ? "bg-primary" : "bg-primary/20"
                )}
              />
            ))}
          </div>
          <span className="text-sm text-muted-foreground min-w-[90px] text-right">
            Sessions completed: {completedSessions}/{totalSessions}
          </span>
        </div>
      </div>
    );
  }
);
HabitItem.displayName = "HabitItem";

interface HabitListProps extends React.HTMLAttributes<HTMLDivElement> {
  habits: HabitItemProps[];
}

const HabitList = React.forwardRef<HTMLDivElement, HabitListProps>(
  ({ className, habits, ...props }, ref) => {
    return (
      <div ref={ref} className={cn("space-y-1", className)} {...props}>
        {habits.map((habit, index) => (
          <HabitItem key={index} {...habit} />
        ))}
      </div>
    );
  }
);
HabitList.displayName = "HabitList";

export { HabitList, HabitItem };
export type { HabitItemProps, HabitListProps };
