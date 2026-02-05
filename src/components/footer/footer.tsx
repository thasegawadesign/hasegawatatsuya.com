import { roboto } from "@/app/fonts";
import { copyRight, footer } from "@/components/footer/footer.css";
import clsx from "clsx";

export const revalidate = 86400;

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={clsx(footer)}>
      <p>
        <small className={clsx(roboto.className, copyRight)}>
          © {currentYear} Tatsuya Hasegawa
        </small>
      </p>
    </footer>
  );
}
