interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
}

const SectionHeader = ({ title, subtitle, centered = true }: SectionHeaderProps) => {
  return (
    <div className={`mb-12 ${centered ? "text-center" : ""}`}>
      <div className={`inline-block ${centered ? "" : ""}`}>
        <h2 className="section-header text-2xl md:text-3xl mb-4 inline-block">
          {title}
        </h2>
      </div>
      {subtitle && (
        <p className="text-muted-foreground max-w-3xl mx-auto text-lg mt-4">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionHeader;
