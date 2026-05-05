import RevealOnScroll from './RevealOnScroll';

interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
  delay?: number;
}

export default function FeatureCard({ icon, title, description, delay = 0 }: FeatureCardProps) {
  return (
    <RevealOnScroll delay={delay}>
      <div className="group bg-white border border-border rounded-2xl p-6 hover:shadow-lg hover:border-primary/30 transition-all duration-300 h-full">
        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-2xl mb-4 group-hover:bg-primary/20 transition-colors">
          {icon}
        </div>
        <h3 className="text-lg font-semibold text-text mb-2">{title}</h3>
        <p className="text-text-secondary text-sm leading-relaxed">{description}</p>
      </div>
    </RevealOnScroll>
  );
}
