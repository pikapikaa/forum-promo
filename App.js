import { BottomSheetModalProvider } from "@gorhom/bottom-sheet";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { RootSiblingParent } from "react-native-root-siblings";
import Ionicons from "@expo/vector-icons/MaterialIcons";
import { View, Text, TouchableHighlight } from "react-native";

import LoginScreen from "./screens/auth/LoginScreen";
import EventsScreen from "./screens/event/EventsScreen";
import ArchivedEventsScreen from "./screens/event/ArchivedEventsScreen";
import OrdersScreen from "./screens/orders/OrdersScreen";
import ProfileScreen from "./screens/profile/ProfileScreen";
import MainScreen from "./screens/main/MainScreen";
import BlablaScreen from "./screens/other/BlablaScreen";
import Flower from "./components/svg/Flower";
import Notification from "./components/svg/Notification";
import HeartMain from "./components/svg/HeartMain";
import Clock from "./components/ui/Clock";

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

const EventsStack = createNativeStackNavigator();

function EventsStackScreen() {
  return (
    <EventsStack.Navigator>
      <EventsStack.Screen
        name="Events"
        component={EventsScreen}
        options={({ navigation }) => ({
          headerTitle: "мои мероприятия ",
          headerShadowVisible: false,
          headerRight: () => (
            <TouchableHighlight
              underlayColor="transparent"
              onPress={() => navigation.navigate("ArchivedEvents")}
            >
              <Clock style={{ marginRight: 10 }} />
            </TouchableHighlight>
          ),
        })}
      />
      <EventsStack.Screen
        name="ArchivedEvents"
        component={ArchivedEventsScreen}
        options={() => ({
          headerTitle: "архив мероприятий ",
          headerShadowVisible: false,
          headerRight: () => (
            <Text style={{ fontWeight: "500" }}>очистить</Text>
          ),
        })}
      />
    </EventsStack.Navigator>
  );
}

const Tab = createBottomTabNavigator();

function HomeTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route, navigation }) => ({
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
          headerRight: () => (
            <View style={{ flexDirection: "row", paddingRight: 10 }}>
              <Notification style={{ marginRight: 10 }} />
              <HeartMain />
            </View>
          ),
          headerLeft: () => (
            <View style={{ paddingLeft: 10, paddingTop: 10 }}>
              <Flower />
            </View>
          ),
          headerTitle: "",
        }}
      />
      <Tab.Screen
        name="EventsMain"
        component={EventsStackScreen}
        options={({ navigation }) => ({
          tabBarLabel: "мероприятия",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="event" color={color} size={size} />
          ),
          headerShown: false,
        })}
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
  );
}

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <RootSiblingParent>
      <BottomSheetModalProvider>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name="Login"
              component={LoginScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Home"
              component={HomeTabs}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </BottomSheetModalProvider>
    </RootSiblingParent>
  );
}
