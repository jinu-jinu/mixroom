import { useRef } from "react";
import FilterEffect from "./FilterEffect";

const FilterElem = () => {
  const ref = useRef();

  const effect = new FilterEffect();

  return <primitive reef={ref} object={effect} />;
};

export default FilterElem;
