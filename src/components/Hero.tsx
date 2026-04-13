import React from "react";
import { motion } from "framer-motion";

export const Hero: React.FC = () => {
  return (
    <section className="py-12 px-4 text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <span className="inline-block px-4 py-1.5 mb-6 text-xs font-bold tracking-wider text-purple-600 uppercase bg-purple-100 rounded-full border border-purple-200">
          AdForecast Pro v1.0
        </span>
        <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 mb-6 bg-clip-text bg-linear-to-r from-purple-700 to-blue-600">
          Hitung ROI Kampanye Iklan Anda <br /> Secara Real-Time
        </h1>
        <p className="max-w-2xl mx-auto text-lg text-slate-600 leading-relaxed">
          Optimalkan pengeluaran iklan Anda dengan prediksi yang akurat.
          Sesuaikan parameter Anda dan lihat hasilnya berubah secara instan.
        </p>
      </motion.div>
    </section>
  );
};
