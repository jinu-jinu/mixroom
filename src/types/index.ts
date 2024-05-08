import { Mesh } from "three";
import { GLTF } from "three-stdlib";

export type xsNodesType = GLTF & {
  nodes: {
    characters: Mesh;
    character_n: Mesh;
    glasses: Mesh;
    xs2: Mesh;
    iphone: Mesh;
    xs3: Mesh;
  };
};

export type sNodesType = GLTF & {
  nodes: {
    s1: Mesh;
    s2: Mesh;
    s3: Mesh;
    s4: Mesh;
    rabbit_ear: Mesh;
    magic_hat: Mesh;
    twitter: Mesh;
    instagram: Mesh;
    youtube: Mesh;
    jyp: Mesh;
  };
};

export type mNodesType = GLTF & {
  nodes: {
    m1: Mesh;
    m2: Mesh;
    canvas: Mesh;
    m3: Mesh;
    cake: Mesh;
    m4: Mesh;
    fan_site: Mesh;
    once_haewon: Mesh;
    jiwoohae: Mesh;
  };
};

export type lNodesType = GLTF & {
  nodes: {
    l1: Mesh;
    l2: Mesh;
    l3: Mesh;
    l2_fireplace: Mesh;
    l3_yds: Mesh;
    l3_mirror: Mesh;
  };
};

export type xlNodesType = GLTF & {
  nodes: {
    xl: Mesh;
    xl_emission: Mesh;
  };
};

export type wallNodesType = GLTF & {
  nodes: {
    wall: Mesh;
    ceil: Mesh;
  };
};

export type OthersNodesType = GLTF & {
  nodes: {
    window: Mesh;
    drawing: Mesh;
    tv_display: Mesh;
    iphone_display: Mesh;
    mirros: Mesh;
  };
};

export type MemberKey = "lily" | "haewon" | "sullyoon" | "bae" | "jiwoo" | "kyujin";

export type HilightMeshType = {
  position: [number, number, number];
  key: MemberKey;
  sparkleScale: number;
  sparkleSize: number;
};

export type TextureType =
  | "drawing"
  | "window"
  | "WALL"
  | "CEIL"
  | "L1"
  | "L2"
  | "L3"
  | "M1"
  | "M2"
  | "M3"
  | "M4"
  | "S1"
  | "S2"
  | "S3"
  | "S4"
  | "XS1"
  | "XS2"
  | "XS3"
  | "XL";

export type PBRType = "BaseColor" | "Roughness" | "Metallic" | "Normal" | "Emissive";

export type DeviceStoreType = {
  isMobile: boolean;
  actions: {
    handleIsMobile: (v: boolean) => void;
  };
};

export type LoadingStoreType = {
  isAssetDownloaded: boolean;
  isLoading: boolean;
  actions: {
    handleLoading: (v: boolean) => void;
    handleAssetDownload: (v: boolean) => void;
  };
};

export type ModalStoreType = {
  isOpenMainModal: boolean;
  isOpenMemberIntroModal: boolean;
  actions: {
    handleOpenMainModal: (v: boolean) => void;
    handleOpenMemberIntroModal: (v: boolean) => void;
  };
};

export type MemberInfoType = {
  title: string;
  description: string;
};

export type MemberStoreType = {
  currentMember: MemberInfoType | null;
  actions: {
    handleCurrentMember: (v: MemberKey) => void;
  };
};
