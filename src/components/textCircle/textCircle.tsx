import { roboto } from "@/app/fonts";
import {
  circle,
  circlePath,
  circleSvg,
  circleText,
} from "@/components/textCircle/textCircle.css";
import clsx from "clsx";

export default function TextCircle() {
  return (
    <div className={clsx(circle)}>
      <svg viewBox="0 0 100 100" className={clsx(circleSvg)}>
        <path
          d="M 0,50 a 50,50 0 1,1 0,1 z"
          id="circle"
          className={clsx(circlePath)}
        />
        <text className={clsx(roboto.className, circleText)}>
          <textPath xlinkHref="#circle">
            Thank you for visiting. Thank you for visiting. Thank you for
            visiting.
          </textPath>
        </text>
      </svg>
    </div>
  );
}
