import { Drawer } from "expo-router/drawer";

export default function AdminDrawer() {
  return (
    <Drawer screenOptions={{ headerShown: true }}>
      <Drawer.Screen name="Dashboard" options={{ title: "Dashboard" }} />
      <Drawer.Screen name="Quatation" options={{ title: "Manage Quotes" }} />
      <Drawer.Screen name="Templates" options={{ title: "Settings" }} />
      <Drawer.Screen name="Clientlist" options={{ title: "Clients" }} />
      <Drawer.Screen
        name="Usermanagment"
        options={{ title: "Usermanagment" }}
      />
    </Drawer>
  );
}
