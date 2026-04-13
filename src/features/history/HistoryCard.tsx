import { Trash2, Clock } from "lucide-react";
import { motion } from "framer-motion";
import {
  formatDateWithDay,
  formatIDR,
  formatPercent,
} from "../../utils/format";
import type { SavedCalculation } from "./history.slice";

interface Props {
  item: SavedCalculation;
  onDelete: (id: string) => void;
}

export default function HistoryCard({ item, onDelete }: Props) {
  const isProfit = item.profit > 0;

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      className="glass-card p-4 flex flex-col gap-3 group relative overflow-hidden"
    >
      <div className="flex justify-between items-start">
        <div className="flex items-center gap-2 text-xs text-slate-400">
          <Clock size={12} />
          {formatDateWithDay(item.timestamp)}
        </div>
        <button
          onClick={() => onDelete(item.id)}
          className="text-slate-300 hover:text-rose-500 transition-colors cursor-pointer"
        >
          <Trash2 size={16} />
        </button>
      </div>

      <div className="flex justify-between items-end">
        <div>
          <div className="text-xs font-medium text-slate-500 uppercase">
            Profit
          </div>
          <div
            className={`text-lg font-bold ${
              isProfit ? "text-emerald-600" : "text-rose-600"
            }`}
          >
            {formatIDR(item.profit)}
          </div>
        </div>

        <div className="text-right">
          <div className="text-xs font-medium text-slate-500 uppercase">
            ROI
          </div>
          <div
            className={`text-xl font-black ${
              isProfit ? "text-emerald-600" : "text-rose-600"
            }`}
          >
            {formatPercent(item.roi)}
          </div>
        </div>
      </div>

      <div
        className={`absolute bottom-0 left-0 right-0 h-1 bg-linear-to-r ${
          isProfit
            ? "from-emerald-400 to-teal-500"
            : "from-rose-400 to-orange-500"
        }`}
      />
    </motion.div>
  );
}
