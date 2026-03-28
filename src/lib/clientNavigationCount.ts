let count = 0;

export function getClientNavigationCount(): number {
  return count;
}

export function incrementClientNavigationCount(): void {
  count += 1;
}
