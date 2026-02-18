import { useCallback, useState } from "react";

export const useClipboard = (resetDelay: number = 2000) => {
  const [copied, setCopied] = useState(false);

  const copy = useCallback(
    async (text: string) => {
      try {
        await navigator.clipboard.writeText(text);
        setCopied(true);

        setTimeout(() => {
          setCopied(false);
        }, resetDelay);
      } catch (error) {
        console.error("Failed to copy:", error);
      }
    },
    [resetDelay]
  );

  return { copied, copy };
};
