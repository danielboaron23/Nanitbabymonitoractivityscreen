import { useState } from 'react';
import InteractiveActivityTab from './components/InteractiveActivityTab';
import MemoriesScreen from './components/MemoriesScreen';
import NanitActivityScreen from './components/NanitActivityScreen';
import Frame1410088493 from './imports/Frame1410088493';

type Screen = 'home' | 'activity' | 'memories';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<Screen>('home');

  const handleNavigateToMemories = () => {
    console.log('Navigating to Memories');
    setCurrentScreen('memories');
  };

  const handleNavigateToActivity = () => {
    console.log('Navigating to Activity');
    setCurrentScreen('activity');
  };

  const handleNavigateToHome = () => {
    console.log('Navigating to Home');
    setCurrentScreen('home');
  };

  const renderCurrentScreen = () => {
    switch (currentScreen) {
      case 'home':
        return (
          <NanitActivityScreen 
            onNavigateToHome={handleNavigateToHome}
            onNavigateToActivity={handleNavigateToActivity}
            onNavigateToMemories={handleNavigateToMemories}
            activeTab="Home"
          />
        );
      case 'activity':
        return (
          <div className="w-[393px] h-[852px] relative">
            <InteractiveActivityTab 
              onNavigateToHome={handleNavigateToHome}
              onNavigateToActivity={handleNavigateToActivity}
              onNavigateToMemories={handleNavigateToMemories}
            />
            {/* Interactive bottom navigation overlay */}
            <div className="absolute bottom-[29px] left-0 right-0 h-[59px] z-50">
              <Frame1410088493 
                activeTab="Activity"
                onNavigateToHome={handleNavigateToHome}
                onNavigateToActivity={handleNavigateToActivity}
                onNavigateToMemories={handleNavigateToMemories}
              />
            </div>
          </div>
        );
      case 'memories':
        return (
          <MemoriesScreen 
            onGoToLive={handleNavigateToActivity}
            onBack={handleNavigateToHome}
            activeTab="Memories"
          />
        );
      default:
        return (
          <NanitActivityScreen 
            onNavigateToHome={handleNavigateToHome}
            onNavigateToActivity={handleNavigateToActivity}
            onNavigateToMemories={handleNavigateToMemories}
            activeTab="Home"
          />
        );
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="w-[393px] h-[852px] mx-auto relative">
        {/* Phone frame shadow */}
        <div className="absolute inset-0 rounded-[44px] shadow-2xl shadow-black/20 -z-10"></div>
        
        {/* Main app */}
        {renderCurrentScreen()}
        
        {/* Subtle phone bezel */}
        <div className="absolute inset-0 rounded-[44px] ring-1 ring-black/10 pointer-events-none"></div>
      </div>
    </div>
  );
}