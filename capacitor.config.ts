import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.sztoja.game',
  appName: 'SztojaGame',
  webDir: 'www',
  // IDE jönnek a plugin beállítások:
  plugins: {
    AdMob: {
      // Ez itt a hivatalos Google Android teszt App ID. 
      // Ha élesíteni akarod, majd cseréld le a sajátodra!
      appId: 'ca-app-pub-3940256099942544~3347511713'
    }
  }
};

export default config;
