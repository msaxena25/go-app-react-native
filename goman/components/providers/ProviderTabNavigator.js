import { Platform } from "react-native";
import { Ionicons } from "@expo/vector-icons"; // 6.2.2
import {
  createBottomTabNavigator,
  createStackNavigator
} from "react-navigation";
import ProviderProfile from "./provider-profile";
import ProviderServices from "./ProviderServices";

/* const profileStack = createStackNavigator({
  Profile: {
    screen: ProviderProfile, // pass component into screen config
    navigationOptions: ({ navigation }) => ({
      title: "this is my Profile", // this is header title
      header: null // if want to hide header
    })
  }
}); */

const getTabBarIcon = (navigation, focused, tintColor) => {
  const { routeName } = navigation.state;
  let IconComponent = Ionicons;
  let iconName;
  if (routeName === "Profile") {
    iconName = `ios-information-circle${focused ? "" : "-outline"}`;
    // We want to add badges to home tab icon
    // IconComponent = HomeIconWithBadge;
  } else if (routeName === "Services") {
    iconName = `ios-options${focused ? "" : "-outline"}`;
  }

  // You can return any component that you like here!
  return <IconComponent name={iconName} size={25} color={tintColor} />;
};

export default createBottomTabNavigator(
  {
    Profile: { screen: ProviderProfile },
    Services: { screen: ProviderServices }
  },
  {
   
    tabBarOptions: {
      initialRouteName: "Profile",
      activeTintColor: "#fff",
      inactiveTintColor: "#ddd",
      style: {
        backgroundColor: "#4d535e"
      },
      labelStyle: {
        fontSize: 12
      }
    }
  }
);
