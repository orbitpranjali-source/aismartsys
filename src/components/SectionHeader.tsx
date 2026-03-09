interface SectionHeaderProps {
  badge?: string;
  title: string;
  description?: string;
}

const SectionHeader = ({ badge, title, description }: SectionHeaderProps) => (
  <div className="text-center max-w-2xl mx-auto mb-14">
    {badge && (
      <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
        {badge}
      </span>
    )}
    <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">{title}</h2>
    {description && <p className="text-muted-foreground text-lg">{description}</p>}
  </div>
);

export default SectionHeader;
