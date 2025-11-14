import { Drawer } from "expo-router/drawer";

export default function UserDrawer() {
  return (
    <Drawer screenOptions={{ headerShown: true }}>
      <Drawer.Screen name="Homescreen" options={{ title: "Home" }} />
      <Drawer.Screen name="Quatation" options={{ title: "My Quotes" }} />
      {/* <Drawer.Screen name="requestQuote" options={{ title: "Request Quote" }} /> */}
    </Drawer>
  );
}
