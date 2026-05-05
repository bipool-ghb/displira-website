import RevealOnScroll from './RevealOnScroll';

interface SectionHeaderProps {
  badge?: string;
  title: string;
  subtitle?: string;
  align?: 'center' | 'left';
}

export default function SectionHeader({ badge, title, subtitle, align = 'center' }: SectionHeaderProps) {
  const alignClass = align === 'center' ? 'text-center items-center' : 'text-left items-start';

  return (
    <RevealOnScroll className={`flex flex-col gap-3 mb-12 ${alignClass}`}>
      {badge && (
        <span className="inline-block px-4 py-1.5 text-sm font-medium text-primary bg-primary/10 rounded-full w-fit">
          {badge}
        </span>
      )}
      <h2 className="text-3xl md:text-4xl font-bold text-text">{title}</h2>
      {subtitle && (
        <p className="text-lg text-text-secondary max-w-2xl">{subtitle}</p>
      )}
    </RevealOnScroll>
  );
}
