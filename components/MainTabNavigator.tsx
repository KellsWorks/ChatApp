import { Ionicons } from '@expo/vector-icons';

import { createStackNavigator } from '@react-navigation/stack';

import * as React from 'react';

import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs'

import { BottomTabParamList, TabOneParamList, TabTwoParamList } from '../types';
import Register from '../screens/auth/Register';


const MainTab = createMaterialTopTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator() {

  return (
    <MainTab.Navigator
      initialRouteName="Chats"
      tabBarOptions={{ activeTintColor: 'grey',
      labelStyle: {
        fontFamily: 'Font-medium',
        textTransform: 'capitalize',
        fontSize: 16,
      },
      
      showIndicator: false,
      showIcon: true
      }}>
      <MainTab.Screen
        name="Camera"
        component={TabOneNavigator}
        options={{
          tabBarIcon: () => <Ionicons name="camera" color='gray' size={25} />,
          tabBarLabel: () => true,
        }}
      />
      <MainTab.Screen
        name="Chats"
        component={TabOneNavigator}
      />
      <MainTab.Screen
        name="Calls"
        component={TabOneNavigator}
      />
      
    </MainTab.Navigator>
  );
}

// You can explore the built-in icon families and icons on the web at:
// https://icons.expo.fyi/
function TabBarIcon(props: { name: React.ComponentProps<typeof Ionicons>['name']; color: string }) {
  return <Ionicons size={30} style={{ marginBottom: -3 }} {...props} />;
}

// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
const TabOneStack = createStackNavigator<TabOneParamList>();

function TabOneNavigator() {
  return (
    <TabOneStack.Navigator>
      <TabOneStack.Screen
        name="TabOneScreen"
        component={Register}
        options={{ headerShown: false  }}
      />
    </TabOneStack.Navigator>
  );
}


const TabTwoStack = createStackNavigator<TabTwoParamList>();

function TabTwoNavigator() {
  return (
    <TabTwoStack.Navigator>
      <TabTwoStack.Screen
        name="TabTwoScreen"
        component={Register}
        options={{ headerShown: false }}
      />
    </TabTwoStack.Navigator>
  );
}
