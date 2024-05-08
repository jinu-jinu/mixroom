# 정리

## 텍스쳐

```tsx
const glassTexture = useTexture({
  bumpMap: "/textures/glass/glass_normal.jpg",
  map: "/textures/glass/glass_base.avif",
});
glassTexture.bumpMap.flipY = false;
glassTexture.map.flipY = false;
```

##

```tsx
// 새로고침시 홈으로 이동
if (performance.getEntriesByType("navigation")[0].type === "reload") {
  if (location.pathname !== "/") {
    location.href = "/";
  }
}
```

## img태그에 크기를 명시하기

- width, height 속성을 따로 지정하지 않았을 때 프레임이 버벅거리는 현상이 발생함

## 밑줄 쳐지는 애니메이션

```tsx
const container = useRef<HTMLDivElement>(null!);
const [scope, animate] = useAnimate();

useEffect(() => {
  const containerWidth = container.current.offsetWidth;

  const animateLoader = async () => {
    await animate(
      [
        [scope.current, { x: 0, width: "100%" }],
        [scope.current, { x: containerWidth, width: "0%" }],
      ],
      { duration: 2, repeat: Infinity, repeatDelay: 0.8 }
    );
  };

  animateLoader();
}, []);

return (
  <div className="w-[300px] relative" ref={container}>
    <div ref={scope} className="bg-red-300 absolute h-[100%]" />
    <h1 className="mix-blend-difference text-yellow-400">hello</h1>
  </div>
);
```

## 설명

- NMIXX 미니 1집 expergo의 수록곡 Young, Dumb, Stupid의 뮤직비디오에 나오는 공간을 참고하여 3D 모델로 구현했습니다. 스크롤을 내리면 카메라가 움직이며 공간을 보여줍니다. 멤버들을 상징하는 아이템을 클릭하면 멤버들의 상세페이지로 이동합니다. 오른쪽 상단의 햄버거 버튼을 클릭해도 상세페이지로 이동 할 수 있습니다. 재미있게 봐주세요!😆

## framer-motion 부모 자식의 순차적인 애니메이션 재생

```tsx

// 1. 애니메이션 서술

// 부모 애니메이션은 1초동안 투명도가 0에서 1로 변한다
const parentVariant = {
  close: { opacity: 0 },
  open: { opacity: 1 },
};

// 자식 애니메이션은 투명도 + y방향으로 20 이동한다
const childVariant = {
  close: { opacity: 0, y: 20 },
  open: { opacity: 1, y: 0 },
};

// (이렇게만 하면 부모와 자식 애니메이션이 동시에 재생됌)

// 2. 트랜지션 적용
transition: {
  // 애니메이션의 지속시간
  duration: 1,
  // 부모와 자식 애니메이션 간의 딜레이
  delayChildren: 1,
  // 자식들간의 애니메이션 실행 텀
  staggerChildren: 0.1
}

const parentVariant = {
  close: { opacity: 0 },
  open: {
    opacity: 1,
    transition: {
      duration: 1,
      delayChildren: 1,
      staggerChildren: 0.1,
    }
  },
};

const childVariant = {
  close: { opacity: 0, y: 20 },
  open: { opacity: 1, y: 0 },
};

// (부모 애니메이션 다음에 자식 애니메이션이 실행되지만 y방향 애니메이션이 일어나지 않음)

// 3. 추가옵션 적용

// 자식 애니메이션이 시작하기 전에 부모의 애니메이션을 실행
when: "beforeChildren"

const backgroundVariant = {
  close: { opacity: 0 },
  open: {
    opacity: 1,
    transition: {
      // duration, delay, delayChildren 옵션은 생략함
      // when을 쓰면 자동적으로 타이밍을 맞춰 줌
      ease: "easeIn",
      staggerChildren: 0.1,
      type: "spring",
      stiffness: 110,
      when: "beforeChildren",
    },
  },
};
```

# iframe

