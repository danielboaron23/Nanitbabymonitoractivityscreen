import { motion } from 'motion/react';
import { OnboardingStep as StepType } from '../../types/onboarding';
import OnboardingElement from './OnboardingElement';

interface OnboardingStepProps {
  step: StepType;
  isActive: boolean;
}

export default function OnboardingStep({ step, isActive }: OnboardingStepProps) {
  const Icon = step.icon;

  if (!isActive) return null;

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.3 }}
      className="text-center h-full flex flex-col justify-center"
    >
      {/* Icon */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.1, duration: 0.4, type: "spring" }}
        className="mb-8"
      >
        <div className={`w-20 h-20 rounded-full bg-gradient-to-br ${step.gradient} flex items-center justify-center mx-auto shadow-lg`}>
          <Icon className="w-10 h-10 text-white" />
        </div>
      </motion.div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.3 }}
        className="mb-6"
      >
        <h2 className="text-white text-[22px] font-semibold leading-tight mb-2">
          {step.title}
        </h2>
        
        <p className="text-[#EF7B7B] text-[14px] font-medium mb-3">
          {step.subtitle}
        </p>
        
        <p className="text-white/80 text-[13px] leading-relaxed">
          {step.description}
        </p>
      </motion.div>

      {/* Dynamic Elements */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.3 }}
        className="space-y-3"
      >
        {step.illustration.elements.map((element, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 + index * 0.1, duration: 0.3 }}
          >
            <OnboardingElement element={element} index={index} />
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
}