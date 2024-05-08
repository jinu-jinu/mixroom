import { lazy } from "react";
import RoomModels from "./RoomModels";

const XLargeModels = lazy(() => import("./XLargeModels"));
const LargeModels = lazy(() => import("./LargeModels"));
const MediumModels = lazy(() => import("./MediumModels"));
const SmallModels = lazy(() => import("./SmallModels"));
const XSmallModels = lazy(() => import("./XSmallModels"));
const Others = lazy(() => import("./Others"));

const House = () => {
  return (
    <>
      <RoomModels />
      <XLargeModels />
      <LargeModels />
      <MediumModels />
      <SmallModels />
      <XSmallModels />
      <Others />
    </>
  );
};

export default House;
