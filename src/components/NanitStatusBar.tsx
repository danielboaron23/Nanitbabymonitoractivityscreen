import { useState, useEffect } from 'react';

interface NanitStatusBarProps {
  title?: string;
}

// רכיבי פנים מקובץ ActivityTab-27-5286.tsx
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
          <g filter="url(#filter0_f_27_4273)" id="Ellipse 12">
            <circle
              cx="7.336"
              cy="4.51448"
              fill="var(--fill-0, #686D95)"
              r="1.69292"
            />
          </g>
          <g filter="url(#filter1_f_27_4273)" id="Ellipse 13">
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
            id="filter0_f_27_4273"
            width="7.90031"
            x="3.38584"
            y="0.564326"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend
              in="SourceGraphic"
              in2="BackgroundImageFix"
              mode="normal"
              result="shape"
            />
            <feGaussianBlur
              result="effect1_foregroundBlur_27_4273"
              stdDeviation="1.12862"
            />
          </filter>
          <filter
            colorInterpolationFilters="sRGB"
            filterUnits="userSpaceOnUse"
            height="7.336"
            id="filter1_f_27_4273"
            width="7.336"
            x="3.95027"
            y="6.77167"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend
              in="SourceGraphic"
              in2="BackgroundImageFix"
              mode="normal"
              result="shape"
            />
            <feGaussianBlur
              result="effect1_foregroundBlur_27_4273"
              stdDeviation="1.12862"
            />
          </filter>
        </defs>
      </svg>
    </div>
  );
}

function Camera() {
  return (
    <div
      className="h-[33.038px] relative rounded-[30.284px] shrink-0 w-[113.184px]"
      data-name="camera"
    >
      <div
        className="absolute bg-[#000000] h-[33.038px] left-0 overflow-clip rounded-[30.284px] top-0 w-[113.184px]"
        data-name="pill"
      >
        {/* Simplified camera internals for status bar */}
        <div className="absolute bg-[#121212] left-[82.59px] opacity-75 rounded-[567.537px] size-[15.907px] top-[8.56px]" />
      </div>
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
            d="M26.8 3.35C27.45 3.25 28 3.7 28 4.35V9.65C28 10.3 27.45 10.75 26.8 10.65V3.35Z"
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
                <path d="M2 10C2 10.55 2.45 11 3 11C3.55 11 4 10.55 4 10V8C4 7.45 3.55 7 3 7C2.45 7 2 7.45 2 8V10Z" fill="var(--fill-0, white)" />
                <path d="M6 10C6 10.55 6.45 11 7 11C7.55 11 8 10.55 8 10V6C8 5.45 7.55 5 7 5C6.45 5 6 5.45 6 6V10Z" fill="var(--fill-0, white)" />
                <path d="M10 10C10 10.55 10.45 11 11 11C11.55 11 12 10.55 12 10V4C12 3.45 11.55 3 11 3C10.45 3 10 3.45 10 4V10Z" fill="var(--fill-0, white)" />
                <path d="M14 10C14 10.55 14.45 11 15 11C15.55 11 16 10.55 16 10V2C16 1.45 15.55 1 15 1C14.45 1 14 1.45 14 2V10Z" fill="var(--fill-0, white)" />
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
                d="M1 8.5C3.5 6 6.5 6 9 8.5M3 10.5C4.5 9 5.5 9 7 10.5M15 2.5C13 1 11 1 9 2.5M9 0.5C11 2 15 4 15 8.5M0 8.5C4 4.5 11 4.5 15 8.5"
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

export default function NanitStatusBar({ title = "Activity" }: NanitStatusBarProps) {
  const [currentTime, setCurrentTime] = useState('9:41');

  // עדכון השעה כל דקה
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const hours = now.getHours();
      const minutes = now.getMinutes();
      const formattedTime = `${hours}:${minutes.toString().padStart(2, '0')}`;
      setCurrentTime(formattedTime);
    };

    updateTime();
    const interval = setInterval(updateTime, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="absolute box-border content-stretch flex flex-row items-center justify-center left-0 px-0 py-[12.576px] rounded-tl-[41.92px] rounded-tr-[41.92px] top-0 w-[393px]"
      data-name="Status Bar"
    >
      <div className="css-dmmkeh flex flex-col font-['SF_Pro_Text:Semibold',_sans-serif] h-[20.96px] justify-center leading-[0] not-italic relative shrink-0 text-[#ffffff] text-[15.72px] text-center w-[115.28px]">
        <p className="block leading-[20.96px]">{currentTime}</p>
      </div>
      <Cutout />
      <RightSide />
    </div>
  );
}