```tsx
<rectAreaLight
                    width={ 2.5 }
                    height={ 1.65 }
                    intensity={ 65 }
                    color={ '#ff6900' }
                    rotation={ [ - 0.1, Math.PI, 0 ] }
                    position={ [ 0, 0.55, - 1.15 ] }
                />

                <primitive
                    object={ computer.scene }
                    position-y={ - 1.2 }
                    // rotation-x={ 0.13 }
                >
                    <Html
                        transform
                        wrapperClass="htmlScreen"
                        distanceFactor={ 1.17 }
                        position={ [ 0, 1.56, - 1.4 ] }
                        rotation-x={ - 0.256 }
                    >
                        <iframe src="https://bruno-simon.com/html/" />
                    </Html>
                </primitive>
```

## 거울 표현

- MeshReflectorMaterial 사용

## 프리로딩

```tsx
// 리소스 로딩이 완료 된 후로 조건을 걸게 되면 사전에 프리로딩이 진행되지 않고
// 로딩이 완료 된 후에 3d scene의 model과 texture의 프리로딩이 진행된다
// 그렇게 되면 3d scene의 로딩이 완료 될 때 까지 검은 화면이 나온다
{
  isResourcesLoaded && (
    <>
      <Environment preset="sunset" />
      <ScrollControls pages={20}>
        <MainCamera />
      </ScrollControls>
      <Effects />
      <Lights />
      <Sky />

      <Suspense fallback={null}>
        <Room />
      </Suspense>
    </>
  );
}

// 조건문을 제거하면 로딩시 3d scene asset의 프리로딩이 진행됌
// html로 만든 loading화면을 3d scene 앞에 위치시켜 로딩 될 때까지 가려주기
{
  <>
    <Environment preset="sunset" />
    <ScrollControls pages={20}>
      <MainCamera />
    </ScrollControls>
    <Effects />
    <Lights />
    <Sky />

    <Suspense fallback={null}>
      <Room />
    </Suspense>

    <AnimatePresence>{!isResourcesLoaded && <Loading key="loading" />}</AnimatePresence>
  </>;
}
```

## 추가 수정

- xs1 = m 문자

## 정리

- 모델링 ㅇ
- 텍스쳐 90% 완성
- 텍스쳐 사이즈 최적화 ㅇ
- UI ㅇ
- 스크롤 애니메이션 ㅇ
- 상세 페이지 ㅇ
- 호버 이벤트 ㅇ

- 쉐이더로 거울, 모니터에 효과 주기

## 쉐이더 에러가 뜸

- 많은 오브젝트를 렌더링하니까 cpu 오버헤드가 발생하는 것 같다
- drei의 merged를 사용하자

## 최적화

- 카메라가 움직일 때마다 씬이 새롭게 렌더링 된다
- 화면에 보이는 메쉬들도 전부 새롭게 렌더링 된다는 말
- 메쉬가 많으면 렌더링하는데 cpu의 연산이 늘어난다
- 메쉬가 과하게 많으면 cpu overhead가 일어남
- cpu overhead의 문제점 실행중인 앱이 끊기거나 튕김
- 최악의 경우 컴퓨터, 스마트폰이 과부하가 걸려 재실행 됌

- merged
- 메쉬에 대한 인스턴스를 생성
- 한 번의 렌더링 호출

```tsx
function Model({ url }) {
  const { nodes } = useGLTF(url);
  return (
    <Merged meshes={nodes}>
      {({ Screw, Filter, Pipe }) => (
        <>
          <Screw />
          <Filter position={[1, 2, 3]} />
          <Pipe position={[4, 5, 6]} />
        </>
      )}
    </Merged>
  );
}
```

## merged 샘플코드

