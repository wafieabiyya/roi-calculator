import type {
  Insight,
  InsightData,
  InsightType,
} from "../../types/insight.type";

import { formatIDR } from "../../utils/format";
import { cprRules, resultRules, roiRules } from "./insight.rules";
import { pickFirstMatch } from "./insight.utils";

export const generateInsights = (data: InsightData): Insight[] => {
  const insights: Insight[] = [];

  // ROI
  const roiInsight = pickFirstMatch(roiRules, data);
  if (roiInsight) insights.push(roiInsight);

  // CPR
  const cprInsight = pickFirstMatch(cprRules, data);
  if (cprInsight) insights.push(cprInsight);

  // margin
  insights.push(
    data.marginPerResult < 0
      ? {
          type: "danger",
          message: `Setiap transaksi merugi sebesar ${formatIDR(
            Math.abs(data.marginPerResult),
          )}.`,
        }
      : {
          type: "info",
          message: `Setiap transaksi menghasilkan margin ${formatIDR(
            data.marginPerResult,
          )}.`,
        },
  );

  // results
  const resultInsight = pickFirstMatch(resultRules, data);
  if (resultInsight) insights.push(resultInsight);

  // budget hint
  const targetCPR = 0.3 * data.price;
  insights.push({
    type: "info",
    message: `Target CPR ideal Anda sekitar ${formatIDR(
      targetCPR,
    )} (30% dari harga produk).`,
  });

  const buckets: Record<InsightType, Insight[]> = {
    danger: [],
    warning: [],
    success: [],
    info: [],
  };

  for (const insight of insights) {
    buckets[insight.type].push(insight);
  }

  return [
    ...buckets.danger,
    ...buckets.warning,
    ...buckets.success,
    ...buckets.info,
  ].slice(0, 5);
};
