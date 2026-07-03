type SectionHeaderProps = {
  eyebrow: string;
  title: string;
  text: string;
  align?: "center" | "left";
};

export function SectionHeader({ eyebrow, title, text, align = "center" }: SectionHeaderProps) {
  return (
    <div className={`section-header ${align === "left" ? "section-header--left" : ""} reveal`}>
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      <p>{text}</p>
    </div>
  );
}
