import {
  lily1,
  lily2,
  lily3,
  lily4,
  lily5,
  lily6,
  hw1,
  hw2,
  hw3,
  hw4,
  hw5,
  hw6,
  sy1,
  sy2,
  sy3,
  sy4,
  sy5,
  sy6,
  bae1,
  bae2,
  bae3,
  bae4,
  bae5,
  bae6,
  jw1,
  jw2,
  jw3,
  jw4,
  jw5,
  jw6,
  kj1,
  kj2,
  kj3,
  kj4,
  kj5,
  kj6,
} from "../assets/images";
import { AnnotationType, Content, ContentList } from "../types";

const lily: Content = {
  englishTitle: "LILY",
  imgIdx: 4,
  photoResources: [
    {
      info: "2023.03.05",
      resource: lily1,
      comment: "야 5달라 있냐?💵",
    },
    {
      info: "2023.06.09",
      resource: lily2,
      comment: "에스프레소가 잘 어울리는 박진☕",
    },
    {
      info: "2023.06.23",
      resource: lily3,
      comment: "안경써도 예쁜 릴리👓",
    },
    {
      info: "2023.07.09",
      resource: lily4,
      comment: "영화같은 한 장면📽️",
    },
    {
      info: "2023.07.12",
      resource: lily5,
      comment: "꽃보다 예쁜 릴리🌺",
    },
    {
      info: "2023.10.18",
      resource: lily6,
      comment: "Happy Birthday🎂",
    },
  ],
  youtubeResources: [
    {
      comment: "릴리의 크리스마스 캐롤🎄",
      resource: "vwQFA-m-UAo?si=wZzSz-X2O5T9ZgKb",
      info: "Video",
    },
    {
      comment: "비긴어게인 - 릴리🌼",
      resource: "YCQkEGcT0A8?si=HVvzpAoEoFn0Eikb",
      info: "Video",
    },
    {
      comment: "리무진서비스 - 릴리🎙️",
      resource: "l6rvOO9HktY?si=RSsIW9IFBpCzE1kV",
      info: "Video",
    },
    {
      comment: "차개듀 - 릴리🫦",
      resource: "oDtDcOBGw0g?si=EObBc2UflHB8G2lW",
      info: "Video",
    },
  ],
  shortsResources: [
    {
      comment: "인사성 밝은 릴리🖐️",
      resource: "innaLo11Spc?si=VDi_M4YazgVAY4ck",
      info: "Shorts",
    },
    {
      comment: "첫인상이 차가웠던 릴리🧊",
      resource: "-X6uth5w0AY?si=tNhwZ_JjWOnDFyjS",
      info: "Shorts",
    },
    {
      comment: "릴리의 아무말 대잔치🐎",
      resource: "fnH-ZuiFPqc?si=65EBpGd0chc-pM_M",
      info: "Shorts",
    },
    {
      comment: "릴리가 말아주는 팝송 커버🎤",
      resource: "OHem1_U6yJI?si=priZTNnurz0Hzm09",
      info: "Shorts",
    },
  ],
};

const haewon: Content = {
  englishTitle: "HAEWON",
  imgIdx: 3,
  photoResources: [
    {
      info: "2023.01.22",
      resource: hw1,
      comment: "상견례 프리패스상🙇‍♀️",
    },
    {
      info: "2023.06.07",
      resource: hw2,
      comment: "청담동 재벌집 둘째딸상💎",
    },
    {
      info: "2023.07.15",
      resource: hw3,
      comment: "오이시쿠나레💔",
    },
    {
      info: "2023.08.20",
      resource: hw4,
      comment: "치어리더 해원✨",
    },
    {
      info: "2023.10.03",
      resource: hw5,
      comment: "승무원 여친 픽업 온 오해솔✈️",
    },
    {
      info: "2023.10.10",
      resource: hw6,
      comment: "단발 여신✂️",
    },
  ],
  youtubeResources: [
    {
      comment: "해원이는 열두 살!🧒",
      resource: "NAmXAFtcng0?si=fwwD3fHYaE63eyot",
      info: "Video",
    },
    {
      comment: "오해원 꼰대 오부장 되다!🤬",
      resource: "HYzSA0CqKaA?si=oJikU2yStGdpEjxk",
      info: "Video",
    },
    {
      comment: "워크맨 - 해원😂",
      resource: "xGfPcH3WT6A?si=RURs_lUGaTQFkpJr",
      info: "Video",
    },
    {
      comment: "리무진 서비스 - 해원🎤",
      resource: "RCCw15KZiV0?si=mpg5BqbjwFCWPDKd",
      info: "Video",
    },
  ],
  shortsResources: [
    {
      comment: "지금부터 숨 쉬면 나랑 사귀자😶",
      resource: "RdlAo5aN7ss?si=ha7fpkUnHyV5oZD0",
      info: "Shorts",
    },
    {
      comment: "댓글 읽다 황당한 오해원😬",
      resource: "AZB28-M_SZo?si=EtsHMSOb9KRI9SUy",
      info: "Shorts",
    },
    {
      comment: "눈 마주치면 우리 사귀어🙄",
      resource: "IB1fKjSJBY8?si=t8ucvgbFQ1HeDZXQ",
      info: "Shorts",
    },
    {
      comment: "그림같은 비주얼의 오해원🎨",
      resource: "Vb4kCH5lSbo?si=oVAAYdSeMTTyFUol",
      info: "Shorts",
    },
  ],
};

