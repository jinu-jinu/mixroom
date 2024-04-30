import { PBRType, TextureType } from "../types";
import { Color } from "three";

const isOdd = (n: number) => (n % 2 ? true : false);

const isMobileDevice = (agent: string) => {
  const mobileRegex = [/Android/i, /iPhone/i, /iPad/i, /iPod/i, /BlackBerry/i, /Windows Phone/i];

  return mobileRegex.some((mobile) => agent.match(mobile));
};

const textureSrc = (textureType: TextureType, pbrType: PBRType) => {
  return `./textures/${textureType.toLowerCase()}/room_${textureType}_${pbrType}.avif`;
};

const colors = {
  white: new Color("#fff"),
  orange: new Color("#f76d36"),
  yellow: new Color("#fff098"),
  blue: new Color("#55c4ff"),
};

export { isOdd, isMobileDevice, textureSrc, colors };
