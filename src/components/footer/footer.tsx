import { roboto } from "@/app/fonts";
import { copyRight, footer } from "@/components/footer/footer.css";
import clsx from "clsx";

export default function Footer() {
  return (
    <footer className={clsx(footer)}>
      <p>
        <small className={clsx(roboto.className, copyRight)}>
          © 2026 Tatsuya Hasegawa
        </small>
      </p>
    </footer>
  );
}
