import { createStackNavigator, createAppContainer } from "react-navigation";
import Home from "../screens/RandomMovie";

const AppNavigator = createStackNavigator({
  Home: {
    screen: Home
  },
  headerMode: "screen"
});

export default createAppContainer(AppNavigator);
