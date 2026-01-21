import svgPaths from "./svg-olz0w01pwt";
import imgIOsBgPelican from "figma:asset/fb41b85e255ff76572cbeb2cd5f8c1e5421d8d70.png";
import { imgRectangle } from "./svg-l0fz2";

function LilyAnniversaryFeedPelicon() {
  return (
    <div
      className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[-5.986px] mt-[-214px] place-items-start relative"
      data-name="Lily anniversary - Feed - pelicon"
    >
      <div
        className="[grid-area:1_/_1] bg-[#cae9f0] h-[614.877px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[1.351px_214px] mask-size-[343px_221.583px] ml-[4.635px] mt-0 rounded-tl-[8px] rounded-tr-[8px] w-[345.695px]"
        data-name="Rectangle"
        style={{ maskImage: `url('${imgRectangle}')` }}
      />
      <div
        className="[grid-area:1_/_1] bg-center bg-contain bg-no-repeat h-[543.013px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[5.986px_158.013px] mask-size-[343px_221.583px] ml-0 mt-[55.987px] rounded-tl-[8px] rounded-tr-[8px] w-[355.915px]"
        data-name="iOS - BG_Pelican"
        style={{
          backgroundImage: `url('${imgIOsBgPelican}')`,
          maskImage: `url('${imgRectangle}')`,
        }}
      />
    </div>
  );
}

function LilyPic() {
  return (
    <div
      className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-0 place-items-start relative"
      data-name="Lily pic"
    >
      <LilyAnniversaryFeedPelicon />
    </div>
  );
}

function BackgroundOverlay() {
  return (
    <div
      className="[grid-area:1_/_1] h-[222px] ml-0 mt-0 opacity-40 relative rounded-tl-[8px] rounded-tr-[8px] w-[343px]"
      data-name="Background overlay"
    >
      <div
        className="absolute bg-[rgba(0,0,0,0.5)] inset-0 rounded-tl-[8px] rounded-tr-[8px]"
        data-name="Background Pop-up overlay"
      />
    </div>
  );
}

function Group1579() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <LilyPic />
      <BackgroundOverlay />
    </div>
  );
}

function Frame1579() {
  return (
    <div className="box-border content-stretch flex flex-col font-['BentonSans:Regular',_sans-serif] gap-2 items-start justify-start not-italic p-0 relative shrink-0 text-left">
      <div className="relative shrink-0 text-[#ffffff] text-[16px] w-[238.973px]">
        <p className="block leading-[22px]">Hello world! Lily was born</p>
      </div>
      <div className="relative shrink-0 text-[#959ca8] text-[12px] w-[264px]">
        <p className="block leading-[16px]">OCT 06 2022 • 5:51 AM</p>
      </div>
    </div>
  );
}

function IcUtility24() {
  return (
    <div className="absolute left-0 size-6 top-0" data-name="ic_utility_24">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 24 24"
      >
        <g id="ic_utility_24">
          <path
            clipRule="evenodd"
            d={svgPaths.p1b7b5c00}
            fill="var(--fill-0, white)"
            fillRule="evenodd"
            id="Stroke-1"
          />
        </g>
      </svg>
    </div>
  );
}

function IcUtility24IcShare() {
  return (
    <div
      className="[grid-area:1_/_1] ml-1.5 mt-1.5 overflow-clip relative size-6"
      data-name="ic_utility_24/ic_share"
    >
      <IcUtility24 />
    </div>
  );
}

function Group1560() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0">
      <div
        className="[grid-area:1_/_1] bg-[rgba(255,255,255,0.05)] ml-0 mt-0 rounded-[17px] size-9"
        data-name="Rectangle"
      />
      <IcUtility24IcShare />
    </div>
  );
}

function Frame2788() {
  return (
    <div className="box-border content-stretch flex flex-row gap-3 items-center justify-start leading-[0] px-4 py-0 relative shrink-0">
      <Frame1579 />
      <Group1560 />
    </div>
  );
}

function Frame2789() {
  return (
    <div className="box-border content-stretch flex flex-col gap-3 items-center justify-start p-0 relative shrink-0">
      <Frame2788 />
    </div>
  );
}

function Frame2792() {
  return (
    <div className="box-border content-stretch flex flex-col gap-2.5 items-center justify-start p-0 relative shrink-0">
      <Frame2789 />
    </div>
  );
}

export default function MemoriesCardLarge() {
  return (
    <div
      className="bg-[#25304a] box-border content-stretch flex flex-col gap-2.5 items-start justify-start pb-2.5 pt-0 px-0 relative rounded-lg shadow-[0px_0px_30px_0px_rgba(0,0,0,0.3)] size-full"
      data-name="memories/card/large"
    >
      <Group1579 />
      <Frame2792 />
    </div>
  );
}