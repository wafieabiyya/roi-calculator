import React from "react";

interface StatCardProps {
  label: string;
  value: string;
  color?: string;

  icon?: React.ReactNode;
}

export const StatCard: React.FC<StatCardProps> = ({
  label,
  value,
  color,
  icon,
}) => (
  <div className="glass-card p-4 flex flex-col gap-2 transition-all hover:shadow-md">
    <div className="flex items-center justify-between">
      <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
        {label}
      </span>

      {icon && <div className="opacity-80">{icon}</div>}
    </div>

    <span className={`text-xl font-bold truncate ${color || "text-slate-800"}`}>
      {value}
    </span>
  </div>
);
