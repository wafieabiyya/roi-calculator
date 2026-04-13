import React from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import {
  updateInput,
  selectPrice,
  selectAdSpend,
  selectCpr,
  selectAvgOrderValue,
} from "./calculator.slice";
import { InputControl } from "../../components/InputControl";
import { RefreshCcw } from "lucide-react";
import { resetInputs } from "./calculator.slice";

export const Calculator: React.FC = () => {
  const dispatch = useAppDispatch();
  const price = useAppSelector(selectPrice);
  const adSpend = useAppSelector(selectAdSpend);
  const cpr = useAppSelector(selectCpr);
  const avgOrderValue = useAppSelector(selectAvgOrderValue);

  const handleChange = (
    key: "price" | "adSpend" | "cpr" | "avgOrderValue",
    value: number,
  ) => {
    dispatch(updateInput({ key, value }));
  };

  return (
    <div className="glass-card p-6 h-full">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-xl font-bold text-slate-800">Parameters</h3>
        <button
          onClick={() => dispatch(resetInputs())}
          className="p-2 text-slate-400 hover:text-purple-600 transition-colors"
          title="Reset"
        >
          <RefreshCcw size={18} />
        </button>
      </div>

      <div className="space-y-8">
        <InputControl
          label="Harga Produk"
          value={price}
          min={1000}
          max={10000000}
          step={5000}
          isCurrency
          onChange={(v) => handleChange("price", v)}
        />
        <InputControl
          label="Pengeluaran Iklan Bulanan"
          value={adSpend}
          min={100000}
          max={100000000}
          step={100000}
          isCurrency
          onChange={(v) => handleChange("adSpend", v)}
        />
        <InputControl
          label="Cost per Result (CPR)"
          value={cpr}
          min={100}
          max={500000}
          step={100}
          isCurrency
          onChange={(v) => handleChange("cpr", v)}
        />
        <InputControl
          label="Average Order Value"
          value={avgOrderValue}
          min={1000}
          max={10000000}
          step={5000}
          isCurrency
          onChange={(v) => handleChange("avgOrderValue", v)}
        />
      </div>
    </div>
  );
};
