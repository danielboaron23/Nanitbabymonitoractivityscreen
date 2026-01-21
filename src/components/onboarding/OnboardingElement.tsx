import { Check, Star } from 'lucide-react';
import { OnboardingElement as ElementType } from '../../types/onboarding';

interface OnboardingElementProps {
  element: ElementType;
  index: number;
}

export default function OnboardingElement({ element, index }: OnboardingElementProps) {
  if (element.type === 'check') {
    return (
      <div className="flex items-center justify-center gap-2 text-white/80 text-[13px]">
        <Check className="w-3 h-3 flex-shrink-0" style={{ color: element.color }} />
        <span>{element.text}</span>
      </div>
    );
  }

  if (element.type === 'badge') {
    return (
      <div className="inline-block bg-white/10 rounded-full px-3 py-1 text-white/80 text-[12px] mx-1">
        {element.text}
      </div>
    );
  }

  if (element.type === 'stat') {
    return (
      <div className="bg-white/10 rounded-lg p-3 text-center mb-2">
        <div className="font-semibold text-[14px]" style={{ color: element.color }}>
          {element.value}
        </div>
        <div className="text-white/60 text-[10px]">{element.label}</div>
      </div>
    );
  }

  if (element.type === 'testimonial') {
    return (
      <div className="bg-white/10 rounded-lg p-4">
        <div className="flex items-center justify-center mb-2">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-3 h-3 text-[#EF7B7B] fill-current" />
          ))}
        </div>
        <p className="text-white/80 text-[12px] italic mb-1">
          {element.text}
        </p>
        <p className="text-white/60 text-[10px]">
          - {element.author}
        </p>
      </div>
    );
  }

  if (element.type === 'cta') {
    return (
      <div className="bg-gradient-to-r from-[#EF7B7B]/20 to-[#FF9F9F]/20 rounded-lg p-4 border border-[#EF7B7B]/30">
        <p className="text-white text-[14px] font-medium">
          {element.text}
        </p>
      </div>
    );
  }

  return null;
}