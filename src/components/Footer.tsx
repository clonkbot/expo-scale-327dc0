import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <footer className="relative py-12 md:py-16 px-4 md:px-8 border-t border-gray-800/50">
      <div className="max-w-6xl mx-auto">
        {/* Main footer content */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 mb-12 md:mb-16">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="flex items-center gap-2 mb-4"
            >
              <div className="w-8 h-8 bg-gradient-to-br from-cyan-400 to-amber-400 rounded-lg" />
              <span className="font-display text-xl font-bold">Expo</span>
            </motion.div>
            <p className="font-mono text-xs text-gray-500 max-w-xs">
              Build native apps with React. Deploy everywhere.
            </p>
          </div>

          {/* Links */}
          {[
            {
              title: 'Product',
              links: ['Features', 'Pricing', 'Changelog', 'Roadmap'],
            },
            {
              title: 'Developers',
              links: ['Documentation', 'API Reference', 'Guides', 'Examples'],
            },
            {
              title: 'Company',
              links: ['About', 'Blog', 'Careers', 'Contact'],
            },
          ].map((section, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <h4 className="font-mono text-xs text-gray-400 uppercase tracking-wider mb-4">
                {section.title}
              </h4>
              <ul className="space-y-2 md:space-y-3">
                {section.links.map((link, j) => (
                  <li key={j}>
                    <a
                      href="#"
                      className="font-mono text-xs md:text-sm text-gray-500 hover:text-cyan-400 transition-colors inline-block py-1"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="pt-6 md:pt-8 border-t border-gray-800/50">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-4 md:gap-6">
              <span className="font-mono text-xs text-gray-600">
                © 2024 Expo
              </span>
              <a href="#" className="font-mono text-xs text-gray-600 hover:text-gray-400 transition-colors">
                Privacy
              </a>
              <a href="#" className="font-mono text-xs text-gray-600 hover:text-gray-400 transition-colors">
                Terms
              </a>
            </div>
            <div className="flex items-center gap-4">
              {['GitHub', 'Twitter', 'Discord'].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="font-mono text-xs text-gray-600 hover:text-cyan-400 transition-colors py-2"
                >
                  {social}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Attribution footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-8 md:mt-12 pt-6 border-t border-gray-800/30 text-center"
        >
          <p className="font-mono text-[10px] md:text-xs text-gray-600">
            Requested by <span className="text-gray-500">@web-user</span> · Built by <span className="text-gray-500">@clonkbot</span>
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
