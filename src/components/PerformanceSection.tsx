import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

const metrics = [
  { label: 'JS Bundle Size', value: 1.2, unit: 'MB', max: 5, color: 'cyan' },
  { label: 'Time to Interactive', value: 0.8, unit: 's', max: 3, color: 'amber' },
  { label: 'Memory Usage', value: 45, unit: 'MB', max: 150, color: 'cyan' },
  { label: 'Frame Rate', value: 60, unit: 'fps', max: 60, color: 'amber' },
];

function AnimatedCounter({ value, duration = 2 }: { value: number; duration?: number }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const increment = value / (duration * 60);
    const timer = setInterval(() => {
      start += increment;
      if (start >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 1000 / 60);
    return () => clearInterval(timer);
  }, [value, duration]);

  return <>{count.toFixed(value < 10 ? 1 : 0)}</>;
}

export default function PerformanceSection() {
  return (
    <section className="relative py-20 md:py-32 px-4 md:px-8 overflow-hidden">
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-400/5 to-transparent" />

      <div className="max-w-6xl mx-auto relative">
        {/* Section header */}
        <div className="mb-12 md:mb-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-3 md:gap-4 mb-4 md:mb-6"
          >
            <div className="h-px w-8 md:w-12 bg-gradient-to-r from-amber-400 to-transparent" />
            <span className="font-mono text-amber-400 text-xs md:text-sm tracking-wider">PERFORMANCE</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-3xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6"
          >
            Blazing fast
            <br />
            <span className="text-gray-500">by default</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-mono text-gray-400 text-sm md:text-base max-w-xl"
          >
            Expo optimizes your app automatically. Hermes engine, tree shaking,
            and smart bundling ensure peak performance.
          </motion.p>
        </div>

        {/* Performance metrics */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
          {metrics.map((metric, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative p-5 md:p-6 border border-gray-800 rounded-xl bg-[#0a0e17]/80 backdrop-blur-sm"
            >
              <div className="flex justify-between items-start mb-4 md:mb-6">
                <span className="font-mono text-xs md:text-sm text-gray-500">{metric.label}</span>
                <div className={`px-2 py-1 rounded text-xs font-mono ${metric.color === 'cyan' ? 'bg-cyan-400/10 text-cyan-400' : 'bg-amber-400/10 text-amber-400'}`}>
                  optimal
                </div>
              </div>

              <div className="flex items-baseline gap-1 mb-3 md:mb-4">
                <span className="font-display text-4xl md:text-5xl font-bold text-white">
                  <AnimatedCounter value={metric.value} />
                </span>
                <span className="font-mono text-lg md:text-xl text-gray-500">{metric.unit}</span>
              </div>

              {/* Progress bar */}
              <div className="h-1.5 md:h-2 bg-gray-800 rounded-full overflow-hidden">
                <motion.div
                  className={`h-full rounded-full ${metric.color === 'cyan' ? 'bg-gradient-to-r from-cyan-400 to-cyan-500' : 'bg-gradient-to-r from-amber-400 to-amber-500'}`}
                  initial={{ width: 0 }}
                  whileInView={{ width: `${(metric.value / metric.max) * 100}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.5, delay: i * 0.1, ease: "easeOut" }}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Terminal-style info box */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-8 md:mt-12 p-4 md:p-6 border border-cyan-400/30 rounded-xl bg-cyan-400/5"
        >
          <div className="flex items-start gap-3 md:gap-4">
            <div className="flex-shrink-0 w-8 h-8 md:w-10 md:h-10 rounded-lg bg-cyan-400/20 flex items-center justify-center">
              <span className="text-cyan-400 text-base md:text-lg">✓</span>
            </div>
            <div>
              <h4 className="font-display text-base md:text-lg font-semibold text-white mb-1">Hermes Engine Enabled</h4>
              <p className="font-mono text-xs md:text-sm text-gray-400">
                Automatic bytecode compilation reduces startup time by 50% and memory usage by 30%.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