```tsx
const instances = useMemo(() => {
  const CeilStorage = nodes.ceil_storage;
  CeilStorage.material = MatGenerator({ ...xlTex, envMapIntensity: 0.8 });
  const KitchenLowerStorage = nodes.kitchen_lower_storage;
  KitchenLowerStorage.material = MatGenerator({
    ...xlTex,
    metalness: 0.8,
    envMapIntensity: 1.1,
  });
  const KitchenMarble = nodes.kitchen_marble;
  KitchenMarble.material = MatGenerator({
    ...xlTex,
    envMapIntensity: 0.7,
  });
  const KitchenUpperBoard = nodes.kitchen_upper_board;
  KitchenUpperBoard.material = MatGenerator({
    ...xlTex,
    bumpScale: 3,
    emissive: colors.pink,
    emissiveIntensity: 0.8,
    envMapIntensity: 1.2,
  });
  const LivingLug = nodes.living_lug;
  LivingLug.material = MatGenerator({
    ...xlTex,
    bumpScale: 3,
    envMapIntensity: 1.3,
  });
  const Panel = nodes.panel;
  Panel.material = MatGenerator({
    ...xlTex,
    metalness: 0.8,
    envMapIntensity: 1.4,
  });

  return {
    CeilStorage,
    KitchenLowerStorage,
    KitchenMarble,
    KitchenUpperBoard,
    LivingLug,
    Panel,
  };
}, []);
<Merged meshes={instances}>
  {(instances) => {
    return (
      <group>
        <instances.CeilStorage position={[-0.515, 2.699, -0.1]} scale={1.514} />
        <instances.KitchenLowerStorage position={[4.002, 0.449, -3.834]} scale={1.951} />
        <instances.KitchenMarble position={[4.002, 0.947, -4.347]} scale={2.002} />
        <instances.KitchenUpperBoard position={[4.002, 2.1, -4.443]} scale={2.002} />
        <instances.LivingLug position={[-0.606, 0.043, 2.936]} scale={2.247} />
        <instances.Panel position={[-0.129, 1.267, 7.67]} scale={1.764} />
      </group>
    );
  }}
</Merged>;
```

## 문제

- 텍스쳐...
- 텍스쳐 사이즈가 엄청 큰 건 아님 7mb
- 하지만 문제는 텍스쳐를 로드하는 과정에서 발생
- 4k 이미지를 로드할 때 4096 _ 4096 _ ... 해서 90mb를 사용한다고 함
- 2k로 바꾸고 2k는 1k로 바꿔야함

## 4k 이미지

- wall, xl, l1, l2, l3, m1, m2, m3, m4

- roughness, metalless, emissive 줄이기
- 2k -> 1k, 1k -> 512
- 텍스쳐 사이즈 줄이니까 모바일에서도 동작함
- 좀 더 안정성을 확보하기 위해 2k 컬러의 rme는 512, 1k 컬러의 rme는 256으로
- 안쓰는 텍스쳐 날려버리기(노말, 메탈이 들어가지 않은 메탈맵)

- 문제점 수정할 것

1. 스마트폰에 text-nowrap이 다 보임. hidden 갈겨야 할 듯

- text-wrap: nowrap = ios, firefox 등에서 지원하지 않는 속성
- whitespace: nowrap으로 변경

2. 네이버는 Html 포지션의 위치가 제각각임...

## 스크롤 통합문제

- 3d와 html 스크롤을 하나로 쓰려면 lenis + framer로 사용해야함
- 메인 창의 스크롤 사이즈는 2500dvh
- 모달창 스크롤 사이즈는 300~400dvh 정도

## 이펙트컴포저 성능 문제

- 블룸을 쓰면 성능이 많이 떨어짐(버벅거림, 끊김)
- 커스텀 색보정 필터를 만들어서 장착하기
- 루전커버에서 primitive로 만든거 참고
- 해피점핑에서 DOP, 색보정 코드 참고
- 커스텀렌더패스에서 이펙트만 만들었던거 참고

## 수정할 것

- 팝업 날리기
- 팝업에 간단하게 내 소개, 프로젝트 소개하기
- 마우스 호버 좀 더 정확하게 맞추기[0]
- 모델링 색 조금 더 맞춰보기[0]
- 스크롤 변경[0]

## 수정사항

- 스크롤
  = drei useScroll => lenis + framermotion 스크롤 컨트롤로 변경

- 모델링 마우스 호버
  = 모델링 범위에 마우스 커서가 들어가서 팝업창이 나오면 마우스 커서가 범위를 나와도 팝업창이 사라지지 않는 문제가 발생
  = 팝업창을 모델링이 children으로 갖고 있기 때문에 팝업창도 범위로 포함돼서 발생
  = 팝업창을 모델링과 같은 레벨로 만들어서 범위로 포함되지 않도록 함

<!--
  const tex = useVideoTexture(url)

  <meshBasicMaterial map={tex} toneMapped={false} />
 -->