const sullyoon: Content = {
  englishTitle: "SULLYOON",
  imgIdx: 4,
  photoResources: [
    {
      info: "2023.01.26",
      resource: sy1,
      comment: "스물💄",
    },
    {
      info: "2023.03.14",
      resource: sy2,
      comment: "묻었다! 얼굴에 스티커🙃",
    },
    {
      info: "2023.03.19",
      resource: sy3,
      comment: "여긴 꽃 밖에 없네?🌻",
    },
    {
      info: "2023.06.05",
      resource: sy4,
      comment: "셀카 장인🤳",
    },
    {
      info: "2023.07.08",
      resource: sy5,
      comment: "국민 첫사랑💘",
    },
    {
      info: "2023.10.21",
      resource: sy6,
      comment: "토끼 중의 토끼🐇",
    },
  ],
  youtubeResources: [
    {
      comment: "2023 설윤 연말결산📆",
      resource: "FeySbKQNCfU?si=9wswceKRYcmOjDcc",
      info: "Video",
    },
    {
      comment: "설윤이의 다꾸교실📒",
      resource: "pBCIKGUKNxQ?si=Q8lLCugfUsLow-QK",
      info: "Video",
    },
    {
      comment: "비긴어게인 - 설윤✉️",
      resource: "-eo0hjXknb0?si=ZBXpYyh_8AozzAYm",
      info: "Video",
    },
    {
      comment: "리무진 서비스 - 설윤🎤",
      resource: "GIK9KD_bC24?si=m_eA6vG9W_npPMdy",
      info: "Video",
    },
  ],
  shortsResources: [
    {
      comment: "여친 사귀고 싶으면 꼭 봐라1🖋️",
      resource: "c4Zw1vdr6kU?si=qvX3pcKxnXBDhoBw",
      info: "Shorts",
    },
    {
      comment: "여친 사귀고 싶으면 꼭 봐라2✍️",
      resource: "4sFZs-1r8y8?si=dR_oO3fjoEQPGTS7",
      info: "Shorts",
    },
    {
      comment: "돌고래 조련사🐬",
      resource: "RQMw_xRtKBE?si=8r5VgmDHOy9_sn4E",
      info: "Shorts",
    },
    {
      comment: "윤아랑 5초 사겨본 썰 푼다😭",
      resource: "lbO62OeuIyk?si=zkvKcRZHdqe6D6C5",
      info: "Shorts",
    },
  ],
};

