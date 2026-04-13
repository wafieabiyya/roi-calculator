import React from "react";

import { Hero } from "./components/Hero";
import { Calculator } from "./features/calculator/Calculator";
import { CalculatorResult } from "./features/calculator/CalculatorResult";
import { History } from "./features/history/History";

import { motion } from "framer-motion";

const App: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
      <Hero />
      <main className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="lg:col-span-5 xl:col-span-4"
        >
          <Calculator />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
          className="lg:col-span-7 xl:col-span-8"
        >
          <CalculatorResult />
        </motion.div>
      </main>

      <History />

      <footer className="mt-20 text-center text-slate-400 text-sm">
        <p>&copy; 2026 AdForecast Pro. Crafted by Wafie Abiyya</p>
      </footer>
    </div>
  );
};

export default App;
