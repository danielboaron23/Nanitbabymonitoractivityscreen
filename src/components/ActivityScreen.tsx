import { useState } from 'react';
import { motion } from 'motion/react';
import Frame1410088493 from '../imports/Frame1410088493';
import NanitStatusBar from './NanitStatusBar';

interface ActivityScreenProps {
  onNavigateToMemories: () => void;
  onNavigateToHome: () => void;
  activeTab: string;
}

type ActivitySection = 'Activity tracker' | 'Video history' | 'Sleep coach';

export default function ActivityScreen({ onNavigateToMemories, onNavigateToHome, activeTab }: ActivityScreenProps) {
  const [activeSection, setActiveSection] = useState<ActivitySection>('Sleep coach');

  const handleTabClick = (section: ActivitySection) => {
    setActiveSection(section);
    console.log(`Switched to ${section}`);
  };

  const renderSectionContent = () => {
    switch (activeSection) {
      case 'Activity tracker':
        return (
          <div className="flex items-center justify-center h-full px-8">
            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-[#EF7B7B]/30 to-[#25304A]/50 rounded-full flex items-center justify-center">
                <span className="text-3xl">📊</span>
              </div>
              <h2 className="text-white text-2xl font-medium mb-4">Activity Tracker</h2>
              <p className="text-white/70 text-sm mb-8 leading-relaxed max-w-xs mx-auto">
                Monitor your baby's daily activities, feeding times, and developmental milestones with our comprehensive tracking system.
              </p>
              <motion.button 
                className="bg-[#ef7b7b] hover:bg-[#ef7b7b]/90 px-8 py-3 rounded-full text-white font-medium transition-colors"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Start Tracking
              </motion.button>
            </div>
          </div>
        );
      
      case 'Video history':
        return (
          <div className="flex items-center justify-center h-full px-8">
            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-[#EF7B7B]/30 to-[#25304A]/50 rounded-full flex items-center justify-center">
                <span className="text-3xl">🎥</span>
              </div>
              <h2 className="text-white text-2xl font-medium mb-4">Video History</h2>
              <p className="text-white/70 text-sm mb-8 leading-relaxed max-w-xs mx-auto">
                Browse through your baby's precious moments captured by the Nanit camera. Relive those special memories anytime.
              </p>
              <motion.button 
                className="bg-[#ef7b7b] hover:bg-[#ef7b7b]/90 px-8 py-3 rounded-full text-white font-medium transition-colors"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                View Videos
              </motion.button>
            </div>
          </div>
        );
      
      case 'Sleep coach':
      default:
        return (
          <div className="flex items-center justify-center h-full px-8">
            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-[#EF7B7B]/30 to-[#25304A]/50 rounded-full flex items-center justify-center">
                <span className="text-3xl">🛏️</span>
              </div>
              <h2 className="text-white text-2xl font-medium mb-4">Sleep Coach</h2>
              <p className="text-white/70 text-sm mb-8 leading-relaxed max-w-xs mx-auto">
                Get personalized sleep guidance and coaching tailored to your baby's unique sleep patterns and needs.
              </p>
              <motion.button 
                className="bg-[#ef7b7b] hover:bg-[#ef7b7b]/90 px-8 py-3 rounded-full text-white font-medium transition-colors"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => {
                  console.log('Sleep Coach program opened');
                  alert('Opening Sleep Coach program...');
                }}
              >
                Learn more
              </motion.button>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="w-[393px] h-[852px] relative bg-gradient-to-b from-[#394562] to-[#031229] overflow-hidden rounded-[44px]">
      {/* Nanit Status Bar */}
      <NanitStatusBar title="Activity" />

      {/* Header */}
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

      {/* Segmented picker */}
      <div className="absolute top-[101px] left-4 right-4 h-[32px] mb-6">
        <div className="bg-[rgba(255,255,255,0.1)] rounded-lg p-[2px] flex h-full">
          {(['Activity tracker', 'Video history', 'Sleep coach'] as ActivitySection[]).map((section) => (
            <motion.button
              key={section}
              className={`flex-1 text-xs font-medium py-2 px-2 rounded-md transition-all duration-200 ${
                activeSection === section
                  ? 'bg-[#495875] text-white shadow-lg'
                  : 'text-white/70 hover:text-white/90'
              }`}
              onClick={() => handleTabClick(section)}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {section === 'Sleep coach' && '🛏️ '}
              {section}
            </motion.button>
          ))}
        </div>
      </div>

      {/* Main content */}
      <div className="absolute top-[140px] left-0 right-0 bottom-[88px] flex flex-col">
        {renderSectionContent()}
      </div>

      {/* Bottom navigation */}
      <div className="absolute bottom-0 left-0 right-0">
        <Frame1410088493 
          activeTab="Activity"
          onNavigateToHome={onNavigateToHome}
          onNavigateToActivity={() => {}} // Already on Activity
          onNavigateToMemories={onNavigateToMemories}
        />
      </div>
    </div>
  );
}