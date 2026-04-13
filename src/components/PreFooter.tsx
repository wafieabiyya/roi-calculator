import { Calculator, Zap, Goal } from "lucide-react";

export default function PreFooter() {
  const features = [
    {
      icon: Calculator,
      title: "Perhitungan Real-Time",
      description:
        "Lihat secara langsung bagaimana perubahan parameter kampanye Anda mempengaruhi pendapatan, keuntungan, dan ROI dengan kalkulator dinamis kami.",
    },
    {
      icon: Zap,
      title: "Wawasan Berbasis Data",
      description:
        "Dapatkan rekomendasi yang dapat ditindaklanjuti berdasarkan metrik kampanye Anda untuk mengoptimalkan kinerja dan memaksimalkan profitabilitas.",
    },
    {
      icon: Goal,
      title: "Optimalkan Pengeluaran Iklan",
      description:
        "Temukan keseimbangan sempurna antara pengeluaran iklan dan hasil. Identifikasi CPR optimal untuk bisnis Anda.",
    },
  ];

  return (
    <section>
      {/* Bagian Header Section */}
      <div className="text-center mb-16 max-w-2xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-5 tracking-tight">
          Mengapa Menggunakan AdForecast Pro?
        </h2>
        <p className="text-lg text-slate-600">
          Buat keputusan yang tepat dengan prediksi real-time dan wawasan yang
          dapat ditindaklanjuti untuk kampanye produk digital Anda.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {features.map((feature, index) => {
          const Icon = feature.icon;
          return (
            <div
              key={index}
              className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm transition-shadow hover:shadow-lg"
            >
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-sky-100 border-4 border-white shadow-inner mb-6">
                <Icon className="w-7 h-7 text-sky-600" strokeWidth={1.5} />
              </div>

              <h3 className="text-xl font-bold text-slate-900 mb-3 tracking-tight">
                {feature.title}
              </h3>

              <p className="text-base text-slate-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
