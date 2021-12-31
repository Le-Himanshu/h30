import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {createAppContainer,createSwitchNavigator} from "react-navigation"
import Login from "./screens/login"
import HomeScreen from './screens/home';
export default function App() {
  return (
<Login/>
 );
}
var AppNavigator=createSwitchNavigator({
  loginScreen:Login,
  homeScreen:HomeScreen
})
const AppContainer=createAppContainer(AppNavigator)
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
