import { motion } from 'framer-motion';

const features = [
  {
    icon: '⚡',
    title: 'Instant Updates',
    description: 'Push updates instantly with EAS Update. No app store review required.',
    color: 'cyan',
  },
  {
    icon: '🔧',
    title: 'Native Modules',
    description: 'Access native APIs with pre-built modules or create custom native code.',
    color: 'amber',
  },
  {
    icon: '📱',
    title: 'Cross-Platform',
    description: 'One codebase for iOS, Android, and Web. True native performance.',
    color: 'cyan',
  },
  {
    icon: '🚀',
    title: 'EAS Build',
    description: 'Cloud builds for production-ready apps. CI/CD out of the box.',
    color: 'amber',
  },
  {
    icon: '🎨',
    title: 'Rich UI Library',
    description: 'Beautiful components, gestures, and animations that feel native.',
    color: 'cyan',
  },
  {
    icon: '🔒',
    title: 'Enterprise Ready',
    description: 'Security, compliance, and support for production applications.',
    color: 'amber',
  },
];

export default function FeaturesSection() {
  return (
    <section className="relative py-20 md:py-32 px-4 md:px-8">
      {/* Section header */}
      <div className="max-w-6xl mx-auto mb-12 md:mb-20">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-3 md:gap-4 mb-4 md:mb-6"
        >
          <div className="h-px w-8 md:w-12 bg-gradient-to-r from-cyan-400 to-transparent" />
          <span className="font-mono text-cyan-400 text-xs md:text-sm tracking-wider">FEATURES</span>
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-3xl md:text-5xl lg:text-6xl font-bold"
        >
          Everything you need
          <br />
          <span className="text-gray-500">to ship fast</span>
        </motion.h2>
      </div>

      {/* Features grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
        {features.map((feature, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="group relative p-5 md:p-6 border border-gray-800 rounded-xl bg-gray-900/30 hover:bg-gray-900/60 transition-all duration-300 hover:border-gray-700"
          >
            {/* Hover glow effect */}
            <div className={`absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br ${feature.color === 'cyan' ? 'from-cyan-400/5' : 'from-amber-400/5'} to-transparent`} />

            {/* Icon */}
            <div className="relative mb-4">
              <span className="text-3xl md:text-4xl">{feature.icon}</span>
            </div>

            {/* Content */}
            <h3 className="relative font-display text-lg md:text-xl font-semibold mb-2 text-white group-hover:text-white transition-colors">
              {feature.title}
            </h3>
            <p className="relative font-mono text-xs md:text-sm text-gray-400 leading-relaxed">
              {feature.description}
            </p>

            {/* Corner accent */}
            <div className={`absolute top-0 right-0 w-12 md:w-16 h-12 md:h-16 overflow-hidden rounded-tr-xl`}>
              <div className={`absolute top-2 right-2 w-6 md:w-8 h-6 md:h-8 border-t border-r ${feature.color === 'cyan' ? 'border-cyan-400/20' : 'border-amber-400/20'} group-hover:border-opacity-50 transition-colors`} />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
