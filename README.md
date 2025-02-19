# Welcome to your Expo app 👋

This is an [Expo](https://expo.dev) project created with [`create-expo-app`](https://www.npmjs.com/package/create-expo-app).

## Get started

1. Install dependencies

   ```bash
   npm install
   ```

2. Start the app

   ```bash
    npx expo start
   ```

In the output, you'll find options to open the app in a

- [development build](https://docs.expo.dev/develop/development-builds/introduction/)
- [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
- [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/)
- [Expo Go](https://expo.dev/go), a limited sandbox for trying out app development with Expo

You can start developing by editing the files inside the **app** directory. This project uses [file-based routing](https://docs.expo.dev/router/introduction).

## Get a fresh project

When you're ready, run:

```bash
npm run reset-project
```

This command will move the starter code to the **app-example** directory and create a blank **app** directory where you can start developing.

## Learn more

To learn more about developing your project with Expo, look at the following resources:

- [Expo documentation](https://docs.expo.dev/): Learn fundamentals, or go into advanced topics with our [guides](https://docs.expo.dev/guides).
- [Learn Expo tutorial](https://docs.expo.dev/tutorial/introduction/): Follow a step-by-step tutorial where you'll create a project that runs on Android, iOS, and the web.

## Join the community

Join our community of developers creating universal apps.

- [Expo on GitHub](https://github.com/expo/expo): View our open source platform and contribute.
- [Discord community](https://chat.expo.dev): Chat with Expo users and ask questions.


$ npx create-expo-app mobile

- starter

- npm run dev

### install dependencies
- native wind

	 **


$ 

npm run web

npx expo start --clear

```````

expo install

Installation with Expo SDK 50+
1. Install NativeWind

npx expo install nativewind tailwindcss react-native-reanimated@3.16.2 react-native-safe-area-context

2. Setup Tailwind CSS
Run npx tailwindcss init to create a tailwind.config.js file

Add the paths to all of your component files in your tailwind.config.js file.

tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {},
  },
  plugins: [],
}

Create a CSS file and add the Tailwind directives

global.css
@tailwind base;
@tailwind components;
@tailwind utilities;

3. Add the Babel preset
babel.config.js
module.exports = function (api) {
  api.cache(true);
  return {
    presets: [
      ["babel-preset-expo", { jsxImportSource: "nativewind" }],
      "nativewind/babel",
    ],
  };
};

4. Modify your metro.config.js
metro.config.js
const { getDefaultConfig } = require("expo/metro-config");
const { withNativeWind } = require('nativewind/metro');

const config = getDefaultConfig(__dirname)

module.exports = withNativeWind(config, { input: './global.css' })


5. Import your CSS file
App.js
import "./global.css"

export default App() {
  /* Your App */
}

@_layout.tsx

import "../../global.css";


### install dependencies fontes

$ npx expo install @expo-google-fonts/roboto @expo-google-fonts/bai-jamjuree expo-font


### correct error
@ assets/assets.d.ts
declare module '*.png'

declare module "*.svg" {
  import React from "react";
  import { SvgProps } from "react-native-svg";
  const content: React.FC<SvgProps>;
  export default content;
}

### install Dependencies expo-auth-session expo-crypto

$ npx expo install expo-auth-session expo-crypto

- AuthSession is the easiest way to add web browser based authentication
(for example, browser based OAuth flows) to your app, built on top of Webrowser and Crypto


### install dependencies axios

$ npm i axios

### install dependencies 
$ npx expo install expo-secure-store


- salvar informacoes no mobile
- biblioteca para trabalhar com storage de informacoes mais sensiveis

- caso va publicar o app
- precisa fazer uma configuracao seguindo a documentacao
@https://docs.expo.dev/versions/latest/sdk/securestore/

> exempling encryption prompt


### dependencies install expo router

$ npx expo install expo-router react-native-safe-area-context react-native-screens expo-linking expo-constants expo-status-bar

- 



