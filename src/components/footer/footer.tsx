import { copyRight, footer } from "@/components/footer/footer.css";
import clsx from "clsx";
import { Roboto } from "next/font/google";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400"],
});

export default function Footer() {
  return (
    <footer className={clsx(footer)}>
      <p>
        <small className={clsx(roboto.className, copyRight)}>
          © 2025 Tatsuya Hasegawa
        </small>
      </p>
    </footer>
  );
}
