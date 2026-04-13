import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import {
  selectHistory,
  removeCalculation,
  clearHistory,
} from "./history.slice";
import { History as HistoryIcon } from "lucide-react";
import { AnimatePresence } from "framer-motion";

import HistoryCard from "./HistoryCard";
import HistoryEmptyState from "./HistoryEmptyState";

export default function History() {
  const dispatch = useAppDispatch();
  const history = useAppSelector(selectHistory);

  const isEmpty = history.length === 0;

  return (
    <section className="py-12">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-2xl font-bold text-slate-800 flex items-center gap-2">
          <HistoryIcon size={24} className="text-purple-600" />
          Riwayat Kalkulasi
        </h3>

        {!isEmpty && (
          <button
            onClick={() => dispatch(clearHistory())}
            className="text-sm font-medium text-rose-500 cursor-pointer hover:text-rose-600 transition-colors"
          >
            Hapus Semua
          </button>
        )}
      </div>

      {isEmpty ? (
        <HistoryEmptyState />
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <AnimatePresence mode="popLayout">
            {history.map((item) => (
              <HistoryCard
                key={item.id}
                item={item}
                onDelete={(id) => dispatch(removeCalculation(id))}
              />
            ))}
          </AnimatePresence>
        </div>
      )}
    </section>
  );
}
