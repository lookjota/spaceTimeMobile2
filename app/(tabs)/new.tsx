import { Button, ScrollView, Switch, Text, TextInput, TouchableOpacity, View } from "react-native";

import Icon from '@expo/vector-icons/Feather'

import NLWLogo from '../../assets/images/nlw-spacetime-logo.png'
import { Link } from "expo-router";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useState } from "react";

export default function NewMemory() {

  const { bottom, top } = useSafeAreaInsets ()

  const [isPublic, setIsPublic] = useState(false)

  return (
    <ScrollView 
      className="flex-1 px-8" 
      contentContainerStyle={{ paddingBottom: bottom, paddingTop: top}}
    >
      <View className="flex-row items-center justify-between">
        <NLWLogo />

        <Link href="/memories" asChild>
          <TouchableOpacity
            className="h-10 w-10 items-center justify-center rounded-full bg-purple-500"
          >
            <Icon name="arrow-left" size={16} color="#FFF"/>
          </TouchableOpacity>
        </Link>
      </View>
      <View className="mt-6 space-y-6">
        <View className="flex-row items-center gap-2">
          <Switch 
            value={isPublic} 
            onValueChange={setIsPublic}
            trackColor={{ false: '#767577', true: '#372560'}}
            thumbColor={isPublic ? '#9b79ea' : '#9e9ea0'}
          />
          <Text
            className="font-body text-base text-gray-200"
          >
            Tornar Memoria Publica
          </Text>

        </View>
        
        <TouchableOpacity
          activeOpacity={0.7}
          className="h-32 items-center justify-center rouded-lg border border-dashed border-gray-500 bg-black/20"
        >
          <View className="flex-row items-center gap-2">
            <Icon name="image" color="#FFF" />
            <Text className="font-body text-sm text-gray-200">
              Adicionar foto ou video de capa
            </Text>
          </View>
        </TouchableOpacity>
        <TextInput
          multiline
          className="p-0 font-body text-lg text-gray-50"
          placeholderTextColor="#56565a"
          placeholder="Fique libre para adicionar fotos, videos e relatos sobre essa experiencia..."
        />

        <TouchableOpacity
          activeOpacity={0.7}
          className="items-center self-end rounded-full bg-green-500 px-5 py-2"
        >
          <Text className="font-alt text-sm uppercase text-black"></Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  )
}1