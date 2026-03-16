import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import HeroSection from './components/HeroSection';
import FeaturesSection from './components/FeaturesSection';
import PerformanceSection from './components/PerformanceSection';
import CodePreview from './components/CodePreview';
import Footer from './components/Footer';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-[#0a0e17] text-white overflow-x-hidden">
      {/* Animated background grid */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0a0e17]/50 to-[#0a0e17]" />
      </div>

      <AnimatePresence>
        {isLoading ? (
          <motion.div
            key="loader"
            className="fixed inset-0 z-50 flex items-center justify-center bg-[#0a0e17]"
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="relative">
              <motion.div
                className="w-24 h-24 md:w-32 md:h-32 border-2 border-cyan-400/30 rounded-lg"
                animate={{ rotate: 360 }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              />
              <motion.div
                className="absolute inset-2 border-2 border-amber-400/50 rounded-lg"
                animate={{ rotate: -360 }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
              />
              <motion.div
                className="absolute inset-4 bg-gradient-to-br from-cyan-400 to-amber-400 rounded-lg"
                animate={{ scale: [0.8, 1, 0.8] }}
                transition={{ duration: 1, repeat: Infinity }}
              />
              <motion.p
                className="absolute -bottom-10 left-1/2 -translate-x-1/2 font-mono text-cyan-400 text-xs md:text-sm whitespace-nowrap"
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 1, repeat: Infinity }}
              >
                Initializing...
              </motion.p>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>

      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoading ? 0 : 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="relative z-10"
      >
        <HeroSection />
        <FeaturesSection />
        <PerformanceSection />
        <CodePreview />
        <Footer />
      </motion.main>
    </div>
  );
}

export default App;
