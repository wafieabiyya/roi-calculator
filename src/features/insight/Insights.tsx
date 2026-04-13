import { motion, AnimatePresence } from "framer-motion";
import type { Insight, InsightType } from "../../types/insight.type";

interface InsightsProps {
  insights: Insight[];
}

const typeStyles: Record<InsightType, string> = {
  success: "bg-green-50 border-green-200 text-green-800",
  warning: "bg-yellow-50 border-yellow-200 text-yellow-800",
  danger: "bg-red-50 border-red-200 text-red-800",
  info: "bg-blue-50 border-blue-200 text-blue-800",
};

export default function Insights({ insights }: InsightsProps) {
  if (insights.length === 0) return null;

  return (
    <div className="mt-6 space-y-3">
      <h3 className="text-lg font-semibold text-gray-800 mb-4">
        Campaign Insights
      </h3>
      <div className="grid  gap-3">
        <AnimatePresence mode="popLayout">
          {insights.map((insight, index) => (
            <motion.div
              key={insight.message}
              initial={{ opacity: 0, y: 10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.2, delay: index * 0.05 }}
              className={`p-4 rounded-xl border ${typeStyles[insight.type]} transition-colors duration-300 shadow-xs`}
            >
              <p className="text-sm font-medium leading-relaxed">
                {insight.message}
              </p>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
}
