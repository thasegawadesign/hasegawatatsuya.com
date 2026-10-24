import { tooltipArrow, tooltipContent, tooltipLive } from "@/components/tooltip/tooltip.css";
import clsx from "clsx";
import { Tooltip as RadixTooltip } from "radix-ui";
import { ReactNode } from "react";

interface TooltipProps {
  content: string;
  children: ReactNode;
  side?: "top" | "bottom" | "left" | "right";
  announcement?: string;
}

export default function Tooltip({ content, children, side = "top", announcement }: TooltipProps) {
  return (
    <RadixTooltip.Provider delayDuration={360}>
      <RadixTooltip.Root>
        <RadixTooltip.Trigger asChild>{children}</RadixTooltip.Trigger>
        <RadixTooltip.Portal>
          <RadixTooltip.Content className={clsx(tooltipContent)} side={side} sideOffset={4}>
            {content}
            <RadixTooltip.Arrow className={clsx(tooltipArrow)} />
          </RadixTooltip.Content>
        </RadixTooltip.Portal>
      </RadixTooltip.Root>
      {/* ツールチップ本体は aria-describedby で結ばれるだけで、文言が変わっても読み上げられない */}
      {announcement !== undefined && (
        <span role="status" className={clsx(tooltipLive)}>
          {announcement}
        </span>
      )}
    </RadixTooltip.Provider>
  );
}
