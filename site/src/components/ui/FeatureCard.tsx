import type { FeatureItem } from "@/types/site";
import { Icon } from "@/components/Icon";

export function FeatureCard({ icon, title, text }: FeatureItem) {
  return (
    <article className="card reveal">
      <Icon name={icon} />
      <h3>{title}</h3>
      <p>{text}</p>
    </article>
  );
}
