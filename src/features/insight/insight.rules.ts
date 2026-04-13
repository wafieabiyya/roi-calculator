import type { Insight, InsightData } from "../../types/insight.type";

export type InsightRule<T> = {
  condition: (data: T) => boolean;
  insight: (data: T) => Insight;
};

// ROI rules
export const roiRules: InsightRule<InsightData>[] = [
  {
    condition: ({ roi }) => roi > 100,
    insight: () => ({
      type: "success",
      message: "ROI sangat tinggi. Kampanye sangat menguntungkan.",
    }),
  },
  {
    condition: ({ roi }) => roi >= 30,
    insight: () => ({
      type: "success",
      message: "Kampanye menguntungkan dengan performa yang sehat.",
    }),
  },
  {
    condition: ({ roi }) => roi >= 0,
    insight: () => ({
      type: "warning",
      message: "Profit tipis. Perlu optimasi lebih lanjut.",
    }),
  },
  {
    condition: () => true,
    insight: () => ({
      type: "danger",
      message: "Kampanye merugi. Segera evaluasi strategi.",
    }),
  },
];

// CPR rules
export const cprRules: InsightRule<InsightData>[] = [
  {
    condition: ({ cpr, avgOrderValue }) => cpr > avgOrderValue,
    insight: () => ({
      type: "danger",
      message:
        "CPR lebih tinggi dari nilai pesanan. Kampanye tidak mungkin profit.",
    }),
  },
  {
    condition: ({ cpr, price }) => cpr > 0.5 * price,
    insight: () => ({
      type: "warning",
      message: "CPR terlalu tinggi. Disarankan menurunkan biaya akuisisi.",
    }),
  },
  {
    condition: ({ cpr, price }) => cpr >= 0.2 * price && cpr <= 0.3 * price,
    insight: () => ({
      type: "success",
      message: "CPR berada dalam kisaran sehat.",
    }),
  },
];

// result rules
export const resultRules: InsightRule<InsightData>[] = [
  {
    condition: ({ results }) => results < 10,
    insight: () => ({
      type: "info",
      message: "Volume hasil masih rendah. Pertimbangkan menaikkan budget.",
    }),
  },
  {
    condition: ({ results }) => results <= 50,
    insight: () => ({
      type: "success",
      message: "Volume hasil cukup stabil.",
    }),
  },
  {
    condition: () => true,
    insight: () => ({
      type: "success",
      message: "Volume tinggi. Kampanye siap untuk scaling.",
    }),
  },
];
