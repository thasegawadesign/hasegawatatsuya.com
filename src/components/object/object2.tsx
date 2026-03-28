import { object2, object2Orb } from "@/components/object/object2.css";
import { objectGrain } from "@/components/object/objectGrain.css";
import clsx from "clsx";

export default function Object2() {
  return (
    <div className={clsx(object2)}>
      <div className={clsx(object2Orb)} aria-hidden />
      <div className={clsx(objectGrain)} aria-hidden />
    </div>
  );
}
