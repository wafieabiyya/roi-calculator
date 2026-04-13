import React from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { selectCalculatorResult } from "./calculator.slice";

import { formatIDR, formatPercent, formatNumber } from "../../utils/format";
import { TrendingUp, TrendingDown, Save } from "lucide-react";
import { addCalculation } from "../history/history.slice";
import { motion } from "framer-motion";
import { generateInsights } from "../insight/insight.generator";
import Insights from "../insight/Insights";
import { StatCard } from "../../components/StatCard";

export const CalculatorResult: React.FC = () => {
  const dispatch = useAppDispatch();

  const {
    roi,
    revenue,
    profit,
    results: totalResults,
    cpr: cprTarget,
    marginPerResult,
    avgOrderValue,
    price,
    adSpend,
  } = useAppSelector(selectCalculatorResult);

  const isProfitable = profit > 0;

  const handleSave = () => {
    dispatch(addCalculation({ roi, profit }));
  };

  const insights = generateInsights({
    price,
    adSpend,
    cpr: cprTarget,
    avgOrderValue,
    results: totalResults,
    revenue,
    profit,
    roi,
    marginPerResult,
  });

  return (
    <div className="flex flex-col gap-6">
      {/* ROI Highlight Card */}
      <motion.div
        layout
        className={`p-8 rounded-2xl shadow-xl border border-white/20 flex flex-col items-center justify-center text-center transition-colors duration-500 ${
          isProfitable
            ? "bg-linear-to-br from-emerald-500 to-teal-600 text-white"
            : "bg-linear-to-br from-rose-500 to-orange-600 text-white"
        }`}
      >
        <span className="text-sm font-medium uppercase tracking-widest mb-2 opacity-80">
          Estimated ROI
        </span>
        <motion.h2
          key={roi}
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="text-6xl font-black mb-2"
        >
          {formatPercent(roi)}
        </motion.h2>
        <div className="flex items-center gap-2 text-lg font-semibold">
          {isProfitable ? <TrendingUp size={24} /> : <TrendingDown size={24} />}
          {isProfitable ? "Kampanye Menguntungkan" : "Kampanye Merugi"}
        </div>
      </motion.div>

      {/* stats Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        <StatCard label="Pendapatan" value={formatIDR(revenue)} />
        <StatCard
          label="Keuntungan"
          value={formatIDR(profit)}
          color={isProfitable ? "text-emerald-600" : "text-rose-600"}
        />
        <StatCard label="Total Results" value={formatNumber(totalResults)} />
        <StatCard label="CPR Target" value={formatIDR(cprTarget)} />
        <StatCard label="Revenue per Result" value={formatIDR(avgOrderValue)} />
        <StatCard
          label="Margin per Result"
          value={formatIDR(marginPerResult)}
          color={marginPerResult > 0 ? "text-emerald-600" : "text-rose-600"}
        />
      </div>

      {/* dynamic insights */}
      <Insights insights={insights} />

      <button
        onClick={handleSave}
        className="btn-primary flex items-center justify-center gap-2 w-full py-4 text-lg cursor-pointer mt-2"
      >
        <Save size={20} />
        Simpan Kalkulasi
      </button>
    </div>
  );
};
