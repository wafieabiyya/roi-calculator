import type { Insight, InsightData } from "../../types/insight.type";
import type { InsightRule } from "./insight.rules";

export const pickFirstMatch = (
  rules: InsightRule<InsightData>[],
  data: InsightData,
): Insight | null => {
  const rule = rules.find((r) => r.condition(data));
  return rule ? rule.insight(data) : null;
};
