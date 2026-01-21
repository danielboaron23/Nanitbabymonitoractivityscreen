export interface OnboardingFlowProps {
  isOpen: boolean;
  onClose: () => void;
  onComplete: () => void;
}

export interface OnboardingElement {
  type: 'check' | 'badge' | 'stat' | 'testimonial' | 'cta';
  text: string;
  color?: string;
  label?: string;
  value?: string;
  author?: string;
}

export interface OnboardingStep {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  icon: any;
  gradient: string;
  illustration: {
    elements: OnboardingElement[];
  };
}