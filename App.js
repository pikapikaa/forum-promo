import { BottomSheetModalProvider } from "@gorhom/bottom-sheet";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { RootSiblingParent } from "react-native-root-siblings";
import Ionicons from "@expo/vector-icons/MaterialIcons";
import { View, Text } from "react-native";

import LoginScreen from "./screens/auth/LoginScreen";
import OrdersScreen from "./screens/orders/OrdersScreen";
import ProfileScreen from "./screens/profile/ProfileScreen";
import MainScreen from "./screens/main/MainScreen";
import BlablaScreen from "./screens/other/BlablaScreen";

const ProfileStack = createNativeStackNavigator();

function ProfileStackScreen() {
  return (
    <ProfileStack.Navigator>
      <ProfileStack.Screen
        name="ProfileMain"
        component={ProfileScreen}
        options={{
          title: "личный кабинет",
          headerShadowVisible: false,
          headerTitle: (props) => (
            <View style={{ flex: 1, flexDirection: "row", padding: 10 }}>
              <Text
                style={{
                  backgroundColor: "#fff",
                  fontWeight: "500",
                  fontSize: 24,
                }}
              >
                {props.children}
              </Text>
            </View>
          ),
        }}
      />
      <ProfileStack.Screen
        name="Orders"
        component={OrdersScreen}
        options={{ headerTitle: "заявки", headerShadowVisible: false }}
      />
    </ProfileStack.Navigator>
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <RootSiblingParent>
      <BottomSheetModalProvider>
        <NavigationContainer>
          <Tab.Navigator
            screenOptions={({ route }) => ({
              tabBarActiveTintColor: "black",
              tabBarInactiveTintColor: "gray",
              tabBarStyle: { borderTopWidth: 0 },
            })}
          >
            <Tab.Screen
              name="Main"
              component={MainScreen}
              options={{
                tabBarLabel: "главная",
                tabBarIcon: ({ color, size }) => (
                  <Ionicons name="home" color={color} size={size} />
                ),
                headerShadowVisible: false,
              }}
            />
            <Tab.Screen
              name="Events"
              component={BlablaScreen}
              options={{
                tabBarLabel: "мероприятия",
                tabBarIcon: ({ color, size }) => (
                  <Ionicons name="event" color={color} size={size} />
                ),
                headerTitle: "мероприятия ",
                headerShadowVisible: false,
              }}
            />
            <Tab.Screen
              name="Search"
              component={BlablaScreen}
              options={{
                tabBarLabel: "поиск",
                tabBarIcon: ({ color, size }) => (
                  <Ionicons name="search" color={color} size={size} />
                ),
                headerTitle: "поиск ",
                headerShadowVisible: false,
              }}
            />
            <Tab.Screen
              name="Profile"
              component={ProfileStackScreen}
              options={{
                tabBarLabel: "мой профиль",
                tabBarIcon: ({ color, size }) => (
                  <Ionicons name="circle" color={color} size={size} />
                ),
                headerShown: false,
              }}
            />
          </Tab.Navigator>
        </NavigationContainer>
      </BottomSheetModalProvider>
    </RootSiblingParent>
  );
}
