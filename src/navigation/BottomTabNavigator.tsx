import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import WebViewScreen from '../screens/WebViewScreen';
import AdScreen from '../screens/AdScreen';

const Tab = createBottomTabNavigator();

export default function BottomTabNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="웹뷰" component={WebViewScreen} />
      <Tab.Screen name="광고" component={AdScreen} />
    </Tab.Navigator>
  );
}
