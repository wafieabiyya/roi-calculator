import React from "react";
import { ChevronUp, ChevronDown } from "lucide-react";
import { formatIDR, formatNumber } from "../utils/format";

interface InputControlProps {
  label: string;
  value: number;
  min: number;
  max: number;
  step?: number;
  onChange: (value: number) => void;
  isCurrency?: boolean;
}

export const InputControl: React.FC<InputControlProps> = ({
  label,
  value,
  min,
  max,
  step = 1,
  onChange,
  isCurrency = false,
}) => {
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Remove non-numeric characters for parsing if they exist
    const rawValue = e.target.value.replace(/[^0-9]/g, "");
    const newValue = Number(rawValue);
    if (!isNaN(newValue)) {
      onChange(Math.min(max, Math.max(min, newValue)));
    }
  };

  const handleIncrement = () => {
    onChange(Math.min(max, value + step));
  };

  const handleDecrement = () => {
    onChange(Math.max(min, value - step));
  };

  // Formatted value for the input field
  const displayValue = isCurrency ? formatIDR(value) : formatNumber(value);

  return (
    <div className="flex flex-col gap-3 group">
      <div className="flex justify-between items-center">
        <label className="text-sm font-semibold text-slate-500 group-hover:text-purple-600 transition-colors">
          {label}
        </label>
        <div className="text-xs font-bold text-slate-400">
          {isCurrency ? formatIDR(value) : formatNumber(value)}
        </div>
      </div>

      <div className="flex items-center gap-4">
        {/* Slider */}
        <div className="flex-1 relative py-4">
          <input
            type="range"
            min={min}
            max={max}
            step={step}
            value={value}
            onChange={(e) => onChange(Number(e.target.value))}
            className="w-full"
          />
        </div>

        {/* Custom Numeric Input with Lucide Icons */}
        <div className="relative flex items-center">
          <input
            type="text"
            value={displayValue}
            onChange={handleInputChange}
            className="glass-input w-40 pr-10 text-right font-bold text-purple-700"
          />
          <div className="absolute right-1 flex flex-col border-l border-slate-200 pl-1">
            <button
              onClick={handleIncrement}
              className="p-0.5 hover:text-purple-600 text-slate-400 transition-colors"
              type="button"
            >
              <ChevronUp size={14} strokeWidth={3} />
            </button>
            <button
              onClick={handleDecrement}
              className="p-0.5 hover:text-purple-600 text-slate-400 transition-colors"
              type="button"
            >
              <ChevronDown size={14} strokeWidth={3} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