const bae: Content = {
  englishTitle: "BAE",
  imgIdx: 0,
  photoResources: [
    {
      info: "2023.05.19",
      resource: bae1,
      comment: "감기 걸린다😷",
    },
    {
      info: "2023.06.09",
      resource: bae2,
      comment: "안경 - 배진솔👓",
    },
    {
      info: "2023.07.17",
      resource: bae3,
      comment: "다음 행동을 예측하시오🧠",
    },
    {
      info: "2023.08.28",
      resource: bae4,
      comment: "감기 걸린다2😷",
    },
    {
      info: "2023.10.01",
      resource: bae5,
      comment: "입에 날파리 들어간다🪰",
    },
    {
      info: "2023.11.07",
      resource: bae6,
      comment: "게임하는거 맞지?🕹️",
    },
  ],
  youtubeResources: [
    {
      comment: "백조오락관 - 배이,해원🍷",
      resource: "OUY5CdlC11k?si=Us8a7uwpFcRmRFN2",
      info: "Video",
    },
    {
      comment: "NMIXX 패러디 극장🎥",
      resource: "u3AdgGzen5A?si=WrnVpNiyWQCjuDzL",
      info: "Video",
    },
    {
      comment: "추석맞이 배이 브이로그📸",
      resource: "lWqOaQlbhSM?si=Ju15KsiHa6HnY6-a",
      info: "Video",
    },
    {
      comment: "차개듀🫦",
      resource: "HR23H5PnSsI?si=D5QJbSu7smD_p5Qe",
      info: "Video",
    },
  ],
  shortsResources: [
    {
      comment: "전지적 고양이 시점🎥",
      resource: "sRJexLGIhsI?si=yU5zIqYbvB5IBQvJ",
      info: "Shorts",
    },
    {
      comment: "예측불가😵‍💫",
      resource: "9ocawhGyvgE?si=0kK5EFOBO4Kgm-8Z",
      info: "Shorts",
    },
    {
      comment: "배이의 길거리 캐스팅 썰💃",
      resource: "Ci71cVj6Z7M?si=0lVFO3z_Du_KYHl-",
      info: "Shorts",
    },
    {
      comment: "광기😱",
      resource: "DtNf8fycobk?si=EjyJl7WnfHSClqrK",
      info: "Shorts",
    },
  ],
};

const jiwoo: Content = {
  englishTitle: "JIWOO",
  imgIdx: 0,
  photoResources: [
    {
      info: "2023.01.21",
      resource: jw1,
      comment: "종가집 장난꾸러기 막내 딸🧒",
    },
    {
      info: "2023.06.04",
      resource: jw2,
      comment: "화장기 없는 모습도 예쁜 지우✨",
    },
    {
      info: "2023.06.20",
      resource: jw3,
      comment: "엄마 선글라스 몰래 가져온 지우🕶️",
    },
    {
      info: "2023.07.28",
      resource: jw4,
      comment: "요정이지우🧚",
    },
    {
      info: "2023.08.25",
      resource: jw5,
      comment: "예쁜 지우❤️",
    },
    {
      info: "2023.11.07",
      resource: jw6,
      comment: "귀여운 지우🩷",
    },
  ],
  youtubeResources: [
    {
      comment: "기우쌤 - 지우✂️",
      resource: "CYAL6kKkdrY?si=CkoE4osauoyoyKsi",
      info: "Video",
    },
    {
      comment: "차개듀 - 막내즈🐶",
      resource: "tDB57NV6tbI?si=rMuOmufPu3N8yP-G",
      info: "Video",
    },
    {
      comment: "추석맞이 막내즈 브이로그📸",
      resource: "3V_oiLtcy3M?si=DfVyoESioIqyyZjG",
      info: "Video",
    },
    {
      comment: "막내즈의 수족관 브이로그🐠",
      resource: "VwnM3vq3lLA?si=ZWItXXnCWGKjDLyt",
      info: "Video",
    },
  ],
  shortsResources: [
    {
      comment: "야채도 잘 먹는 지우🥗",
      resource: "_TpCCF5YK_k?si=n4opas3YIKmXvBN_",
      info: "Shorts",
    },
    {
      comment: "돈까스 먹으러 간댔잖아요😭",
      resource: "PyCYCseQ2AE?si=H4Z7WcwWxGCnnsF1",
      info: "Shorts",
    },
    {
      comment: "밥 먹는 모습도 귀여운 지우😊",
      resource: "nrhTNYpD7Wc?si=fc5PMRTvBJMlIS8c",
      info: "Shorts",
    },
    {
      comment: "깨깨깨깨깨🎤",
      resource: "Es7Bo0sSaAE?si=mN9WxXwD0rnCoQ7K",
      info: "Shorts",
    },
  ],
};

