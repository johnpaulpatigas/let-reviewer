import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.johnpaulpatigas.letreviewer',
  appName: 'LET Reviewer',
  webDir: 'dist',
  plugins: {
    SystemBars: {
      insetsHandling: 'disable',
    },
    EdgeToEdge: {
      statusBarColor: '#ffffff',
      navigationBarColor: '#ffffff',
    },
  },
};

export default config;
