import { useRouter } from "next/navigation";
import { useCallback } from "react";

export function useViewTransition() {
  const router = useRouter();

  const handleTransition = useCallback(
    (targetPath: string) => (event: React.MouseEvent) => {
      event.preventDefault();
      if (document.startViewTransition) {
        document.startViewTransition(() => {
          router.push(targetPath);
        });
      } else {
        router.push(targetPath);
      }
    },
    [router]
  );

  return handleTransition;
}
