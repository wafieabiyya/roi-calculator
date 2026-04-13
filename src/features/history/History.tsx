import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import {
  selectHistory,
  removeCalculation,
  clearHistory,
} from "./history.slice";
import {
  formatDateWithDay,
  formatIDR,
  formatPercent,
} from "../../utils/format";
import { Trash2, Clock, History as HistoryIcon } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function History() {
  const dispatch = useAppDispatch();

  const history = useAppSelector(selectHistory);

  if (history.length === 0) return null;

  return (
    <section className="py-12">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-2xl font-bold text-slate-800 flex items-center gap-2">
          <HistoryIcon size={24} className="text-purple-600" />
          Riwayat Kalkulasi
        </h3>
        <button
          onClick={() => dispatch(clearHistory())}
          className="text-sm font-medium text-rose-500 cursor-pointer hover:text-rose-600 transition-colors"
        >
          Hapus Semua
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <AnimatePresence mode="popLayout">
          {history.map((item) => (
            <motion.div
              key={item.id}
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
                  onClick={() => dispatch(removeCalculation(item.id))}
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
                    className={`text-lg font-bold ${item.profit > 0 ? "text-emerald-600" : "text-rose-600"}`}
                  >
                    {formatIDR(item.profit)}
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-xs font-medium text-slate-500 uppercase">
                    ROI
                  </div>
                  <div
                    className={`text-xl font-black ${item.roi > 0 ? "text-emerald-600" : "text-rose-600"}`}
                  >
                    {formatPercent(item.roi)}
                  </div>
                </div>
              </div>

              <div
                className={`absolute bottom-0 left-0 right-0 h-1 bg-linear-to-r ${item.profit > 0 ? "from-emerald-400 to-teal-500" : "from-rose-400 to-orange-500"}`}
              />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </section>
  );
}
