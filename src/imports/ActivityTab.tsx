import svgPaths from "./svg-vhgwslxhrq";
import imgRectangle from "figma:asset/a8ce8778319e1c5a8b882e0a0c1d27ad82cf0ebf.png";
import { imgRectangle1 } from "./svg-otpoa";

function HomeIndicatorDark() {
  return (
    <div
      className="absolute bg-[rgba(255,255,255,0.8)] h-[5.24px] rounded-[5.24px] translate-x-[-50%] translate-y-[-50%] w-[155.104px]"
      data-name="home-indicator/dark"
      style={{ top: "calc(50% + 6.996px)", left: "calc(50% - 0.5px)" }}
    >
      <div className="relative size-full">
        <div className="h-[5.24px] w-[155.104px]" />
      </div>
    </div>
  );
}

function HomeIndicator() {
  return (
    <div
      className="absolute bottom-[0.02px] h-[35.632px] left-0 w-[393px]"
      data-name="Home Indicator"
    >
      <div className="absolute inset-0 rounded-bl-[41.92px] rounded-br-[41.92px]" />
      <HomeIndicatorDark />
    </div>
  );
}

function DarkOverlay() {
  return (
    <div
      className="absolute bottom-[0.02px] contents left-0"
      data-name="Dark overlay"
    >
      <HomeIndicator />
    </div>
  );
}

function HomeIndicatorDark1() {
  return (
    <div
      className="absolute bg-[rgba(255,255,255,0.8)] h-[5.24px] rounded-[5.24px] translate-x-[-50%] translate-y-[-50%] w-[155.104px]"
      data-name="home-indicator/dark"
      style={{ top: "calc(50% + 6.996px)", left: "calc(50% - 0.5px)" }}
    >
      <div className="relative size-full">
        <div className="h-[5.24px] w-[155.104px]" />
      </div>
    </div>
  );
}

function HomeIndicator1() {
  return (
    <div
      className="absolute bottom-0 h-[35.632px] left-0 w-[393px]"
      data-name="Home Indicator"
    >
      <div className="absolute bg-[#25304a] inset-0 rounded-bl-[41.92px] rounded-br-[41.92px]" />
      <HomeIndicatorDark1 />
    </div>
  );
}

function DarkOverlay1() {
  return (
    <div className="absolute bottom-0 contents left-0" data-name="Dark overlay">
      <HomeIndicator1 />
    </div>
  );
}

function Group1000002086() {
  return (
    <div className="absolute bottom-[5.33%] left-[8.33%] right-[8.33%] top-[4.92%]">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 21 23"
      >
        <g id="Group 1000002086">
          <path
            d={svgPaths.p2727e680}
            id="Rectangle 443529"
            stroke="var(--stroke-0, #B5B8C0)"
            strokeWidth="1.74292"
          />
          <path d={svgPaths.p6d1f80} fill="var(--fill-0, #B5B8C0)" id="ô" />
        </g>
      </svg>
    </div>
  );
}

function TabBarIcons() {
  return (
    <div className="relative shrink-0 size-[25.152px]" data-name="TabBar_Icons">
      <Group1000002086 />
      <div className="absolute inset-0" />
    </div>
  );
}

function HomeButtonContainer() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-[6.288px] items-center justify-center p-0 relative shrink-0 w-[49.256px]"
      data-name="Home button container"
    >
      <TabBarIcons />
      <div className="flex flex-col font-['BentonSans:Regular',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#b5b8c0] text-[10px] text-center text-nowrap">
        <p className="block leading-[14px] whitespace-pre" dir="auto">
          Home
        </p>
      </div>
    </div>
  );
}

function TabBarIcons1() {
  return (
    <div className="relative shrink-0 size-[25.152px]" data-name="TabBar_Icons">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 26 26"
      >
        <g id="TabBar_Icons">
          <g id="Rectangle 443737"></g>
          <g id="Vector"></g>
          <path
            d={svgPaths.p10f82280}
            fill="var(--fill-0, #EF7B7B)"
            id="Subtract"
          />
        </g>
      </svg>
    </div>
  );
}

function ActivityButtonContainer() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-[6.288px] items-center justify-start p-0 relative shrink-0 w-[49.256px]"
      data-name="Activity button container"
    >
      <TabBarIcons1 />
      <div className="flex flex-col font-['BentonSans:Regular',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#ef7b7b] text-[10px] text-center text-nowrap">
        <p className="block leading-[14px] whitespace-pre">Activity</p>
      </div>
    </div>
  );
}

function Frame1321315663() {
  return (
    <div className="absolute bottom-[8.33%] box-border content-stretch flex flex-row gap-[3.144px] items-end justify-start left-[14.58%] p-0 right-[14.58%] top-[8.33%]">
      <div className="h-[13.624px] relative rounded-[8.384px] shrink-0 w-[7.336px]">
        <div
          aria-hidden="true"
          className="absolute border-[#b5b8c0] border-[1.74px] border-solid inset-0 pointer-events-none rounded-[8.384px]"
        />
      </div>
      <div className="h-full relative rounded-[8.384px] shrink-0 w-[7.336px]">
        <div
          aria-hidden="true"
          className="absolute border-[#b5b8c0] border-[1.74px] border-solid inset-0 pointer-events-none rounded-[8.384px]"
        />
      </div>
    </div>
  );
}

function TabBarIcons2() {
  return (
    <div className="relative shrink-0 size-[25.152px]" data-name="TabBar_Icons">
      <div className="absolute inset-0" />
      <Frame1321315663 />
    </div>
  );
}

function InsightsButtonContainer() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-[6.288px] items-center justify-start p-0 relative shrink-0 w-[49.256px]"
      data-name="Insights button container"
    >
      <TabBarIcons2 />
      <div className="flex flex-col font-['BentonSans:Regular',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#b5b8c0] text-[10px] text-center text-nowrap">
        <p className="block leading-[14px] whitespace-pre">Insights</p>
      </div>
    </div>
  );
}

function Frame1321315707() {
  return (
    <div className="h-[1.677px] relative shrink-0 w-[8.447px]">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 9 2"
      >
        <g id="Frame 1321315707">
          <path
            d={svgPaths.p21cd100}
            fill="var(--fill-0, #B5B8C0)"
            id="Vector"
          />
          <path
            d={svgPaths.p390f4700}
            fill="var(--fill-0, #B5B8C0)"
            id="Rectangle 443732"
          />
        </g>
      </svg>
    </div>
  );
}

function Frame1321315709() {
  return (
    <div className="h-[1.677px] relative shrink-0 w-[8.447px]">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 9 2"
      >
        <g id="Frame 1321315709">
          <path
            d={svgPaths.p16c0be00}
            fill="var(--fill-0, #B5B8C0)"
            id="Vector"
          />
          <path
            d={svgPaths.p23a64280}
            fill="var(--fill-0, #B5B8C0)"
            id="Rectangle 443732"
          />
        </g>
      </svg>
    </div>
  );
}

function Frame1321315710() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-col gap-[1.74px] items-start justify-start p-0 translate-x-[-50%] translate-y-[-50%]"
      style={{ top: "calc(50% + 0.424px)", left: "calc(50% + 0.424px)" }}
    >
      <Frame1321315707 />
      <Frame1321315709 />
    </div>
  );
}

