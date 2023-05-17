import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import CategoriesScreen from '../screens/CategoriesScreen/index'
import CategoryBookScreen from '../screens/CategoryBookScreen/index'
import BookDetailScreen from '../screens/BookDetailScreen/index'

const ShopNavigator = () => {

    const Stack = createNativeStackNavigator() 

  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName='Home'>
            <Stack.Screen name='Home' component={CategoriesScreen }/>
            <Stack.Screen name='Book' component={CategoryBookScreen }/>
            <Stack.Screen name='Detail' component={BookDetailScreen }/>
        </Stack.Navigator>
    </NavigationContainer>
  )
}

export default ShopNavigator