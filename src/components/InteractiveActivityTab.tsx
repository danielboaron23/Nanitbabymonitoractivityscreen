import { useState } from 'react';
import ActivityTab from '../imports/ActivityTab-27-5286';
import OnboardingFlow from './OnboardingFlow';

interface InteractiveActivityTabProps {
  onNavigateToHome?: () => void;
  onNavigateToActivity?: () => void;
  onNavigateToMemories?: () => void;
}

export default function InteractiveActivityTab({ 
  onNavigateToHome, 
  onNavigateToActivity, 
  onNavigateToMemories 
}: InteractiveActivityTabProps) {
  const [showOnboarding, setShowOnboarding] = useState(false);

  const handleLearnMoreClick = () => {
    setShowOnboarding(true);
  };

  const handleOnboardingComplete = () => {
    console.log('Sleep training onboarding completed');
  };

  return (
    <div className="relative w-[393px] h-[852px]">
      {/* Main Activity Tab */}
      <div className="w-full h-full">
        <ActivityTab />
      </div>

      {/* Interactive Learn More Button Overlay */}
      <div 
        className="absolute bottom-28 left-4 right-4 h-[50px] z-10 cursor-pointer"
        onClick={handleLearnMoreClick}
      >
        {/* Invisible overlay that matches the button position */}
        <div className="w-full h-full rounded-[52.4px] bg-transparent hover:bg-white/5 transition-colors" />
      </div>

      {/* Sleep Training Onboarding Modal */}
      <OnboardingFlow
        isOpen={showOnboarding}
        onClose={() => setShowOnboarding(false)}
        onComplete={handleOnboardingComplete}
      />
    </div>
  );
}