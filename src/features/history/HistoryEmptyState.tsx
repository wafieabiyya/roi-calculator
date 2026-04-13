import { History as HistoryIcon } from "lucide-react";

export default function HistoryEmptyState() {
  return (
    <div className="flex flex-col items-center justify-center py-16 text-center text-slate-500">
      <HistoryIcon size={40} className="mb-4 opacity-40" />

      <h4 className="text-lg font-semibold text-slate-700">
        Belum ada riwayat
      </h4>

      <p className="text-sm mt-1 max-w-xs">
        Hasil perhitungan yang kamu simpan akan muncul di sini.
      </p>
    </div>
  );
}
