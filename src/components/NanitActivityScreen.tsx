import { useState, useEffect } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import Frame1410088493 from '../imports/Frame1410088493';
import MeasureBar from '../imports/MeasureBar';
import WelcomeMessageContainer from '../imports/WelcomeMessageContainer';
import LiveButtonsBar from '../imports/LiveButtonsBar-10-174';
import NanitStatusBar from './NanitStatusBar';

interface NanitActivityScreenProps {
  onNavigateToMemories: () => void;
  onNavigateToActivity?: () => void;
  onNavigateToHome?: () => void;
  activeTab: string;
}

export default function NanitActivityScreen({ onNavigateToMemories, onNavigateToActivity, onNavigateToHome, activeTab }: NanitActivityScreenProps) {
  const [currentTime, setCurrentTime] = useState('9:41');
  const [temperature, setTemperature] = useState(73);
  const [humidity, setHumidity] = useState(40);
  const [isLive, setIsLive] = useState(true);

  // Update time every minute
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

  // Simulate real-time environmental data changes
  useEffect(() => {
    const interval = setInterval(() => {
      setTemperature(prev => Math.max(70, Math.min(76, prev + (Math.random() - 0.5) * 0.5)));
      setHumidity(prev => Math.max(35, Math.min(45, prev + (Math.random() - 0.5) * 2)));
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-[393px] h-[852px] bg-gradient-to-b from-[#394562] to-[#031229] relative overflow-hidden rounded-[44px]">
      {/* Nanit Status Bar */}
      <NanitStatusBar title="Activity" />

      {/* Navigation Header */}
      <div className="absolute top-[57.49px] left-0 right-0 h-[44px] bg-transparent flex items-center justify-between px-4">
        {/* Hamburger Menu */}
        <button className="w-6 h-6 flex flex-col justify-center items-center gap-1">
          <div className="w-4 h-[2px] bg-white rounded"></div>
          <div className="w-4 h-[2px] bg-white rounded"></div>
          <div className="w-4 h-[2px] bg-white rounded"></div>
        </button>
        
        {/* Title */}
        <h1 className="text-white text-[16px] font-medium">Activity</h1>
        
        {/* Empty space for balance */}
        <div className="w-6"></div>
      </div>

      {/* Main Content Container */}
      <div className="absolute top-[101px] left-0 right-0 bottom-[146px] bg-transparent">
        {/* Top Controls - Using WelcomeMessageContainer from Figma */}
        <div className="absolute top-0 left-0 right-0 h-[78px]">
          <WelcomeMessageContainer />
        </div>

        {/* Center Live Video Feed - Using LiveButtonsBar from Figma */}
        <div className="absolute top-[78px] left-0 right-0 bottom-0 flex items-center justify-center p-[0px] mx-[0px] my-[-1px]">
          <div className="w-[375px] h-[500px]">
            <LiveButtonsBar />
          </div>
        </div>
      </div>

      {/* Sleep Timeline Section - Using MeasureBar from Figma */}
      <div className="absolute bottom-[88px] left-0 right-0 h-[58px] bg-transparent mx-[0px] my-[17px] mt-[25px] mr-[0px] mb-[17px] ml-[0px]">
        <MeasureBar />
      </div>

      {/* Fixed Bottom Navigation using the imported component */}
      <div className="absolute bottom-0 left-0 right-0 h-[88px]">
        <Frame1410088493 
          onNavigateToHome={onNavigateToHome}
          onNavigateToActivity={onNavigateToActivity}
          onNavigateToMemories={onNavigateToMemories} 
          activeTab={activeTab} 
        />
      </div>

      {/* Home Indicator - Now integrated into navigation */}
      <div className="absolute bottom-[8px] left-1/2 transform -translate-x-1/2 w-[155px] h-[5px] bg-white/30 rounded-full"></div>
    </div>
  );
}