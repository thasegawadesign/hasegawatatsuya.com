import clsx from "clsx";
import { glass } from "./glass.css";

export default function Glass({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div className={clsx(glass)}>{children}</div>;
}
