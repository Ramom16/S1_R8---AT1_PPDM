import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './src/screens/HomeScreen';
import RestaurantesScreen from './src/screens/RestaurantesScreen';
import CardapioScreen from './src/screens/CardapioScreen';
import DetalhesPratosScreen from './src/screens/DetalhesPratosScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="dark" />
      <Stack.Navigator
        screenOptions={{
          headerShown: true,
          headerStyle: {
            backgroundColor: '#ffffff',
          },
          headerTintColor: '#1a1a1a',
          headerTitleStyle: {
            fontWeight: '700',
            fontSize: 18,
          },
          headerShadowVisible: false,
        }}
      >
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Restaurantes"
          component={RestaurantesScreen}
          options={{
            title: 'Restaurantes',
          }}
        />
        <Stack.Screen
          name="CardapioScreen"
          component={CardapioScreen}
          options={{
            title: 'Cardápio',
          }}
        />
        <Stack.Screen
          name="DetalhesPratosScreen"
          component={DetalhesPratosScreen}
          options={{
            title: 'Detalhes do Prato',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
