import { motion } from 'framer-motion';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 py-20 md:px-8">
      {/* Floating geometric shapes */}
      <motion.div
        className="absolute top-20 left-[10%] w-16 h-16 md:w-24 md:h-24 border border-cyan-400/20 rotate-45"
        animate={{ y: [0, -20, 0], rotate: [45, 55, 45] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-40 right-[15%] w-12 h-12 md:w-20 md:h-20 border border-amber-400/30 rounded-full"
        animate={{ y: [0, 15, 0], scale: [1, 1.1, 1] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-32 left-[20%] w-8 h-8 md:w-16 md:h-16 bg-gradient-to-br from-cyan-400/10 to-transparent"
        animate={{ y: [0, -10, 0], x: [0, 5, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="max-w-6xl mx-auto text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="inline-flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 mb-6 md:mb-8 border border-cyan-400/30 rounded-full bg-cyan-400/5"
        >
          <span className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
          <span className="font-mono text-cyan-400 text-xs md:text-sm">Expo SDK 52 Ready</span>
        </motion.div>

        {/* Main headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="font-display text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold mb-4 md:mb-6 leading-[0.95]"
        >
          <span className="text-white">Build </span>
          <span className="relative inline-block">
            <span className="bg-gradient-to-r from-cyan-400 via-cyan-300 to-amber-400 bg-clip-text text-transparent">
              Scalable
            </span>
            <motion.span
              className="absolute -bottom-1 md:-bottom-2 left-0 w-full h-0.5 md:h-1 bg-gradient-to-r from-cyan-400 to-amber-400"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.8, duration: 0.6 }}
            />
          </span>
          <br className="hidden sm:block" />
          <span className="text-white"> Mobile Apps</span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="font-mono text-gray-400 text-sm md:text-lg lg:text-xl max-w-2xl mx-auto mb-8 md:mb-12 px-4"
        >
          High-performance React Native development with Expo.
          <br className="hidden sm:block" />
          <span className="text-cyan-400">Ship faster.</span> <span className="text-amber-400">Scale effortlessly.</span>
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3 md:gap-4 px-4"
        >
          <button className="group relative w-full sm:w-auto px-6 py-4 md:px-8 md:py-4 bg-gradient-to-r from-cyan-400 to-cyan-500 text-[#0a0e17] font-bold rounded-lg overflow-hidden transition-transform hover:scale-105 active:scale-95 min-h-[52px]">
            <span className="relative z-10 font-mono text-sm md:text-base">npx create-expo-app</span>
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-300 to-amber-400 opacity-0 group-hover:opacity-100 transition-opacity" />
          </button>
          <button className="group w-full sm:w-auto px-6 py-4 md:px-8 md:py-4 border border-gray-600 hover:border-cyan-400/50 text-gray-300 hover:text-white font-mono rounded-lg transition-all hover:bg-cyan-400/5 min-h-[52px] text-sm md:text-base">
            View Documentation
            <span className="inline-block ml-2 transition-transform group-hover:translate-x-1">→</span>
          </button>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-12 md:mt-20 grid grid-cols-3 gap-4 md:gap-8 max-w-2xl mx-auto px-4"
        >
          {[
            { value: '60fps', label: 'Native Performance' },
            { value: '2M+', label: 'Apps Built' },
            { value: '<50ms', label: 'Cold Start' },
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <div className="font-display text-xl sm:text-2xl md:text-4xl font-bold text-white">{stat.value}</div>
              <div className="font-mono text-[10px] sm:text-xs text-gray-500 mt-1">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-5 h-8 md:w-6 md:h-10 border-2 border-gray-600 rounded-full flex justify-center pt-2">
          <motion.div
            className="w-1 h-2 bg-cyan-400 rounded-full"
            animate={{ opacity: [1, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
}
