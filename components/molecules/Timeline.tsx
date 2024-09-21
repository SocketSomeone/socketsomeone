import React from 'react';
import { cn } from '@/lib/utils';

type Props = {};
type TimelineEventProps = {
  active?: boolean;
  last?: boolean;
  children: React.ReactNode;
};




export const TimelineEvent = ({ active, last, children }: TimelineEventProps) => {
  return (
    <div
      className={cn("w-full flex- justify-start gap-6 border-neutral-700", {
        "border-l": !last,

        "pb-16": !last,
      })}
    >
      <div className="relative">
        <div
          className={cn(
            "absolute top-0 left-[-9px] w-4 h-4 rounded-full aspect-square ",
            {
              "bg-emerald-500": active,
              "bg-neutral-700": !active,
              "w-3 h-3": !active,
              "left-[-5.5px]": !active,
            }
          )}
        >
          {active && (
            <div
              className={cn(
                "absolute top-0 left-0 rounded-full  w-4 h-4 bg-emerald-500 animate-ping aspect-square"
              )}
            />
          )}
        </div>
        <div className='-translate-y-1 flex flex-col gap-2 pl-6 '>{children}</div>
      </div>
    </div>
  );
};


export const TimelineHeader = ({ children }: { children: React.ReactNode }) => {
  return <h3 className="text-lg font-semibold text-muted-foreground flex  gap-2 items-center">{children}</h3>;
}

