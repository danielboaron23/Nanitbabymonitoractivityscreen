import { useState } from 'react';
import ActivityTab from '../imports/ActivityTab-27-4190';
import { motion } from 'motion/react';
import Frame1410088493 from '../imports/Frame1410088493';

interface ActivityTabScreenProps {
  onNavigateToMemories: () => void;
  activeTab: string;
}

type ActivitySection = 'Activity tracker' | 'Video history' | 'Sleep coach';

export default function ActivityTabScreen({ onNavigateToMemories, activeTab }: ActivityTabScreenProps) {
  const [activeSection, setActiveSection] = useState<ActivitySection>('Sleep coach');

  const handleTabClick = (section: ActivitySection) => {
    setActiveSection(section);
    console.log(`Switched to ${section}`);
  };

  // Render different content based on active section
  const renderSectionContent = () => {
    switch (activeSection) {
      case 'Activity tracker':
        return (
          <div className="flex items-center justify-center h-full">
            <div className="text-center px-8">
              <div className="mb-8">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-[#EF7B7B]/30 to-[#25304A]/50 rounded-full flex items-center justify-center">
                  <span className="text-2xl">📊</span>
                </div>
              </div>
              <h2 className="text-white text-2xl font-medium mb-4">Activity Tracker</h2>
              <p className="text-white/70 text-sm mb-8 leading-relaxed">
                Monitor your baby's daily activities, feeding times, and developmental milestones with our comprehensive tracking system.
              </p>
              <button className="bg-[#ef7b7b] hover:bg-[#ef7b7b]/90 px-6 py-3 rounded-full text-white font-medium transition-colors">
                Start Tracking
              </button>
            </div>
          </div>
        );
      
      case 'Video history':
        return (
          <div className="flex items-center justify-center h-full">
            <div className="text-center px-8">
              <div className="mb-8">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-[#EF7B7B]/30 to-[#25304A]/50 rounded-full flex items-center justify-center">
                  <span className="text-2xl">🎥</span>
                </div>
              </div>
              <h2 className="text-white text-2xl font-medium mb-4">Video History</h2>
              <p className="text-white/70 text-sm mb-8 leading-relaxed">
                Browse through your baby's precious moments captured by the Nanit camera. Relive those special memories anytime.
              </p>
              <button className="bg-[#ef7b7b] hover:bg-[#ef7b7b]/90 px-6 py-3 rounded-full text-white font-medium transition-colors">
                View Videos
              </button>
            </div>
          </div>
        );
      
      case 'Sleep coach':
      default:
        // This shows the original Sleep Coach content from Figma
        return null; // The original ActivityTab component will show its content
    }
  };

  return (
    <div className="w-[393px] h-[852px] relative">
      {/* Base ActivityTab from Figma */}
      <ActivityTab />
      
      {/* Interactive overlay for segmented picker */}
      <div className="absolute top-[101px] left-4 right-4 h-[32px] z-50">
        <div className="bg-[rgba(255,255,255,0.05)] rounded-lg p-[2px] flex">
          {(['Activity tracker', 'Video history', 'Sleep coach'] as ActivitySection[]).map((section) => (
            <motion.button
              key={section}
              className={`flex-1 text-xs font-medium py-2 px-3 rounded-md transition-all duration-200 ${
                activeSection === section
                  ? 'bg-[#495875] text-white'
                  : 'text-white hover:text-white/80'
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

      {/* Content overlay for non-Sleep coach sections */}
      {activeSection !== 'Sleep coach' && (
        <div className="absolute top-[140px] left-0 right-0 bottom-[88px] bg-gradient-to-b from-[#394562] to-[#031229] z-40">
          {renderSectionContent()}
        </div>
      )}

      {/* Interactive bottom navigation overlay */}
      <div className="absolute bottom-[29px] left-0 right-0 h-[59px] z-50">
        <div className="flex justify-center items-center h-full px-[34px]">
          <div className="flex justify-between w-full max-w-[325px]">
            {[
              { name: 'Home', icon: '🏠' },
              { name: 'Activity', icon: '⚡' },
              { name: 'Insights', icon: '📊' },
              { name: 'Learn', icon: '📚' },
              { name: 'Memories', icon: '📸' }
            ].map((tab) => (
              <motion.button
                key={tab.name}
                className={`flex flex-col items-center gap-1 w-[49px] transition-opacity ${
                  activeTab === tab.name ? 'opacity-100' : 'opacity-70'
                }`}
                onClick={() => {
                  console.log(`${tab.name} tab clicked`);
                  if (tab.name === 'Memories') {
                    onNavigateToMemories();
                  }
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="w-6 h-6 flex items-center justify-center text-sm">
                  {tab.icon}
                </div>
                <span className="text-xs font-medium text-white/80 sr-only">
                  {tab.name}
                </span>
              </motion.button>
            ))}
          </div>
        </div>
      </div>

      {/* Learn more button interactive overlay (only for Sleep coach) */}
      {activeSection === 'Sleep coach' && (
        <div className="absolute bottom-[140px] left-4 right-4 z-50">
          <motion.button
            className="w-full bg-[#ef7b7b] hover:bg-[#ef7b7b]/90 py-3 rounded-full text-white font-medium transition-colors"
            onClick={() => {
              console.log('Learn more clicked');
              alert('Opening Sleep Coach program...');
            }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Learn more
          </motion.button>
        </div>
      )}
    </div>
  );
}