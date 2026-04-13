import React from "react";
interface StatCardProps {
  label: string;
  value: string;
  color?: string;
}

export const StatCard: React.FC<StatCardProps> = ({ label, value, color }) => (
  <div className="glass-card p-4 flex flex-col gap-1">
    <span className="text-xs font-medium text-slate-500 uppercase tracking-wider">
      {label}
    </span>
    <span className={`text-lg font-bold truncate ${color || "text-slate-800"}`}>
      {value}
    </span>
  </div>
);
