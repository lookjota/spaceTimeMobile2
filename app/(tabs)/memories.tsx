import { Button, Image, ScrollView, Switch, Text, TextInput, TouchableOpacity, View } from "react-native";

import Icon from '@expo/vector-icons/Feather'

import NLWLogo from '../../assets/images/nlw-spacetime-logo.png'
import { Link, useRouter } from "expo-router";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import * as SecureStore from 'expo-secure-store'
import { useEffect, useState } from "react";
import { api } from "../lib/api";
import dayjs from "dayjs"
import ptBr from 'dayjs/locale/pt-br'

dayjs.locale(ptBr)

interface Memory {
  coverUrl: string
  excerpt: string
  createdAt: string
  id: string
}

export default function NewMemory() {

  const { bottom, top } = useSafeAreaInsets ()
  const router = useRouter()
  const [memories, setMemories] = useState<Memory>([])

  async function signOut() {
    await SecureStore.deleteItemAsync('token')
    router.push('/')
  }

  async function loadMemories() {
    const token = await SecureStore.getItemAsync('token')


    const response = await api.get('/memories', {
      headers: {
        Authorization: `Bearer ${token}`
      },
    })
    setMemories(response.data)
  }

  useEffect(() => {
    loadMemories()
  }, [])

  return (
    <ScrollView 
      className="flex-1" 
      contentContainerStyle={{ paddingBottom: bottom, paddingTop: top}}
    >
      <View className="mt-4 flex-row items-center justify-between px-8">
        -
      </View>

      <View className="mt-6 space-y-10">
        {memories.map((memory) => {
          return (
          <View key={memory.id} className="space-y-4">
          <View className=" flex-row items-center gap-2">
            <View className="h-px w-5 bg-gray-50"/>
            <Text className="font-body text-xs text-gray-100">
              {dayjs(memory.createdAt).format('D[ de ]MMM[, ]YYYY')}
            </Text>
          </View>
          <Text>12 de Abril, 2023</Text>
          <View className="space-y-4 px-8">
            <Image 
              source={{uri: memory.coverUrl}}
              className="aspect-video w-full rounded-lg"
              alt=""
            />
            <Text className="front-body text-base leading-relaxed text-gray-100">
              {memory.except}
            </Text>
            <Link href="/memories/id" asChild>
              <TouchableOpacity className="flex-row items-center gap-02">
                <Text className="font-body text-sm text-gray-200">
                  ler mais
                </Text>
                <Icon name="arrow-right" size={16} color="#9e9ea0"/>
              </TouchableOpacity>
            </Link>
          </View>
        </View>
          )
        })}
      </View>
      
    </ScrollView>
  )
}