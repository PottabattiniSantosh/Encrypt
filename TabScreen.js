import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { createStackNavigator, CardStyleInterpolators  } from '@react-navigation/stack';
// import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      />
    </View>
  );
}

function TabHome() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>TabHome!</Text>
    </View>
  );
}

function TabDetails({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Text>Details Screen</Text>
    <Button
      title="Go back"
      onPress={() => navigation.navigate('Home')}
    />
    </View>
  );
}


const Tab = createMaterialBottomTabNavigator();

function DetailsScreen({ navigation }) {
  return (
      <Tab.Navigator>
        <Tab.Screen name="TabHome" component={TabHome} />
        <Tab.Screen name="TabDetails" component={TabDetails} />
      </Tab.Navigator>
  );
}

const forFade = ({ current }) => ({
  cardStyle: {
    opacity: current.progress,
  },
});

const Stack = createStackNavigator();

function TabScreen() {
  return (
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
  );
}

export default TabScreen;
