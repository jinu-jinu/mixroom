import RoomModels from "./RoomModels";
import XLargeModels from "./XLargeModels";
import LargeModels from "./LargeModels";
import MediumModels from "./MediumModels";
import SmallModels from "./SmallModels";
import XSmallModels from "./XSmallModels";
import Others from "./Others";

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
