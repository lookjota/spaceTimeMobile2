import { ImageBackground, Text, TouchableOpacity, View, Image, StatusBar } from 'react-native'

import { useFonts, Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto'
// import { Baijamjuree_700Bold } from '@expo-google-fonts/bai-jamjuree'

import blurBg from '../../assets/images/bg-blur.png'
import NLWlogo from '../../assets/images/nlw-spacetime-logo.png'
import stripes from '../../assets/images/stripes.png'
// import Stripes from '../../assets/images/stripes.svg'
// import { styled } from 'nativewind'
// const StyledStripes = styled(Stripes)

export default function App() {

  const [hasLoadedFonts] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold,
    // Baijamjuree_700Bold
  })

  if (!hasLoadedFonts) {
    return null
  }


  return (
    <ImageBackground 
      source={blurBg} 
      className="relative flex-1 items-center bg-gray-900 px-8 py-10"
      // imageStyle={{ position: 'absolute', left`: '-100%'}}
    >
      <Image 
        source={stripes}
        className="absolute left-2"
      />
      {/* <Stripes/> */}
      <View className="flex-1 items-center justify-center gap-6">
          <Image
            source={NLWlogo}
          />
        <View className="space-y-2">
          <Text className="text-center font-title text-2xl leading-tight text-gray-50">
            Sua cápsula do tempo
          </Text>
          <Text className="text-center font-body text-base leading-relaxed text-gray-100">
            Colecione momentos marcantes da sua jornada e compartilhe (se
            quiser) com o mundo!
          </Text>
        </View>

        <TouchableOpacity
          activeOpacity={0.7}
          className="rounded-full bg-green-500 px-5 py-2"
        >
          <Text className="font-alt text-sm uppercase text-black">
            Cadastrar lembrança
          </Text>
        </TouchableOpacity>
      </View>

      <Text className="text-center font-body text-sm leading-relaxed text-gray-200">
        Feito com 💜 no NLW da Rocketseat
      </Text>

    </ImageBackground>
  )
}