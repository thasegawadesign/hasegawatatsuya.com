import { tooltipArrow, tooltipContent } from "@/components/tooltip/tooltip.css";
import clsx from "clsx";
import { Tooltip as RadixTooltip } from "radix-ui";
import { ReactNode } from "react";

type TooltipProps = {
  content: string;
  children: ReactNode;
  side?: "top" | "bottom" | "left" | "right";
};

export default function Tooltip({
  content,
  children,
  side = "top",
}: TooltipProps) {
  return (
    <RadixTooltip.Provider delayDuration={360}>
      <RadixTooltip.Root>
        <RadixTooltip.Trigger asChild>{children}</RadixTooltip.Trigger>
        <RadixTooltip.Portal>
          <RadixTooltip.Content
            className={clsx(tooltipContent)}
            side={side}
            sideOffset={4}
          >
            {content}
            <RadixTooltip.Arrow className={clsx(tooltipArrow)} />
          </RadixTooltip.Content>
        </RadixTooltip.Portal>
      </RadixTooltip.Root>
    </RadixTooltip.Provider>
  );
}
