interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  accent?: string;
  description?: React.ReactNode;
  align?: "center" | "left";
  className?: string;
}

/** Shared heading block so every section opens the same way. */
export default function SectionHeader({
  eyebrow,
  title,
  accent,
  description,
  align = "center",
  className = "",
}: SectionHeaderProps) {
  const center = align === "center";
  return (
    <div
      className={`mb-12 md:mb-14 max-w-3xl ${
        center ? "mx-auto text-center" : ""
      } ${className}`}
    >
      {eyebrow && (
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-brand">
          {eyebrow}
        </p>
      )}
      <h2 className="font-display text-4xl font-bold uppercase leading-none md:text-6xl">
        {title} {accent && <span className="text-brand">{accent}</span>}
      </h2>
      <div className={`mt-5 h-1 w-14 rounded-full bg-brand ${center ? "mx-auto" : ""}`} />
      {description && (
        <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
          {description}
        </p>
      )}
    </div>
  );
}
