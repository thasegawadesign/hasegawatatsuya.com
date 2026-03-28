import { object1, object1Orb } from "@/components/object/object1.css";
import { objectGrain } from "@/components/object/objectGrain.css";
import clsx from "clsx";

export default function Object1() {
  return (
    <div className={clsx(object1)}>
      <div className={clsx(object1Orb)} aria-hidden />
      <div className={clsx(objectGrain)} aria-hidden />
    </div>
  );
}
