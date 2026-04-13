export type InsightType = "success" | "warning" | "danger" | "info";

export interface Insight {
  type: InsightType;
  message: string;
}

export interface InsightData {
  price: number;
  adSpend: number;
  cpr: number;
  avgOrderValue: number;
  results: number;
  revenue: number;
  profit: number;
  roi: number;
  marginPerResult: number;
}
