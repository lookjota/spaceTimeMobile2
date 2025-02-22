import { Text, TouchableOpacity, View, Image } from 'react-native'


// import { Baijamjuree_700Bold } from '@expo-google-fonts/bai-jamjuree'

import blurBg from '../../assets/images/bg-blur.png'
import NLWLogo from '../../assets/images/nlw-spacetime-logo.png'
import stripes from '../../assets/images/stripes.png'

import { makeRedirectUri, useAuthRequest } from 'expo-auth-session'
import { useEffect } from 'react'


import { api } from '../lib/api'
import * as SecureStore from 'expo-secure-store'
import { router } from 'expo-router'


const discovery = {
  authorization: 'https://github.com/login/oauth/authorize',
  tokenEndpoint: 'https://gitbus.com/login/oauth/access_token',
  revocationEndpoint: 'https://github.com/settings/connections/applications/Ov23li3TQ7wunAKlQ2ll'
};


export default function App() {



  const [request, response, signInWithGithub ] = useAuthRequest(
    {
      clientId: 'Ov23li3TQ7wunAKlQ2ll',
      scopes: ['identity'],
      redirectUri: makeRedirectUri({
        scheme: 'nlwspacetime'
      }),
    },
    discovery,
  )

  async function handleGithubOAuthCode(code: string) {
    const response = await api.post('/register', {
      code,
    })
    const { token } = response.data

    await SecureStore.setItemAsync('token', token)

    router.push('/memories')
    

  }


  useEffect(() => {
    if (response?.type === 'success') {
      const { code } = response.params
    }
  }, [response])




  return (
    <View className=" flex-1 items-center = px-8 py-10">
      <Image 
        source={stripes}
        className="absolute left-2"
      />
      {/* <Stripes/> */}
      <View className="flex-1 items-center justify-center gap-6">
          <Image
            source={NLWLogo}
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
          onPress={() => signInWithGithub}
        >
          <Text className="font-alt text-sm uppercase text-black">
            Cadastrar lembrança
          </Text>
        </TouchableOpacity>
      </View>

      <Text className="text-center font-body text-sm leading-relaxed text-gray-200">
        Feito com 💜 no NLW da Rocketseat
      </Text>
    </View>
  )
}