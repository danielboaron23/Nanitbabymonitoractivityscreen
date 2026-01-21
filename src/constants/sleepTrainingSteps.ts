import { Brain, Clock, Users, Award, Target } from 'lucide-react';
import { OnboardingStep } from '../types/onboarding';

export const sleepTrainingSteps: OnboardingStep[] = [
  {
    id: 'welcome',
    title: 'Sleep Training Made Easy',
    subtitle: 'Skip videos, get guidance',
    description: 'Personalized sleep coach with science-backed methods that actually work.',
    icon: Brain,
    gradient: 'from-[#EF7B7B] to-[#FF9F9F]',
    illustration: {
      elements: [
        { type: 'check', text: 'No videos', color: '#EF7B7B' },
        { type: 'check', text: 'Step-by-step', color: '#EF7B7B' },
        { type: 'check', text: 'Science-backed', color: '#EF7B7B' }
      ]
    }
  },
  {
    id: 'personalized',
    title: 'Your Personal Sleep Plan',
    subtitle: 'Tailored to your family',
    description: 'Customized plan based on your baby\'s age and your parenting style.',
    icon: Target,
    gradient: 'from-[#25304A] to-[#394562]',
    illustration: {
      elements: [
        { type: 'badge', text: 'Age-appropriate', color: '#25304A' },
        { type: 'badge', text: 'Family-friendly', color: '#25304A' },
        { type: 'badge', text: 'Flexible approach', color: '#25304A' }
      ]
    }
  },
  {
    id: 'coaching',
    title: 'Daily Coaching & Support',
    subtitle: 'Never feel alone',
    description: 'Expert guidance and encouragement every step of the way.',
    icon: Users,
    gradient: 'from-[#5A6B8C] to-[#7A8BB0]',
    illustration: {
      elements: [
        { type: 'testimonial', text: '"The coaching made all the difference!"', author: 'Emma K.' }
      ]
    }
  },
  {
    id: 'results',
    title: 'See Results Fast',
    subtitle: 'Better sleep in 7 days',
    description: 'Most families see improvement within a week with our proven methods.',
    icon: Clock,
    gradient: 'from-[#EF7B7B] to-[#FF9F9F]',
    illustration: {
      elements: [
        { type: 'stat', label: 'Success Rate', value: '91%', color: '#EF7B7B' },
        { type: 'stat', label: 'Average Results', value: '7-14 days', color: '#EF7B7B' },
        { type: 'stat', label: 'Extra Sleep', value: '3+ hours', color: '#EF7B7B' }
      ]
    }
  },
  {
    id: 'ready',
    title: 'Ready to Start?',
    subtitle: 'Join 500,000+ families',
    description: 'Transform sleep for your whole family. Better sleep for baby means better rest for everyone.',
    icon: Award,
    gradient: 'from-[#EF7B7B] to-[#FF9F9F]',
    illustration: {
      elements: [
        { type: 'cta', text: 'Start your sleep journey today' }
      ]
    }
  }
];