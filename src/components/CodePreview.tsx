import { motion } from 'framer-motion';
import { useState } from 'react';

const codeSnippets = {
  app: `import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Welcome to Expo! 🎉
      </Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0a0e17',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
  },
});`,
  router: `// app/_layout.tsx
import { Stack } from 'expo-router';

export default function Layout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: '#0a0e17',
        },
        headerTintColor: '#00d4ff',
      }}
    />
  );
}

// app/index.tsx
import { Link } from 'expo-router';
import { View, Text } from 'react-native';

export default function Home() {
  return (
    <View>
      <Link href="/profile">
        Go to Profile
      </Link>
    </View>
  );
}`,
  api: `import * as Notifications from 'expo-notifications';
import * as Camera from 'expo-camera';
import * as Location from 'expo-location';

// Push Notifications
await Notifications.scheduleNotificationAsync({
  content: {
    title: "Welcome!",
    body: 'Thanks for using our app',
  },
  trigger: { seconds: 2 },
});

// Camera Access
const { status } = await Camera.requestPermissionsAsync();

// Location Services
const location = await Location.getCurrentPositionAsync({});
console.log(location.coords);`,
};

type TabKey = keyof typeof codeSnippets;

export default function CodePreview() {
  const [activeTab, setActiveTab] = useState<TabKey>('app');

  const tabs: { key: TabKey; label: string }[] = [
    { key: 'app', label: 'App.tsx' },
    { key: 'router', label: 'Router' },
    { key: 'api', label: 'APIs' },
  ];

  return (
    <section className="relative py-20 md:py-32 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="mb-8 md:mb-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-3 md:gap-4 mb-4 md:mb-6"
          >
            <div className="h-px w-8 md:w-12 bg-gradient-to-r from-cyan-400 to-transparent" />
            <span className="font-mono text-cyan-400 text-xs md:text-sm tracking-wider">CODE</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-3xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6"
          >
            Simple API
            <br />
            <span className="text-gray-500">powerful results</span>
          </motion.h2>
        </div>

        {/* Code editor mockup */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative rounded-xl border border-gray-800 overflow-hidden bg-[#0d1117]"
        >
          {/* Window controls */}
          <div className="flex items-center justify-between px-3 md:px-4 py-2 md:py-3 border-b border-gray-800 bg-[#161b22]">
            <div className="flex items-center gap-1.5 md:gap-2">
              <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-red-500/80" />
              <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-yellow-500/80" />
              <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-green-500/80" />
            </div>
            <div className="flex gap-1">
              {tabs.map((tab) => (
                <button
                  key={tab.key}
                  onClick={() => setActiveTab(tab.key)}
                  className={`px-3 py-1.5 md:px-4 md:py-1.5 text-xs font-mono rounded-md transition-all min-h-[36px] md:min-h-[32px] ${
                    activeTab === tab.key
                      ? 'bg-cyan-400/10 text-cyan-400 border border-cyan-400/30'
                      : 'text-gray-500 hover:text-gray-300 hover:bg-gray-800/50'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Code content */}
          <div className="p-3 md:p-6 overflow-x-auto">
            <pre className="font-mono text-xs md:text-sm leading-relaxed">
              <code>
                {codeSnippets[activeTab].split('\n').map((line, i) => (
                  <div key={i} className="flex">
                    <span className="w-6 md:w-8 text-gray-600 select-none text-right pr-3 md:pr-4 flex-shrink-0">
                      {i + 1}
                    </span>
                    <span className="text-gray-300 whitespace-pre">
                      {highlightCode(line)}
                    </span>
                  </div>
                ))}
              </code>
            </pre>
          </div>

          {/* Floating accent */}
          <div className="absolute -bottom-px left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent" />
        </motion.div>

        {/* Quick start command */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-6 md:mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-4"
        >
          <div className="flex-1 flex items-center gap-3 px-4 py-3 md:py-4 bg-gray-900/50 border border-gray-800 rounded-lg">
            <span className="text-amber-400 font-mono">$</span>
            <code className="font-mono text-xs md:text-sm text-gray-300 overflow-x-auto">
              npx create-expo-app@latest my-app --template tabs
            </code>
          </div>
          <button className="px-6 py-3 md:py-4 bg-gray-800 hover:bg-gray-700 text-white font-mono text-sm rounded-lg transition-colors min-h-[52px] md:min-h-[48px]">
            Copy
          </button>
        </motion.div>
      </div>
    </section>
  );
}

function highlightCode(line: string): React.ReactNode {
  // Simple syntax highlighting
  const keywords = ['import', 'export', 'default', 'function', 'const', 'return', 'from', 'await', 'async'];
  const components = ['View', 'Text', 'StatusBar', 'Stack', 'Link', 'StyleSheet'];

  let result = line;

  // Highlight strings
  result = result.replace(/(["'`][^"'`]*["'`])/g, '<span class="text-amber-400">$1</span>');

  // Highlight keywords
  keywords.forEach(keyword => {
    const regex = new RegExp(`\\b(${keyword})\\b`, 'g');
    result = result.replace(regex, '<span class="text-cyan-400">$1</span>');
  });

  // Highlight components
  components.forEach(comp => {
    const regex = new RegExp(`\\b(${comp})\\b`, 'g');
    result = result.replace(regex, '<span class="text-purple-400">$1</span>');
  });

  // Highlight comments
  result = result.replace(/(\/\/.*$)/g, '<span class="text-gray-600">$1</span>');

  return <span dangerouslySetInnerHTML={{ __html: result }} />;
}
