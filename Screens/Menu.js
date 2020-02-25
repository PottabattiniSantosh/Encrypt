import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Encryptor from "./Encryptor";
import Notepad from "./Notepad";
import { Header, Left, Body, Right, Title } from 'native-base';

const Tab = createMaterialTopTabNavigator();

export default function Menu() {
  return (
    <NavigationContainer>
      <Header style={{ backgroundColor: 'powderblue' }}>
        <Left/>
        <Left/>
          <Body>
            <Title style={{ color: '#e91e63' }}>IDK</Title>
          </Body>
        </Header>
      <Tab.Navigator initialRouteName="Feed"
      tabBarOptions={{
        activeTintColor: '#e91e63',
        labelStyle: { fontSize: 12 },
        style: { backgroundColor: 'powderblue' },
      }} >
        <Tab.Screen name="Encryptor" component={Encryptor} />
        <Tab.Screen name="Note Pad" component={Notepad} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
