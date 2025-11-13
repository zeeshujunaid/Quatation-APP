import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Drawer } from "expo-router/drawer";

export default function RootLayout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer
        screenOptions={{
          headerShown: false, // ya false agar header nahi chahiye
        }}
      >
        {/* User Screens */}
        <Drawer.Screen
          name="/user/home"
          options={{ title: "Home" }}
        />
        <Drawer.Screen
          name="/user/myQuotes"
          options={{ title: "My Quotes" }}
        />
        <Drawer.Screen
          name="/user/requestQuote"
          options={{ title: "Request Quote" }}
        />

        {/* Admin Screens */}
        <Drawer.Screen
          name="/admin/dashboard"
          options={{ title: "Dashboard" }}
        />
        <Drawer.Screen
          name="/admin/manageQuotes"
          options={{ title: "Manage Quotes" }}
        />
        <Drawer.Screen
          name="/admin/settings"
          options={{ title: "Settings" }}
        />

        {/* Common Screens */}
        <Drawer.Screen
          name="/common/profile"
          options={{ title: "Profile" }}
        />
        <Drawer.Screen
          name="/common/about"
          options={{ title: "About" }}
        />
      </Drawer>
    </GestureHandlerRootView>
  );
}
