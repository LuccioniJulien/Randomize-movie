import { createStackNavigator, createAppContainer } from "react-navigation";
import Home from "../screens/RandomMovie";
import Setting from "../screens/Filters";
const AppNavigator = createStackNavigator({
  Home: {
    screen: Home
  },
  Setting: {
    screen: Setting
  },
  headerMode: "screen"
});

export default createAppContainer(AppNavigator);
