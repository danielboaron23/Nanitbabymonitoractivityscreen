import svgPaths from "./svg-287w48ppy2";

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
          <path d={svgPaths.p6d1f80} fill="var(--fill-0, #B5B8C0)" id="ô" />
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

function HomeButtonContainer({ onNavigateToHome, isActive }: { onNavigateToHome?: () => void, isActive?: boolean }) {
  return (
    <button
      className="box-border content-stretch flex flex-col gap-[6.288px] items-center justify-center p-0 relative shrink-0 w-[49.256px] hover:opacity-80 transition-opacity"
      data-name="Home button container"
      onClick={onNavigateToHome}
    >
      <TabBarIcons />
      <div className={`flex flex-col font-['BentonSans:Regular',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[10px] text-center text-nowrap ${isActive ? 'text-[#ef7b7b]' : 'text-[#b5b8c0]'}`}>
        <p className="block leading-[14px] whitespace-pre" dir="auto">
          Home
        </p>
      </div>
    </button>
  );
}

function TabBarIcons1({ isActive }: { isActive?: boolean }) {
  const fillColor = isActive ? "#EF7B7B" : "#B5B8C0";
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
            fill={fillColor}
            id="Subtract"
          />
        </g>
      </svg>
    </div>
  );
}

function ActivityButtonContainer({ onNavigateToActivity, isActive }: { onNavigateToActivity?: () => void, isActive?: boolean }) {
  return (
    <button
      className="box-border content-stretch flex flex-col gap-[6.288px] items-center justify-start p-0 relative shrink-0 w-[49.256px] hover:opacity-80 transition-opacity"
      data-name="Activity button container"
      onClick={onNavigateToActivity}
    >
      <TabBarIcons1 isActive={isActive} />
      <div className={`flex flex-col font-['BentonSans:Regular',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[10px] text-center text-nowrap ${isActive ? 'text-[#ef7b7b]' : 'text-[#b5b8c0]'}`}>
        <p className="block leading-[14px] whitespace-pre">Activity</p>
      </div>
    </button>
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
    <div className="absolute bottom-[4.17%] left-[4.17%] right-[4.18%] top-[4.17%]">
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

function Group1000002150({ isActive }: { isActive?: boolean }) {
  const fillColor = isActive ? "#EF7B7B" : "#B5B8C0";
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
            <path d={svgPaths.pc680170} fill={fillColor} />
            <path
              d={svgPaths.p13310e00}
              fill={fillColor}
              mask="url(#path-1-inside-1_1_4308)"
            />
          </g>
          <path d={svgPaths.p3a743f00} fill={fillColor} id="ô£³" />
          <path
            d={svgPaths.p1bb41400}
            fill={fillColor}
            id="ô£³_2"
          />
        </g>
      </svg>
    </div>
  );
}

function TabBarIcons4({ isActive }: { isActive?: boolean }) {
  return (
    <div
      className="h-[25.152px] relative shrink-0 w-[29.965px]"
      data-name="TabBar_Icons"
    >
      <Group1000002150 isActive={isActive} />
      <div className="absolute bottom-0 left-[6.95%] right-[9.11%] top-0" />
    </div>
  );
}

function MemoriesButtonContainer({ onNavigateToMemories, isActive }: { onNavigateToMemories?: () => void, isActive?: boolean }) {
  return (
    <button
      className="box-border content-stretch flex flex-col gap-[6.288px] items-center justify-start p-0 relative shrink-0 hover:opacity-80 transition-opacity"
      data-name="Memories button container"
      onClick={onNavigateToMemories}
    >
      <TabBarIcons4 isActive={isActive} />
      <div className={`flex flex-col font-['BentonSans:Regular',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[10px] text-center text-nowrap ${isActive ? 'text-[#ef7b7b]' : 'text-[#b5b8c0]'}`}>
        <p className="block leading-[14px] whitespace-pre">Memories</p>
      </div>
    </button>
  );
}

function NavigationContainer({ onNavigateToHome, onNavigateToActivity, onNavigateToMemories, activeTab }: { onNavigateToHome?: () => void, onNavigateToActivity?: () => void, onNavigateToMemories?: () => void, activeTab?: string }) {
  return (
    <div
      className="bg-[#25304a] h-full w-full flex items-center justify-center px-[33px] py-[20px] rounded-t-[0px] rounded-b-[46px]"
      data-name="Navigation container"
    >
      <div className="flex flex-row gap-[25.152px] items-center justify-center">
        <HomeButtonContainer onNavigateToHome={onNavigateToHome} isActive={activeTab === 'Home'} />
        <ActivityButtonContainer onNavigateToActivity={onNavigateToActivity} isActive={activeTab === 'Activity'} />
        <InsightsButtonContainer />
        <LearnButtonContainer />
        <MemoriesButtonContainer onNavigateToMemories={onNavigateToMemories} isActive={activeTab === 'Memories'} />
      </div>
    </div>
  );
}

export default function Frame1410088493({ onNavigateToHome, onNavigateToActivity, onNavigateToMemories, activeTab }: { onNavigateToHome?: () => void, onNavigateToActivity?: () => void, onNavigateToMemories?: () => void, activeTab?: string }) {
  return (
    <div className="w-full h-auto">
      <NavigationContainer onNavigateToHome={onNavigateToHome} onNavigateToActivity={onNavigateToActivity} onNavigateToMemories={onNavigateToMemories} activeTab={activeTab} />
    </div>
  );
}