function Group1000002136() {
  return (
    <div className="absolute bottom-[4.17%] contents left-[4.17%] right-[4.18%] top-[4.17%]">
      <div
        className="absolute bottom-[4.17%] left-[4.17%] right-[4.18%] top-[4.17%]"
        data-name="Vector"
      >
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          role="presentation"
          viewBox="0 0 24 24"
        >
          <path
            d={svgPaths.p2a5cdb00}
            id="Vector"
            stroke="var(--stroke-0, #B5B8C0)"
            strokeWidth="1.91365"
          />
        </svg>
      </div>
      <Frame1321315710 />
    </div>
  );
}

function TabBarIcons3() {
  return (
    <div className="relative shrink-0 size-[25.152px]" data-name="TabBar_Icons">
      <Group1000002136 />
      <div className="absolute inset-0" />
    </div>
  );
}

function LearnButtonContainer() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-[6.288px] items-center justify-start p-0 relative shrink-0 w-[49.256px]"
      data-name="Learn button container"
    >
      <TabBarIcons3 />
      <div className="flex flex-col font-['BentonSans:Regular',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#b5b8c0] text-[10px] text-center text-nowrap">
        <p className="block leading-[14px] whitespace-pre">Learn</p>
      </div>
    </div>
  );
}

function Group1000002150() {
  return (
    <div className="absolute bottom-[11.11%] left-0 right-[-0.31%] top-[9.74%]">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 31 20"
      >
        <g id="Group 1000002150">
          <g id="Union">
            <mask fill="white" id="path-1-inside-1_1_4308">
              <path d={svgPaths.pc680170} />
            </mask>
            <path d={svgPaths.pc680170} fill="var(--fill-0, #EF7B7B)" />
            <path
              d={svgPaths.p13310e00}
              fill="var(--stroke-0, #B5B8C0)"
              mask="url(#path-1-inside-1_1_4308)"
            />
          </g>
          <path d={svgPaths.p3a743f00} fill="var(--fill-0, #B5B8C0)" id="ô£³" />
          <path
            d={svgPaths.p1bb41400}
            fill="var(--fill-0, #B5B8C0)"
            id="ô£³_2"
          />
        </g>
      </svg>
    </div>
  );
}

function TabBarIcons4() {
  return (
    <div
      className="h-[25.152px] relative shrink-0 w-[29.965px]"
      data-name="TabBar_Icons"
    >
      <Group1000002150 />
      <div className="absolute bottom-0 left-[6.95%] right-[9.11%] top-0" />
    </div>
  );
}

function MemoriesButtonContainer() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-[6.288px] items-center justify-start p-0 relative shrink-0"
      data-name="Memories button container"
    >
      <TabBarIcons4 />
      <div className="flex flex-col font-['BentonSans:Regular',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#b5b8c0] text-[10px] text-center text-nowrap">
        <p className="block leading-[14px] whitespace-pre">Memories</p>
      </div>
    </div>
  );
}

function NavigationContainer() {
  return (
    <div
      className="absolute bg-[#25304a] bottom-[29.34px] box-border content-stretch flex flex-row gap-[25.152px] h-[58.688px] items-center justify-center left-0 px-[33.536px] py-0 w-[393px]"
      data-name="Navigation container"
    >
      <HomeButtonContainer />
      <ActivityButtonContainer />
      <InsightsButtonContainer />
      <LearnButtonContainer />
      <MemoriesButtonContainer />
    </div>
  );
}

function NavigationBar() {
  return (
    <div
      className="absolute bottom-[29.34px] contents left-0"
      data-name="Navigation bar"
    >
      <NavigationContainer />
    </div>
  );
}

function Home() {
  return (
    <div
      className="absolute bottom-[0.02px] h-[88.032px] left-0 w-[393px]"
      data-name="Home"
    >
      <DarkOverlay1 />
      <NavigationBar />
    </div>
  );
}

function IcUtility24IcMenu() {
  return (
    <div className="relative shrink-0 size-6" data-name="ic_utility_24/ic_menu">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 24 24"
      >
        <g id="ic_utility_24/ic_menu">
          <path
            d={svgPaths.p38586800}
            fill="var(--fill-0, white)"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function StartIcon() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2 items-start justify-start pl-0 pr-4 py-0 relative shrink-0 w-[62px]"
      data-name="Start Icon"
    >
      <IcUtility24IcMenu />
    </div>
  );
}

function Title() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2 items-start justify-center p-0 relative shrink-0 w-[190px]"
      data-name="Title"
    >
      <div className="flex flex-col font-['BentonSans:Medium',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#ffffff] text-[16px] text-center text-nowrap">
        <p className="block leading-[22px] whitespace-pre">Activity</p>
      </div>
    </div>
  );
}

function Frame2640() {
  return (
    <div className="box-border content-stretch flex flex-col gap-0.5 items-center justify-start p-0 relative shrink-0">
      <Title />
    </div>
  );
}

function EndIcon() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-4 items-center justify-end p-0 shrink-0 w-[62px]"
      data-name="End Icon"
    />
  );
}

function TopBarsIOs() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-row items-start justify-between left-0 px-4 py-2.5 top-[57.49px] w-[393px]"
      data-name="Top-bars iOS"
    >
      <StartIcon />
      <Frame2640 />
      <EndIcon />
    </div>
  );
}

function WelcomeMessage() {
  return (
    <div
      className="absolute h-[78px] left-0 top-0 w-[393px]"
      data-name="Welcome message"
    >
      <div className="absolute flex inset-0 items-center justify-center">
        <div className="flex-none h-[78px] rotate-[180deg] w-[393px]">
          <div className="bg-gradient-to-b from-[#00000000] opacity-80 size-full to-[#000000cc] to-[151.96%]" />
        </div>
      </div>
    </div>
  );
}

