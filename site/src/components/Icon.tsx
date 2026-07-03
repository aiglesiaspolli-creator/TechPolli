import type React from "react";
import type { IconName } from "@/types/site";

type IconProps = {
  name: IconName;
};

const paths: Record<IconName, React.ReactNode> = {
  monitor: <><rect x="3" y="4" width="18" height="12" rx="2" /><path d="M8 20h8M12 16v4" /></>,
  laptop: <><path d="M5 6a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v9H5z" /><path d="M3 18h18" /></>,
  warning: <><path d="m12 3 10 18H2z" /><path d="M12 9v5M12 17h.01" /></>,
  shield: <><path d="M12 3 20 6v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6z" /><path d="m9 12 2 2 4-5" /></>,
  bug: <><path d="M8 8h8v8a4 4 0 0 1-8 0z" /><path d="M9 4l2 4M15 4l-2 4M4 13h4M16 13h4M5 19l3-3M19 19l-3-3" /></>,
  wifi: <><path d="M5 12a10 10 0 0 1 14 0M8.5 15.5a5 5 0 0 1 7 0" /><path d="M12 19h.01" /></>,
  cpu: <><rect x="7" y="7" width="10" height="10" rx="2" /><path d="M9 1v3M15 1v3M9 20v3M15 20v3M20 9h3M20 15h3M1 9h3M1 15h3" /></>,
  power: <><path d="M12 2v10" /><path d="M18.4 6.6a9 9 0 1 1-12.8 0" /></>,
  file: <><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><path d="M14 2v6h6" /></>,
  zap: <><path d="M13 2 4 14h7l-1 8 9-12h-7z" /></>,
  headset: <><path d="M4 14v-2a8 8 0 0 1 16 0v2" /><path d="M4 14h4v5H4zM16 14h4v5h-4z" /><path d="M18 19c0 2-2 3-5 3" /></>,
  clock: <><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></>,
  tool: <><path d="M14.7 6.3a4 4 0 0 0-5 5L3 18l3 3 6.7-6.7a4 4 0 0 0 5-5l-2.5 2.5-3-3z" /></>,
  database: <><ellipse cx="12" cy="5" rx="8" ry="3" /><path d="M4 5v14c0 1.7 3.6 3 8 3s8-1.3 8-3V5M4 12c0 1.7 3.6 3 8 3s8-1.3 8-3" /></>,
  home: <><path d="m3 11 9-8 9 8" /><path d="M5 10v11h14V10" /></>,
  building: <><rect x="4" y="3" width="16" height="18" rx="2" /><path d="M8 7h.01M12 7h.01M16 7h.01M8 11h.01M12 11h.01M16 11h.01M8 15h.01M12 15h.01M16 15h.01" /></>,
  star: <path d="m12 2 3 6 7 .9-5 4.8 1.2 6.8L12 17l-6.2 3.5L7 13.7 2 8.9 9 8z" />,
  send: <><path d="m22 2-7 20-4-9-9-4z" /><path d="M22 2 11 13" /></>,
  arrowRight: <><path d="M5 12h14" /><path d="m13 6 6 6-6 6" /></>
};

export function Icon({ name }: IconProps) {
  return (
    <svg className="icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      {paths[name]}
    </svg>
  );
}
