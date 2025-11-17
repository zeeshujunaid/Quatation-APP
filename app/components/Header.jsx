import { Text, View, Pressable } from "react-native";
import Entypo from "@expo/vector-icons/Entypo";
import Ionicons from "@expo/vector-icons/Ionicons";
import { DrawerActions, useNavigation } from "@react-navigation/native";

export default function Header() {
  const navigation = useNavigation();

  return (
    <View
      style={{
        width: "100%",
        height: "15%",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 15,
        paddingTop:50,
        // backgroundColor: "#8799",
      }}
    >
      {/* LEFT - MENU */}
      <Pressable
        onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
      >
        <Entypo name="menu" size={28} color="black" />
      </Pressable>

      {/* RIGHT - Profile Info */}
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          gap: 10,
        }}
      >
        <View style={{backgroundColor:"#eeeeeeff",height:40,width:40,justifyContent:"center",alignItems:"center",borderRadius:10,}}>
          <Ionicons name="notifications-outline" size={24} color="black" />
        </View>
        <Ionicons name="person-circle-outline" size={40} color="black" />

        <View>
          <Text style={{ fontSize: 14, fontWeight: "700", color: "#000" }}>
            AHSAN KHAN
          </Text>
          <Text style={{ fontSize: 12, color: "#555" }}>Business Owner</Text>
        </View>
      </View>
    </View>
  );
}