function RemoteBlack24Dp2() {
  return (
    <div className="relative shrink-0 size-4" data-name="remote_black_24dp 2">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 16 16"
      >
        <g clipPath="url(#clip0_1_4214)" id="remote_black_24dp 2">
          <g id="Vector"></g>
          <circle
            cx="8"
            cy="8"
            fill="var(--fill-0, #EF7B7B)"
            id="Ellipse 49"
            r="6.66667"
          />
        </g>
        <defs>
          <clipPath id="clip0_1_4214">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame474() {
  return (
    <div className="box-border content-stretch flex flex-row gap-2.5 items-start justify-start pb-0 pt-px px-0 relative shrink-0">
      <div className="flex flex-col font-['BentonSans:Medium',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#ffffff] text-[14px] text-left text-nowrap">
        <p className="block leading-[19px] whitespace-pre">LIVE</p>
      </div>
    </div>
  );
}

function Group197() {
  return (
    <div className="absolute contents inset-1/4">
      <div className="absolute bg-[#ffffff] bottom-1/4 left-1/4 right-[62.5%] rounded-[0.5px] top-1/2" />
      <div className="absolute bg-[#ffffff] bottom-1/4 left-[43.75%] opacity-50 right-[43.75%] rounded-[0.5px] top-[37.5%]" />
      <div className="absolute bg-[#ffffff] bottom-1/4 left-[62.5%] opacity-50 right-1/4 rounded-[0.5px] top-1/4" />
    </div>
  );
}

function Low() {
  return (
    <div className="overflow-clip relative shrink-0 size-6" data-name="low">
      <Group197 />
    </div>
  );
}

function Frame476() {
  return (
    <div className="box-border content-stretch flex flex-row items-center justify-start p-0 relative shrink-0">
      <Frame474 />
      <Low />
    </div>
  );
}

function Frame475() {
  return (
    <div className="box-border content-stretch flex flex-row gap-1 items-center justify-start p-0 relative shrink-0">
      <RemoteBlack24Dp2 />
      <Frame476 />
    </div>
  );
}

function IcUtility24IcTemp() {
  return (
    <div className="relative shrink-0 size-4" data-name="ic_utility_24/ic_temp">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 16 16"
      >
        <g id="ic_utility_24/ic_temp" opacity="0.5">
          <path
            d={svgPaths.p3dc53500}
            fill="var(--fill-0, white)"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function Frame226() {
  return (
    <div className="box-border content-stretch flex flex-row gap-2.5 items-start justify-start pb-0 pt-px px-0 relative shrink-0">
      <div className="flex flex-col font-['BentonSans:Medium',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#ffffff] text-[14px] text-left text-nowrap">
        <p className="block leading-[19px] whitespace-pre">73ºF</p>
      </div>
    </div>
  );
}

function Frame227() {
  return (
    <div className="box-border content-stretch flex flex-row items-center justify-start pl-0 pr-1 py-0 relative shrink-0">
      <IcUtility24IcTemp />
      <Frame226 />
    </div>
  );
}

function Group2339() {
  return (
    <div className="absolute bottom-[15.42%] left-1/4 right-1/4 top-[15.83%]">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 8 11"
      >
        <g id="Group 2339">
          <path
            d={svgPaths.p25afcc00}
            fill="var(--fill-0, white)"
            id="Subtract"
          />
        </g>
      </svg>
    </div>
  );
}

function IcUtility24IcDrop() {
  return (
    <div
      className="opacity-50 overflow-clip relative shrink-0 size-4"
      data-name="ic_utility_24/ic_drop"
    >
      <Group2339 />
    </div>
  );
}

function Frame228() {
  return (
    <div className="box-border content-stretch flex flex-row gap-2.5 items-start justify-start p-0 relative shrink-0">
      <div className="flex flex-col font-['BentonSans:Medium',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#ffffff] text-[14px] text-left text-nowrap">
        <p className="block leading-[19px] whitespace-pre">40%</p>
      </div>
    </div>
  );
}

function Frame473() {
  return (
    <div className="box-border content-stretch flex flex-col gap-2.5 items-start justify-start pb-0 pt-px px-0 relative shrink-0">
      <Frame228 />
    </div>
  );
}

function Frame229() {
  return (
    <div className="box-border content-stretch flex flex-row items-center justify-start p-0 relative shrink-0">
      <IcUtility24IcDrop />
      <Frame473 />
    </div>
  );
}

function Frame477() {
  return (
    <div className="box-border content-stretch flex flex-row gap-0.5 items-center justify-start p-0 relative shrink-0">
      <Frame227 />
      <div className="bg-[#ffffff] opacity-50 rounded-[1px] shrink-0 size-0.5" />
      <Frame229 />
    </div>
  );
}

function Frame478() {
  return (
    <div className="box-border content-stretch flex flex-row gap-0.5 items-center justify-start p-0 relative shrink-0">
      <div className="bg-[#ffffff] opacity-50 rounded-[1px] shrink-0 size-0.5" />
      <Frame477 />
    </div>
  );
}

function Frame479() {
  return (
    <div className="box-border content-stretch flex flex-row gap-1 items-center justify-start p-0 relative shrink-0">
      <Frame475 />
      <Frame478 />
    </div>
  );
}

function Group1496() {
  return (
    <div className="absolute bottom-[13.07%] left-[11.34%] right-[10.42%] top-[11.34%]">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 19 19"
      >
        <g id="Group 1496">
          <path
            clipRule="evenodd"
            d={svgPaths.p2a913d00}
            fill="var(--fill-0, white)"
            fillRule="evenodd"
            id="Rectangle 1377 (Stroke)"
          />
          <rect
            fill="var(--fill-0, white)"
            height="7.72707"
            id="Rectangle 1378"
            rx="1.19208"
            stroke="var(--stroke-0, white)"
            strokeWidth="1.03659"
            width="9.66519"
            x="8.59381"
            y="9.89523"
          />
        </g>
      </svg>
    </div>
  );
}

function Group1497() {
  return (
    <div className="absolute bottom-[13.07%] contents left-[11.34%] right-[10.42%] top-[11.34%]">
      <Group1496 />
    </div>
  );
}

function IcUtility24IcPictureInPicture() {
  return (
    <div
      className="overflow-clip relative shrink-0 size-6"
      data-name="ic_utility_24/ic_picture_in_picture"
    >
      <Group1497 />
    </div>
  );
}

function IcUtility24IcFullScreen() {
  return (
    <div
      className="relative shrink-0 size-6"
      data-name="ic_utility_24/ic_full_screen"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 24 24"
      >
        <g id="ic_utility_24/ic_full_screen">
          <path d={svgPaths.p22ca7c00} fill="var(--fill-0, white)" id="Union" />
          <path
            d={svgPaths.p2abea780}
            id="Vector"
            stroke="var(--stroke-0, white)"
            strokeLinecap="round"
            strokeWidth="1.5"
          />
          <path
            d={svgPaths.p23369040}
            id="Vector_2"
            stroke="var(--stroke-0, white)"
            strokeLinecap="round"
            strokeWidth="1.5"
          />
        </g>
      </svg>
    </div>
  );
}

function Frame2340() {
  return (
    <div className="box-border content-stretch flex flex-row gap-4 items-start justify-end p-0 relative shrink-0">
      <IcUtility24IcPictureInPicture />
      <IcUtility24IcFullScreen />
    </div>
  );
}

function Frame2323() {
  return (
    <div className="basis-0 box-border content-stretch flex flex-row grow items-center justify-between min-h-px min-w-px p-0 relative shrink-0">
      <Frame479 />
      <Frame2340 />
    </div>
  );
}

function Frame480() {
  return (
    <div className="box-border content-stretch flex flex-row gap-1 items-center justify-start p-0 relative shrink-0 w-full">
      <Frame2323 />
    </div>
  );
}

function Frame481() {
  return (
    <div className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0 w-full">
      <div className="font-['BentonSans:Regular',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#ffffff] text-[16px] text-left w-full">
        <p className="block leading-[22px]" dir="auto">
          Hey dad, I woke up 20 minutes ago
        </p>
      </div>
    </div>
  );
}

function WelcomeMsg() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-1 items-start justify-start p-0 relative shrink-0 w-[359.464px]"
      data-name="WelcomeMSG"
    >
      <Frame480 />
      <Frame481 />
    </div>
  );
}

function WelcomeMessageContainer() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-col gap-2.5 h-[78px] items-start justify-start left-0 px-[17px] py-3 top-[101px] w-[393px]"
      data-name="Welcome message container"
    >
      <WelcomeMessage />
      <WelcomeMsg />
    </div>
  );
}

