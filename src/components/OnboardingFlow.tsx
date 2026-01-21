import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ChevronRight, ChevronLeft, Sparkles } from 'lucide-react';
import { OnboardingFlowProps } from '../types/onboarding';
import { sleepTrainingSteps } from '../constants/sleepTrainingSteps';
import OnboardingStep from './onboarding/OnboardingStep';

export default function OnboardingFlow({ isOpen, onClose, onComplete }: OnboardingFlowProps) {
  const [currentStep, setCurrentStep] = useState(0);

  const handleNext = () => {
    if (currentStep < sleepTrainingSteps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      onComplete();
      onClose();
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const progress = ((currentStep + 1) / sleepTrainingSteps.length) * 100;

  if (!isOpen) return null;

  return (
    <div className="absolute inset-0 z-[150] flex flex-col rounded-[44px] overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#394562] to-[#031229]" />
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="relative w-full h-full flex flex-col"
      >
        {/* Status Bar Area */}
        <div className="h-[57.49px] bg-transparent" />

        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/10">
          <div className="flex-1">
            <div className="h-1 bg-white/20 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-[#EF7B7B] to-[#FF9F9F] rounded-full"
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.3 }}
              />
            </div>
          </div>
          
          <button
            onClick={onClose}
            className="ml-4 w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
          >
            <X className="w-4 h-4 text-white" />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 flex flex-col justify-center px-6 py-6 min-h-0">
          <div className="h-[420px] flex items-center justify-center">
            <div className="w-full max-w-sm">
              <AnimatePresence mode="wait">
                {sleepTrainingSteps.map((step, index) => (
                  <OnboardingStep
                    key={step.id}
                    step={step}
                    isActive={index === currentStep}
                  />
                ))}
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="px-6 pb-8 border-t border-white/10 pt-4">
          <div className="flex items-center justify-between mb-6">
            <div className="flex space-x-2">
              {sleepTrainingSteps.map((_, index) => (
                <div
                  key={index}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentStep
                      ? 'bg-[#EF7B7B] w-6'
                      : index < currentStep
                      ? 'bg-[#EF7B7B]/60'
                      : 'bg-white/30'
                  }`}
                />
              ))}
            </div>
            <div className="text-white/60 text-[12px]">
              {currentStep + 1} of {sleepTrainingSteps.length}
            </div>
          </div>

          <div className="flex gap-4">
            <motion.button
              onClick={handlePrevious}
              disabled={currentStep === 0}
              className={`flex-1 py-4 rounded-xl border transition-all duration-200 ${
                currentStep === 0
                  ? 'border-white/20 text-white/40 cursor-not-allowed'
                  : 'border-white/30 text-white hover:border-white/50 hover:bg-white/10'
              }`}
              whileHover={currentStep > 0 ? { scale: 1.02 } : {}}
              whileTap={currentStep > 0 ? { scale: 0.98 } : {}}
            >
              <div className="flex items-center justify-center gap-2">
                <ChevronLeft className="w-4 h-4" />
                <span className="text-[14px] font-medium">Back</span>
              </div>
            </motion.button>

            <motion.button
              onClick={handleNext}
              className="flex-[2] py-4 rounded-xl bg-gradient-to-r from-[#EF7B7B] to-[#FF9F9F] text-white shadow-lg transition-all duration-200"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="flex items-center justify-center gap-2">
                <span className="text-[14px] font-medium">
                  {currentStep === sleepTrainingSteps.length - 1 ? 'Start Sleep Training' : 'Continue'}
                </span>
                {currentStep === sleepTrainingSteps.length - 1 ? (
                  <Sparkles className="w-4 h-4" />
                ) : (
                  <ChevronRight className="w-4 h-4" />
                )}
              </div>
            </motion.button>
          </div>
        </div>

        {/* Home Indicator */}
        <div className="pb-2 flex justify-center">
          <div className="w-[155px] h-[5px] bg-white/30 rounded-full" />
        </div>
      </motion.div>
    </div>
  );
}