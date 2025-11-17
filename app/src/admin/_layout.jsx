import { Drawer } from "expo-router/drawer";
// import DrawerHeader from "../../components/Drawerheader";
import { View } from "react-native";
export default function AdminDrawer() {
  return (
    <View style={{flex:1,}}>
      {/* <DrawerHeader/> */}
    <Drawer screenOptions={{ headerShown: false }}>
      <Drawer.Screen name="Dashboard" options={{ title: "Dashboard" }} />
      <Drawer.Screen name="Quatation" options={{ title: "Manage Quotes" }} />
      <Drawer.Screen name="Templates" options={{ title: "Settings" }} />
      <Drawer.Screen name="Clientlist" options={{ title: "Clients" }} />
      <Drawer.Screen
        name="Usermanagment"
        options={{ title: "Usermanagment" }}
      />
    </Drawer>
        </View>
  );
}