function Group() {
  return (
    <div
      className="absolute bottom-[50.14%] left-[102.32%] right-[-6.37%] top-[20%]"
      data-name="Group"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 18 18"
      >
        <g id="Group">
          <path
            d={svgPaths.p3eb99700}
            fill="var(--fill-0, #EF7B7B)"
            id="Oval-70"
          />
          <path
            d={svgPaths.p3ea45800}
            fill="var(--fill-0, #EF7B7B)"
            id="Rectangle-197"
          />
          <path
            d={svgPaths.p1520ae00}
            fill="var(--fill-0, #EF7B7B)"
            id="Rectangle-197_2"
          />
          <path
            clipRule="evenodd"
            d={svgPaths.p155f8100}
            fill="var(--fill-0, #EF7B7B)"
            fillRule="evenodd"
            id="Rectangle-197_3"
          />
          <path
            d={svgPaths.pbf13100}
            fill="var(--fill-0, #EF7B7B)"
            id="Rectangle-197_4"
          />
          <path
            clipRule="evenodd"
            d={svgPaths.p19579d80}
            fill="var(--fill-0, #EF7B7B)"
            fillRule="evenodd"
            id="Rectangle-197_5"
          />
          <path
            clipRule="evenodd"
            d={svgPaths.p3d8f3890}
            fill="var(--fill-0, #EF7B7B)"
            fillRule="evenodd"
            id="Rectangle-197_6"
          />
          <path
            clipRule="evenodd"
            d={svgPaths.p20326800}
            fill="var(--fill-0, #EF7B7B)"
            fillRule="evenodd"
            id="Rectangle-197_7"
          />
          <path
            clipRule="evenodd"
            d={svgPaths.pb200300}
            fill="var(--fill-0, #EF7B7B)"
            fillRule="evenodd"
            id="Rectangle-197_8"
          />
        </g>
      </svg>
    </div>
  );
}

function Group3() {
  return (
    <div
      className="absolute bottom-[50.14%] contents left-[102.32%] right-[-6.37%] top-[20%]"
      data-name="Group"
    >
      <Group />
    </div>
  );
}

function Group4() {
  return (
    <div
      className="absolute bottom-[50.14%] contents left-[102.32%] right-[-6.37%] top-[20%]"
      data-name="Group"
    >
      <Group3 />
    </div>
  );
}

