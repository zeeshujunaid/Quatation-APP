import { View, Text, TextInput } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function Welcomsection() {
  return (
    <View
      style={{
        // backgroundColor: "#986749",
        paddingTop: 10,
        paddingHorizontal: 20,
        paddingBottom: 25,
      }}
    >
      {/* Welcome Text */}
      <Text
        style={{
          fontSize: 24,
          fontWeight: "700",
          color: "black",
          marginBottom: 4,
        }}
      >
        Welcome Martin Brown 👋
      </Text>

      {/* Search Bar */}
      <View
        style={{
          width: "100%",
          height: 50,
          flexDirection: "row",
          alignItems: "center",
          backgroundColor: "#eeeeeeff",
          paddingHorizontal: 12,
          borderRadius: 10,
        }}
      >
        <Ionicons name="search" size={20} color="#777" />
        <TextInput
          placeholder="Search..."
          style={{
            flex: 1,
            fontSize: 16,
            marginLeft: 10,
          }}
          placeholderTextColor="#777"
        />
      </View>
    </View>
  );
}
