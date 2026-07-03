export type IconName =
  | "monitor"
  | "laptop"
  | "warning"
  | "shield"
  | "bug"
  | "wifi"
  | "cpu"
  | "power"
  | "file"
  | "zap"
  | "headset"
  | "clock"
  | "tool"
  | "database"
  | "home"
  | "building"
  | "star"
  | "send"
  | "arrowRight";

export type FeatureItem = {
  icon: IconName;
  title: string;
  text: string;
};

export type BenefitItem = {
  icon: IconName;
  title: string;
};

export type Plan = {
  name: string;
  price: string;
  features: string[];
  featured?: boolean;
};

export type Testimonial = {
  name: string;
  text: string;
  kind: "residencial" | "empresarial";
};

export type FaqItem = {
  question: string;
  answer: string;
};