function Moon1() {
  return (
    <div
      className="absolute bottom-[51%] left-[69.38%] right-[27.41%] top-[21%]"
      data-name="moon"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 14 17"
      >
        <g id="moon">
          <path
            clipRule="evenodd"
            d={svgPaths.p1c832270}
            fill="var(--fill-0, #EF7B7B)"
            fillRule="evenodd"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function Group5() {
  return (
    <div
      className="absolute bottom-[51%] contents left-[69.38%] right-[27.41%] top-[21%]"
      data-name="Group"
    >
      <Moon1 />
    </div>
  );
}

function SummariesDayNightActive() {
  return (
    <div
      className="absolute bottom-[1%] contents left-[52.17%] right-[-22.36%] top-[1%]"
      data-name="Summaries_day_night-/-Active"
    >
      <Group4 />
      <Group5 />
      <div
        className="absolute bottom-[1%] left-[52.17%] right-[-22.36%] top-[1%]"
        data-name="Rectangle-21"
      >
        <div className="absolute bottom-[-1.02%] left-[-0.19%] right-[-0.19%] top-[-1.02%]">
          <svg
            className="block size-full"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 303 59"
          >
            <path
              d={svgPaths.p31c6e900}
              id="Rectangle-21"
              opacity="0.3"
              stroke="var(--stroke-0, white)"
              strokeWidth="1.16"
            />
          </svg>
        </div>
      </div>
      <div
        className="absolute bottom-[24%] left-[87.26%] right-[12.74%] top-[26%]"
        data-name="Line-2"
      >
        <div className="absolute bottom-[-2%] left-[-0.58px] right-[-0.58px] top-[-2%]">
          <svg
            className="block size-full"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 2 31"
          >
            <path
              d="M1 1V30"
              id="Line-2"
              opacity="0.3"
              stroke="var(--stroke-0, white)"
              strokeLinecap="square"
              strokeWidth="1.16"
            />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-[16%] font-['BentonSans:Light',_sans-serif] leading-[0] left-[92.53%] not-italic right-[-15.83%] text-[#ffffff] text-[11.6px] text-left text-nowrap top-[56%]">
        <p className="block leading-[normal] whitespace-pre">
          10:10 AM - 1:30 PM
        </p>
      </div>
      <div className="absolute bottom-[14%] font-['BentonSans:Light',_sans-serif] leading-[0] left-[59.12%] not-italic right-[18.39%] text-[#ffffff] text-[11.6px] text-left text-nowrap top-[58%]">
        <p className="block leading-[normal] whitespace-pre">
          7:58 PM - 6:30 AM
        </p>
      </div>
    </div>
  );
}

function CombinedShape() {
  return (
    <div
      className="absolute bottom-[49.88%] left-[35.23%] right-[60.42%] top-[18%]"
      data-name="Combined-Shape"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 19 19"
      >
        <g id="Combined-Shape">
          <path
            clipRule="evenodd"
            d={svgPaths.p23d9fa80}
            fill="var(--fill-0, white)"
            fillRule="evenodd"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function Rectangle163() {
  return (
    <div
      className="absolute bottom-0 left-[26.02%] right-[51.22%] top-0"
      data-name="Rectangle-163"
    >
      <div className="absolute bottom-[-10%] left-[-5.95%] right-[-5.95%] top-[-10%]">
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 110 70"
        >
          <g id="Rectangle-163" opacity="0.3">
            <g filter="url(#filter0_f_1_4174)" id="Vector" opacity="0.3">
              <path d={svgPaths.p20135380} fill="var(--fill-0, black)" />
            </g>
            <path
              d={svgPaths.p244c9900}
              id="Vector_2"
              opacity="0.3"
              stroke="var(--stroke-0, white)"
              strokeWidth="1.16"
            />
          </g>
          <defs>
            <filter
              colorInterpolationFilters="sRGB"
              filterUnits="userSpaceOnUse"
              height="69.6"
              id="filter0_f_1_4174"
              width="109.04"
              x="0.200317"
              y="0.199999"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend
                in="SourceGraphic"
                in2="BackgroundImageFix"
                mode="normal"
                result="shape"
              />
              <feGaussianBlur
                result="effect1_foregroundBlur_1_4174"
                stdDeviation="2.9"
              />
            </filter>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function Group6() {
  return (
    <div
      className="absolute bottom-0 contents left-[26.02%] right-[51.22%] top-0"
      data-name="Group"
    >
      <CombinedShape />
      <Rectangle163 />
      <div className="absolute bottom-[14%] font-['BentonSans:Light',_sans-serif] leading-[0] left-[32.11%] not-italic right-[57.05%] text-[#ffffff] text-[11.6px] text-left text-nowrap top-[58%]">
        <p className="block leading-[normal] whitespace-pre">Measure</p>
      </div>
    </div>
  );
}

function Rectangle164() {
  return (
    <div
      className="absolute bottom-0 left-0 right-[77.24%] top-0"
      data-name="Rectangle-163"
    >
      <div className="absolute bottom-[-10%] left-[-5.95%] right-[-5.95%] top-[-10%]">
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 110 70"
        >
          <g id="Rectangle-163" opacity="0.3">
            <g filter="url(#filter0_f_1_4168)" id="Vector" opacity="0.3">
              <path d={svgPaths.p7a629c0} fill="var(--fill-0, black)" />
            </g>
            <path
              d={svgPaths.p39a38880}
              id="Vector_2"
              opacity="0.3"
              stroke="var(--stroke-0, white)"
              strokeWidth="1.16"
            />
          </g>
          <defs>
            <filter
              colorInterpolationFilters="sRGB"
              filterUnits="userSpaceOnUse"
              height="69.6"
              id="filter0_f_1_4168"
              width="109.04"
              x="0.200042"
              y="0.199999"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend
                in="SourceGraphic"
                in2="BackgroundImageFix"
                mode="normal"
                result="shape"
              />
              <feGaussianBlur
                result="effect1_foregroundBlur_1_4168"
                stdDeviation="2.9"
              />
            </filter>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function Mask() {
  return (
    <div
      className="absolute bottom-[52.13%] left-[8.4%] right-[85.64%] top-[20%]"
      data-name="Mask"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 26 17"
      >
        <g id="Mask">
          <path
            clipRule="evenodd"
            d={svgPaths.p3438c30}
            fill="var(--fill-0, white)"
            fillRule="evenodd"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function Group7() {
  return (
    <div
      className="absolute bottom-[52.13%] contents left-[8.4%] right-[85.64%] top-[20%]"
      data-name="Group"
    >
      <Mask />
    </div>
  );
}

function BreathStartNeutral() {
  return (
    <div
      className="absolute bottom-0 contents left-0 right-[77.24%] top-0"
      data-name="Breath_Start-/-Neutral"
    >
      <Rectangle164 />
      <div className="absolute bottom-[14%] font-['BentonSans:Light',_sans-serif] leading-[0] left-[8.18%] not-italic right-[85.58%] text-[#ffffff] text-[11.6px] text-left text-nowrap top-[58%]">
        <p className="block leading-[normal] whitespace-pre">Start</p>
      </div>
      <Group7 />
    </div>
  );
}

function MeasureNeutralBreathStartNeutralSummariesDayNightActive() {
  return (
    <div
      className="absolute bottom-0 contents left-0 right-[-22.36%] top-0"
      data-name="Measure-/-Neutral-+-Breath_Start-/-Neutral-+-Summaries_day_night-/-Active"
    >
      <SummariesDayNightActive />
      <Group6 />
      <BreathStartNeutral />
    </div>
  );
}

function MeasureBar() {
  return (
    <div
      className="absolute h-[58px] top-[675px] translate-x-[-50%] w-[428.04px]"
      data-name="Measure bar"
      style={{ left: "calc(50% + 50.52px)" }}
    >
      <MeasureNeutralBreathStartNeutralSummariesDayNightActive />
    </div>
  );
}

function LilyPic() {
  return (
    <div
      className="absolute bottom-0 contents left-[-0.69%] right-0 top-[-1.04%]"
      data-name="lily_pic"
    >
      <div
        className="absolute bg-no-repeat bg-size-[100%_100%] bg-top-left bottom-0 left-[-0.69%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[2.427px_4.854px] mask-size-[349.5px_466px] right-0 top-[-1.04%]"
        data-name="Rectangle"
        style={{
          backgroundImage: `url('${imgRectangle}')`,
          maskImage: `url('${imgRectangle1}')`,
        }}
      />
    </div>
  );
}

function Group8() {
  return (
    <div
      className="absolute bottom-0 contents left-[-0.69%] right-0 top-[-1.04%]"
      data-name="Group"
    >
      <LilyPic />
    </div>
  );
}

function LilyPic1() {
  return (
    <div className="absolute contents inset-0" data-name="lily_pic">
      <div
        className="absolute inset-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px] mask-size-[349.5px_466px]"
        data-name="Mask"
        style={{ maskImage: `url('${imgRectangle1}')` }}
      >
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 350 466"
        >
          <path
            d={svgPaths.p173be780}
            fill="var(--fill-0, #D8D8D8)"
            id="Mask"
          />
        </svg>
      </div>
      <Group8 />
      <div className="absolute bottom-[-0.69%] flex items-center justify-center left-0 right-[-0.69%] top-[62.36%]">
        <div className="flex-none h-[178.644px] scale-y-[-100%] w-[351.927px]">
          <div
            className="mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_-290.592px] mask-size-[349.5px_466px] relative size-full"
            data-name="Rectangle-323"
            style={{ maskImage: `url('${imgRectangle1}')` }}
          >
            <svg
              className="block size-full"
              fill="none"
              preserveAspectRatio="none"
              viewBox="0 0 352 179"
            >
              <path
                d={svgPaths.p21e05d00}
                fill="url(#paint0_linear_1_4163)"
                id="Rectangle-323"
                opacity="0.554082"
              />
              <defs>
                <linearGradient
                  gradientUnits="userSpaceOnUse"
                  id="paint0_linear_1_4163"
                  x1="175.964"
                  x2="175.964"
                  y1="33.2523"
                  y2="178.644"
                >
                  <stop />
                  <stop offset="1" stopOpacity="0" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>
      </div>
      <div
        className="absolute bottom-[74.69%] left-[-0.17%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0.606px_0.598px] mask-size-[349.5px_466px] right-[-0.52%] top-[-0.13%]"
        data-name="Rectangle-323"
        style={{ maskImage: `url('${imgRectangle1}')` }}
      >
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 352 119"
        >
          <path
            clipRule="evenodd"
            d={svgPaths.pfc7d000}
            fill="url(#paint0_linear_1_4172)"
            fillRule="evenodd"
            id="Rectangle-323"
            opacity="0.3"
          />
          <defs>
            <linearGradient
              gradientUnits="userSpaceOnUse"
              id="paint0_linear_1_4172"
              x1="175.964"
              x2="175.964"
              y1="0"
              y2="118.531"
            >
              <stop />
              <stop offset="1" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function NanitLogo() {
  return (
    <div
      className="absolute bottom-[13.93%] left-[86.46%] right-[3.7%] top-[83.46%]"
      data-name="nanit-logo"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 35 13"
      >
        <g id="nanit-logo" opacity="0.642432">
          <path
            clipRule="evenodd"
            d={svgPaths.p21374980}
            fill="var(--fill-0, white)"
            fillRule="evenodd"
            id="nanit_logotype_small"
            opacity="0.642432"
          />
        </g>
      </svg>
    </div>
  );
}

function MainImage() {
  return (
    <div className="absolute contents inset-0" data-name="main-image">
      <LilyPic1 />
      <NanitLogo />
    </div>
  );
}

function Layer00Member0Member0Member0Member1Member0Fill() {
  return (
    <div
      className="absolute bottom-[1.64%] left-[82.88%] right-[7.74%] top-[91.33%]"
      data-name="Layer0_0_MEMBER_0_MEMBER_0_MEMBER_0_MEMBER_1_MEMBER_0_FILL"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 33 33"
      >
        <g id="Layer0_0_MEMBER_0_MEMBER_0_MEMBER_0_MEMBER_1_MEMBER_0_FILL">
          <g id="Shape"></g>
          <g id="Group">
            <path
              clipRule="evenodd"
              d={svgPaths.p1f670f00}
              fill="var(--fill-0, white)"
              fillRule="evenodd"
              id="Shape_2"
            />
            <path
              clipRule="evenodd"
              d={svgPaths.p3c3b3a00}
              fill="var(--fill-0, white)"
              fillRule="evenodd"
              id="Shape_3"
            />
            <path
              clipRule="evenodd"
              d={svgPaths.p18a3c800}
              fillRule="evenodd"
              id="Shape_4"
              stroke="var(--stroke-0, white)"
              strokeWidth="1.41984"
            />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Group10() {
  return (
    <div
      className="absolute bottom-[1.64%] contents left-[82.88%] right-[7.74%] top-[91.33%]"
      data-name="Group"
    >
      <Layer00Member0Member0Member0Member1Member0Fill />
    </div>
  );
}

function Page1() {
  return (
    <div
      className="absolute bottom-[2.75%] left-[57.27%] right-[32.13%] top-[92.44%]"
      data-name="Page-1"
    >
      <div className="absolute bottom-[-2.44%] left-[-1.47%] right-[-1.47%] top-[-2.44%]">
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 39 24"
        >
          <g id="Page-1">
            <path
              clipRule="evenodd"
              d={svgPaths.p17596400}
              fill="var(--fill-0, white)"
              fillRule="evenodd"
              id="Fill-1"
            />
            <g id="Group">
              <path
                d={svgPaths.p388eef00}
                id="Stroke-3"
                stroke="var(--stroke-0, white)"
                strokeLinecap="round"
                strokeWidth="1.09219"
              />
              <path
                d={svgPaths.p25466600}
                id="Stroke-5"
                stroke="var(--stroke-0, white)"
                strokeLinecap="round"
                strokeWidth="1.09219"
              />
              <path
                d={svgPaths.p226a100}
                id="Stroke-7"
                stroke="var(--stroke-0, white)"
                strokeLinecap="round"
                strokeWidth="1.09219"
              />
              <path
                d={svgPaths.p178a4a80}
                id="Stroke-9"
                stroke="var(--stroke-0, white)"
                strokeLinecap="round"
                strokeWidth="1.09219"
              />
            </g>
          </g>
        </svg>
      </div>
    </div>
  );
}

function Group12() {
  return (
    <div
      className="absolute bottom-[2.75%] contents left-[57.27%] right-[32.13%] top-[92.44%]"
      data-name="Group"
    >
      <Page1 />
    </div>
  );
}

function LiveMicrophone() {
  return (
    <div
      className="absolute bottom-[0.93%] left-[32.1%] right-[56.79%] top-[90.74%]"
      data-name="Live-/-microphone"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 39 39"
      >
        <g id="Live-/-microphone">
          <g id="Rectangle"></g>
          <g id="mic">
            <path
              d={svgPaths.p131fb780}
              fill="var(--fill-0, white)"
              id="Line-2"
            />
            <path
              d={svgPaths.p30716c00}
              fill="var(--fill-0, white)"
              id="Line-3"
            />
            <path
              d={svgPaths.p13a49080}
              fill="var(--fill-0, white)"
              id="Rectangle-2"
            />
            <path
              d={svgPaths.p3b2f0af0}
              fill="var(--fill-0, white)"
              id="Stroke-1"
            />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Group13() {
  return (
    <div
      className="absolute bottom-[0.93%] contents left-[32.1%] right-[56.79%] top-[90.74%]"
      data-name="Group"
    >
      <LiveMicrophone />
    </div>
  );
}

function IcPhotoWhite() {
  return (
    <div
      className="absolute bottom-[1.04%] left-[6.94%] right-[81.94%] top-[90.63%]"
      data-name="ic_photo_white"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 39 39"
      >
        <g id="ic_photo_white">
          <path
            d={svgPaths.p31324000}
            fill="var(--fill-0, #818181)"
            fillOpacity="0.0122849"
            id="Rectangle-149"
            opacity="0"
          />
          <path
            clipRule="evenodd"
            d={svgPaths.p29d13b00}
            fill="var(--fill-0, white)"
            fillRule="evenodd"
            id="Combined-Shape"
          />
        </g>
      </svg>
    </div>
  );
}

function LiveButtonsBar90() {
  return (
    <div
      className="absolute bottom-0 contents left-0 right-0 top-[89.58%]"
      data-name="Live-buttons-bar-90%-"
    >
      <div
        className="absolute bottom-0 left-0 right-0 top-[89.58%]"
        data-name="Path"
      >
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 350 49"
        >
          <path
            clipRule="evenodd"
            d={svgPaths.p2c3a800}
            fill="var(--fill-0, #051632)"
            fillRule="evenodd"
            id="Path"
            opacity="0.3"
          />
        </svg>
      </div>
      <Group10 />
      <Group12 />
      <Group13 />
      <IcPhotoWhite />
    </div>
  );
}

function LiveButtonsBar() {
  return (
    <div
      className="absolute h-[466px] left-5 top-[179px] w-[349.5px]"
      data-name="Live-buttons-bar"
    >
      <MainImage />
      <LiveButtonsBar90 />
    </div>
  );
}

function Lens() {
  return (
    <div
      className="absolute left-[109.52px] size-[14.672px] top-[9.43px]"
      data-name="Lens"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 15 15"
      >
        <g id="Lens">
          <circle
            cx="7.336"
            cy="7.336"
            fill="var(--fill-0, #06092E)"
            id="Ellipse 11"
            r="6.77169"
            stroke="var(--stroke-0, #1C1932)"
            strokeWidth="1.12862"
          />
          <g filter="url(#filter0_f_1_4257)" id="Ellipse 12">
            <circle
              cx="7.336"
              cy="4.51473"
              fill="var(--fill-0, #686D95)"
              r="1.69292"
            />
          </g>
          <g filter="url(#filter1_f_1_4257)" id="Ellipse 13">
            <circle
              cx="7.61827"
              cy="10.4397"
              fill="var(--fill-0, #52567C)"
              r="1.41077"
            />
          </g>
        </g>
        <defs>
          <filter
            colorInterpolationFilters="sRGB"
            filterUnits="userSpaceOnUse"
            height="7.90031"
            id="filter0_f_1_4257"
            width="7.90031"
            x="3.38584"
            y="0.564574"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend
              in="SourceGraphic"
              in2="BackgroundImageFix"
              mode="normal"
              result="shape"
            />
            <feGaussianBlur
              result="effect1_foregroundBlur_1_4257"
              stdDeviation="1.12862"
            />
          </filter>
          <filter
            colorInterpolationFilters="sRGB"
            filterUnits="userSpaceOnUse"
            height="7.336"
            id="filter1_f_1_4257"
            width="7.336"
            x="3.95027"
            y="6.77172"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend
              in="SourceGraphic"
              in2="BackgroundImageFix"
              mode="normal"
              result="shape"
            />
            <feGaussianBlur
              result="effect1_foregroundBlur_1_4257"
              stdDeviation="1.12862"
            />
          </filter>
        </defs>
      </svg>
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute h-[6.817px] left-[3.98px] top-[4.54px] w-[2.272px]">
      <div className="absolute bottom-[-25%] left-[-75%] right-[-75%] top-[-25%]">
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 6 11"
        >
          <g id="Group 1">
            <g filter="url(#filter0_f_1_4205)" id="Vector 57">
              <path d={svgPaths.p26842d00} fill="var(--fill-0, #50A99A)" />
            </g>
            <g filter="url(#filter1_f_1_4205)" id="Vector 59">
              <path d={svgPaths.p3b2acd00} fill="var(--fill-0, #50A99A)" />
            </g>
            <g filter="url(#filter2_f_1_4205)" id="Vector 58" opacity="0.4">
              <path d={svgPaths.p3b93fb00} fill="var(--fill-0, #D0FFF7)" />
            </g>
          </g>
          <defs>
            <filter
              colorInterpolationFilters="sRGB"
              filterUnits="userSpaceOnUse"
              height="10.2259"
              id="filter0_f_1_4205"
              width="5.68105"
              x="0.295685"
              y="0.295684"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend
                in="SourceGraphic"
                in2="BackgroundImageFix"
                mode="normal"
                result="shape"
              />
              <feGaussianBlur
                result="effect1_foregroundBlur_1_4205"
                stdDeviation="0.852158"
              />
            </filter>
            <filter
              colorInterpolationFilters="sRGB"
              filterUnits="userSpaceOnUse"
              height="7.07946"
              id="filter1_f_1_4205"
              width="4.54484"
              x="0.86404"
              y="1.86891"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend
                in="SourceGraphic"
                in2="BackgroundImageFix"
                mode="normal"
                result="shape"
              />
              <feGaussianBlur
                result="effect1_foregroundBlur_1_4205"
                stdDeviation="0.852158"
              />
            </filter>
            <filter
              colorInterpolationFilters="sRGB"
              filterUnits="userSpaceOnUse"
              height="6.31655"
              id="filter2_f_1_4205"
              width="3.54796"
              x="1.82437"
              y="1.8452"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend
                in="SourceGraphic"
                in2="BackgroundImageFix"
                mode="normal"
                result="shape"
              />
              <feGaussianBlur
                result="effect1_foregroundBlur_1_4205"
                stdDeviation="0.568105"
              />
            </filter>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function Group2() {
  return (
    <div className="h-[6.817px] relative w-[2.272px]">
      <div className="absolute bottom-[-25%] left-[-74.98%] right-[-75.02%] top-[-25%]">
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 6 11"
        >
          <g id="Group 2">
            <g filter="url(#filter0_f_1_4282)" id="Vector 57">
              <path d={svgPaths.p3bd1b00} fill="var(--fill-0, #3E518C)" />
            </g>
            <g filter="url(#filter1_f_1_4282)" id="Vector 59">
              <path d={svgPaths.p2e604f00} fill="var(--fill-0, #26408D)" />
            </g>
            <g filter="url(#filter2_f_1_4282)" id="Vector 58" opacity="0.5">
              <path d={svgPaths.p7016500} fill="var(--fill-0, #0D308C)" />
            </g>
          </g>
          <defs>
            <filter
              colorInterpolationFilters="sRGB"
              filterUnits="userSpaceOnUse"
              height="10.2259"
              id="filter0_f_1_4282"
              width="5.68105"
              x="0.296149"
              y="0.295706"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend
                in="SourceGraphic"
                in2="BackgroundImageFix"
                mode="normal"
                result="shape"
              />
              <feGaussianBlur
                result="effect1_foregroundBlur_1_4282"
                stdDeviation="0.852158"
              />
            </filter>
            <filter
              colorInterpolationFilters="sRGB"
              filterUnits="userSpaceOnUse"
              height="7.07946"
              id="filter1_f_1_4282"
              width="4.54484"
              x="0.864339"
              y="1.86891"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend
                in="SourceGraphic"
                in2="BackgroundImageFix"
                mode="normal"
                result="shape"
              />
              <feGaussianBlur
                result="effect1_foregroundBlur_1_4282"
                stdDeviation="0.852158"
              />
            </filter>
            <filter
              colorInterpolationFilters="sRGB"
              filterUnits="userSpaceOnUse"
              height="6.31655"
              id="filter2_f_1_4282"
              width="3.54796"
              x="1.82467"
              y="1.8452"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend
                in="SourceGraphic"
                in2="BackgroundImageFix"
                mode="normal"
                result="shape"
              />
              <feGaussianBlur
                result="effect1_foregroundBlur_1_4282"
                stdDeviation="0.568105"
              />
            </filter>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function Lens1() {
  return (
    <div
      className="absolute bg-[#121212] left-[82.59px] opacity-75 rounded-[567.537px] size-[15.907px] top-[8.56px]"
      data-name="lens1"
    >
      <div
        aria-hidden="true"
        className="absolute border-[#0e0e0e] border-[0.612px] border-solid inset-0 pointer-events-none rounded-[567.537px]"
      />
      <Group1 />
      <div className="absolute flex h-[6.817px] items-center justify-center left-[9.66px] top-[4.54px] w-[2.272px]">
        <div className="flex-none rotate-[180deg] scale-y-[-100%]">
          <Group2 />
        </div>
      </div>
    </div>
  );
}

function Group14() {
  return (
    <div className="absolute h-[8.59px] left-[2.15px] top-[2.86px] w-[2.863px]">
      <div className="absolute bottom-[-25%] left-[-74.99%] right-[-75.01%] top-[-25%]">
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 9 14"
        >
          <g id="Group 1">
            <g filter="url(#filter0_f_1_4158)" id="Vector 57">
              <path d={svgPaths.p364217f0} fill="var(--fill-0, #50A99A)" />
            </g>
            <g filter="url(#filter1_f_1_4158)" id="Vector 59">
              <path d={svgPaths.p36b7c80} fill="var(--fill-0, #50A99A)" />
            </g>
            <g filter="url(#filter2_f_1_4158)" id="Vector 58" opacity="0.5">
              <path d={svgPaths.pf56480} fill="var(--fill-0, #D0FFF7)" />
            </g>
          </g>
          <defs>
            <filter
              colorInterpolationFilters="sRGB"
              filterUnits="userSpaceOnUse"
              height="12.8846"
              id="filter0_f_1_4158"
              width="7.15812"
              x="0.852839"
              y="0.852622"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend
                in="SourceGraphic"
                in2="BackgroundImageFix"
                mode="normal"
                result="shape"
              />
              <feGaussianBlur
                result="effect1_foregroundBlur_1_4158"
                stdDeviation="1.07372"
              />
            </filter>
            <filter
              colorInterpolationFilters="sRGB"
              filterUnits="userSpaceOnUse"
              height="8.92012"
              id="filter1_f_1_4158"
              width="5.7265"
              x="1.5686"
              y="2.83487"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend
                in="SourceGraphic"
                in2="BackgroundImageFix"
                mode="normal"
                result="shape"
              />
              <feGaussianBlur
                result="effect1_foregroundBlur_1_4158"
                stdDeviation="1.07372"
              />
            </filter>
            <filter
              colorInterpolationFilters="sRGB"
              filterUnits="userSpaceOnUse"
              height="6.52722"
              id="filter2_f_1_4158"
              width="3.03881"
              x="3.4946"
              y="3.52076"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend
                in="SourceGraphic"
                in2="BackgroundImageFix"
                mode="normal"
                result="shape"
              />
              <feGaussianBlur
                result="effect1_foregroundBlur_1_4158"
                stdDeviation="0.357906"
              />
            </filter>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function Group15() {
  return (
    <div className="h-[8.59px] relative w-[2.863px]">
      <div className="absolute bottom-[-25%] left-[-75%] right-[-75%] top-[-25%]">
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 9 14"
        >
          <g id="Group 2">
            <g filter="url(#filter0_f_1_4183)" id="Vector 57">
              <path d={svgPaths.p279cce00} fill="var(--fill-0, #3E518C)" />
            </g>
            <g filter="url(#filter1_f_1_4183)" id="Vector 59">
              <path d={svgPaths.p144b9700} fill="var(--fill-0, #26408D)" />
            </g>
            <g filter="url(#filter2_f_1_4183)" id="Vector 58" opacity="0.5">
              <path d={svgPaths.p37719e00} fill="var(--fill-0, #0D308C)" />
            </g>
          </g>
          <defs>
            <filter
              colorInterpolationFilters="sRGB"
              filterUnits="userSpaceOnUse"
              height="12.8846"
              id="filter0_f_1_4183"
              width="7.15812"
              x="0.852563"
              y="0.852563"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend
                in="SourceGraphic"
                in2="BackgroundImageFix"
                mode="normal"
                result="shape"
              />
              <feGaussianBlur
                result="effect1_foregroundBlur_1_4183"
                stdDeviation="1.07372"
              />
            </filter>
            <filter
              colorInterpolationFilters="sRGB"
              filterUnits="userSpaceOnUse"
              height="8.92012"
              id="filter1_f_1_4183"
              width="5.7265"
              x="1.56831"
              y="2.83487"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend
                in="SourceGraphic"
                in2="BackgroundImageFix"
                mode="normal"
                result="shape"
              />
              <feGaussianBlur
                result="effect1_foregroundBlur_1_4183"
                stdDeviation="1.07372"
              />
            </filter>
            <filter
              colorInterpolationFilters="sRGB"
              filterUnits="userSpaceOnUse"
              height="6.52722"
              id="filter2_f_1_4183"
              width="3.03881"
              x="3.49431"
              y="3.52076"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend
                in="SourceGraphic"
                in2="BackgroundImageFix"
                mode="normal"
                result="shape"
              />
              <feGaussianBlur
                result="effect1_foregroundBlur_1_4183"
                stdDeviation="0.357906"
              />
            </filter>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function Frame10() {
  return (
    <div className="absolute bg-[#000000] left-[3.85px] rounded-[715.097px] size-[14.316px] top-[3.85px]">
      <Group14 />
      <div className="absolute flex h-[8.59px] items-center justify-center left-[9.31px] top-[2.86px] w-[2.863px]">
        <div className="flex-none rotate-[180deg] scale-y-[-100%]">
          <Group15 />
        </div>
      </div>
    </div>
  );
}

function Lens2() {
  return (
    <div
      className="bg-[#141414] opacity-40 relative rounded-[550.074px] size-[22.025px]"
      data-name="lens2"
    >
      <Frame10 />
    </div>
  );
}

function Pill() {
  return (
    <div
      className="absolute bg-[#000000] h-[33.038px] left-0 overflow-clip rounded-[30.284px] top-0 w-[113.184px]"
      data-name="pill"
    >
      <Lens1 />
      <div className="absolute flex items-center justify-center left-[5.51px] size-[22.025px] top-[5.51px]">
        <div className="flex-none rotate-[180deg] scale-y-[-100%]">
          <Lens2 />
        </div>
      </div>
    </div>
  );
}

function Camera() {
  return (
    <div
      className="h-[33.038px] relative rounded-[30.284px] shrink-0 w-[113.184px]"
      data-name="camera"
    >
      <Pill />
    </div>
  );
}

function Cutout() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-[6.288px] items-center justify-center p-0 relative shrink-0 w-[162.44px]"
      data-name="Cutout"
    >
      <Lens />
      <Camera />
    </div>
  );
}

function BatteryIndicator() {
  return (
    <div
      className="h-[13.624px] relative shrink-0 w-[28.296px]"
      data-name="BatteryIndicator"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 29 14"
      >
        <g id="BatteryIndicator">
          <rect
            height="12.576"
            id="Outline"
            rx="3.668"
            stroke="var(--stroke-0, white)"
            strokeWidth="1.048"
            width="25.152"
            x="0.524"
            y="0.524"
          />
          <rect
            fill="var(--fill-0, white)"
            height="9.432"
            id="Fill"
            rx="2.096"
            width="22.008"
            x="2.096"
            y="2.096"
          />
          <path
            d={svgPaths.p2f8fb400}
            fill="var(--fill-0, white)"
            id="Cell Top"
          />
        </g>
      </svg>
    </div>
  );
}

function RightSide() {
  return (
    <div
      className="basis-0 grow min-h-px min-w-px relative shrink-0"
      data-name="Right Side"
    >
      <div className="flex flex-row items-center justify-end relative size-full">
        <div className="box-border content-stretch flex flex-row gap-[9.432px] items-center justify-end px-[24.104px] py-0 relative w-full">
          <div
            className="h-[12.576px] relative shrink-0 w-[17.816px]"
            data-name="Icon / Mobile Signal"
          >
            <svg
              className="block size-full"
              fill="none"
              preserveAspectRatio="none"
              viewBox="0 0 18 13"
            >
              <g id="Icon / Mobile Signal">
                <path d={svgPaths.p26c60d00} fill="var(--fill-0, white)" />
                <path d={svgPaths.p3de3f400} fill="var(--fill-0, white)" />
                <path d={svgPaths.p19082e80} fill="var(--fill-0, white)" />
                <path d={svgPaths.p3a7d4170} fill="var(--fill-0, white)" />
              </g>
            </svg>
          </div>
          <div
            className="h-[12.402px] relative shrink-0 w-[17.816px]"
            data-name="Wifi"
          >
            <svg
              className="block size-full"
              fill="none"
              preserveAspectRatio="none"
              viewBox="0 0 18 13"
            >
              <path
                d={svgPaths.p28c5ff80}
                fill="var(--fill-0, white)"
                id="Wifi"
              />
            </svg>
          </div>
          <BatteryIndicator />
        </div>
      </div>
    </div>
  );
}

function StatusBar() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-row items-center justify-center left-0 px-0 py-[12.576px] rounded-tl-[41.92px] rounded-tr-[41.92px] top-0 w-[393px]"
      data-name="Status Bar"
    >
      <div className="css-dmmkeh flex flex-col font-['SF_Pro_Text:Semibold',_sans-serif] h-[20.96px] justify-center leading-[0] not-italic relative shrink-0 text-[#ffffff] text-[15.72px] text-center w-[115.28px]">
        <p className="block leading-[20.96px]">9:41</p>
      </div>
      <Cutout />
      <RightSide />
    </div>
  );
}

export default function ActivityTab() {
  return (
    <div
      className="overflow-clip relative rounded-[44.016px] shadow-[0px_14.672px_35.632px_0px_rgba(0,0,0,0.1)] size-full"
      data-name="Activity tab"
    >
      <DarkOverlay />
      <Home />
      <TopBarsIOs />
      <WelcomeMessageContainer />
      <MeasureBar />
      <LiveButtonsBar />
      <StatusBar />
    </div>
  );
}