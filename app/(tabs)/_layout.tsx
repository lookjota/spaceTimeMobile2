
import { ImageBackground } from "react-native"
import "../../global.css"
import blurBg from '../../assets/images/bg-blur.png'
import NLWLogo from '../../assets/images/nlw-spacetime-logo.png'
import Stripes from '../../assets/images/stripes.png'
import { api } from '../lib/api'

import { useFonts, Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto'
import * as SplashScreen from 'expo-splash-screen'
import { Slot, Stack } from "expo-router"

// import { styled } from 'nativewind'

export default function Layout() {

    const [hasLoadedFonts] = useFonts({
      Roboto_400Regular,
      Roboto_700Bold,
      // Baijamjuree_700Bold
    })

    if (!hasLoadedFonts) {
      SplashScreen.preventAutoHideAsync();
      return null;
    }

  // const StyledStripes = styled(Stripes)
  return (
    <ImageBackground
      source={blurBg}
      className="relative flex-1 bg-gray-900 "
      imageStyle={{ position: 'absolute', left: '-100%' }}
    >

      <Stack screenOptions={{ 
        headerShown: false, 
        contentStyle: { backgroundColor: 'transparent'},
      }} />
      {/* <Slot /> */}
      {/* <StyledStripes className="absolute left-2 " /> */}
    </ImageBackground>
  )
}