const kyujin: Content = {
  englishTitle: "KYUJIN",
  imgIdx: 5,
  photoResources: [
    {
      info: "2023.01.27",
      resource: kj1,
      comment: "너무 예쁜 규진이❤️",
    },
    {
      info: "2023.07.20",
      resource: kj2,
      comment: "햅삐햅삐 랄라라 울랄라🌕",
    },
    {
      info: "2023.07.26",
      resource: kj3,
      comment: "방송국 놀러간 장고딩🎒",
    },
    {
      info: "2023.08.09",
      resource: kj4,
      comment: "너무 귀여운 규진이🩷",
    },
    {
      info: "2023.09.02",
      resource: kj5,
      comment: "MODEL👗",
    },
    {
      info: "2023.10.23",
      resource: kj6,
      comment: "도독 고양이🐈‍⬛",
    },
  ],
  youtubeResources: [
    {
      comment: "On The Ground - 규진😺",
      resource: "fl1uyD6Zt08?si=32Btp-SFuudEUb3X",
      info: "Video",
    },
    {
      comment: "차개듀 - 막내즈😸",
      resource: "tDB57NV6tbI?si=rMuOmufPu3N8yP-G",
      info: "Video",
    },
    {
      comment: "추석맞이 막내즈 브이로그📸",
      resource: "3V_oiLtcy3M?si=DfVyoESioIqyyZjG",
      info: "Video",
    },
    {
      comment: "막내즈의 수족관 브이로그🐠",
      resource: "VwnM3vq3lLA?si=ZWItXXnCWGKjDLyt",
      info: "Video",
    },
  ],
  shortsResources: [
    {
      comment: "절규하는 절규진🙀",
      resource: "iwqEbxLQ4JM?si=PlvAyeO8BByrCy1G",
      info: "Shorts",
    },
    {
      comment: "4세대 걸그룹 춤 커버하는 규진💃",
      resource: "253G2xtyIB8?si=iokt_kftrHGfGLtw",
      info: "Shorts",
    },
    {
      comment: "속세의 맛을 알아버린 장초딩🎒",
      resource: "iK3gRBJDDS0?si=ECLgEey-2Y7RWtrP",
      info: "Shorts",
    },
    {
      comment: "화장기 없어도 예쁜 규진이💄",
      resource: "jyyTAnzKTRI?si=FDLtx87PJa2e07Cf",
      info: "Shorts",
    },
  ],
};

const contentList: ContentList = { lily, haewon, sullyoon, bae, jiwoo, kyujin };

const glassesAnnotation: AnnotationType = {
  title: "해원이의 안경👓",
  position: [0, 0.2, 0],
  rotation: [Math.PI * -0.1, Math.PI * 0.25, Math.PI * 0.05],
  memberIdx: 1,
  factor: 2.5,
  sparkleScale: 0.4,
  sparkleSize: 1,
};

const cakeAnnotation: AnnotationType = {
  title: "쮸의 케이크🍰",
  position: [0, 0.4, 0],
  rotation: [0, 0, 0],
  memberIdx: 4,
  factor: 3,
  sparkleScale: 0.7,
  sparkleSize: 1.5,
};

const mirrorAnnotation: AnnotationType = {
  title: "규진이의 거울🪞",
  position: [0, 0, 0.2],
  rotation: [0, Math.PI * 0, 0],
  memberIdx: 5,
  factor: 4,
  sparkleScale: 1,
  sparkleSize: 1.5,
};

const canvasAnnotation: AnnotationType = {
  title: "배이의 그림🎨",
  position: [0.2, 0.8, 0.2],
  rotation: [0, Math.PI * -0.3, 0],
  memberIdx: 3,
  factor: 3,
  sparkleScale: 1,
  sparkleSize: 1.5,
};

const earAnnotation: AnnotationType = {
  title: "윤아의 토끼귀🐰",
  position: [0.2, 0.35, 0.1],
  rotation: [0, Math.PI * -0.5, 0],
  memberIdx: 2,
  factor: 4,
  sparkleScale: 1,
  sparkleSize: 1.5,
};

const magicAnnotation: AnnotationType = {
  title: "릴리의 마법모자🎩",
  position: [0, 0.35, 0],
  rotation: [0, Math.PI * 1, 0],
  memberIdx: 0,
  factor: 2.5,
  sparkleScale: 0.5,
  sparkleSize: 1,
};

const hyperlinks = {
  jyp: "https://nmixx.jype.com",
  youtube: "https://www.youtube.com/@NMIXXOfficial",
  instagram: "https://www.instagram.com/nmixx_official",
  twitter:
    "https://twitter.com/NMIXX_official?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor",
  fan_site: "http://mixxtopia.kr",
  jiwoohae: "https://www.youtube.com/@jiwoohae",
  once_haewon: "https://www.youtube.com/@ohhaewon",
};

export {
  lily,
  haewon,
  sullyoon,
  bae,
  jiwoo,
  kyujin,
  contentList,
  glassesAnnotation,
  cakeAnnotation,
  mirrorAnnotation,
  canvasAnnotation,
  earAnnotation,
  magicAnnotation,
  hyperlinks,
};
