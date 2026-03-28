import { object3, object3Orb } from "@/components/object/object3.css";
import { objectGrain } from "@/components/object/objectGrain.css";
import clsx from "clsx";

export default function Object3() {
  return (
    <div className={clsx(object3)}>
      <div className={clsx(object3Orb)} aria-hidden />
      <div className={clsx(objectGrain)} aria-hidden />
    </div>
  );
}
