import { Text, View, Image, TouchableOpacity } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import AntDesign from "@expo/vector-icons/AntDesign";
import { useRouter } from "expo-router";

export default function Profile() {
  const router = useRouter();
  return (
    <View style={{ flex: 1, backgroundColor: "#ffffffff", padding: 20,paddingTop:40, }}>
      {/* BACK + TITLE */}
      <View
        style={{ flexDirection: "row", alignItems: "center", marginBottom: 30 }}
      >
        <TouchableOpacity onPress={()=>router.back()}>
        <Ionicons name="chevron-back-circle-outline" size={32} color="black" />
        </TouchableOpacity>
        <Text style={{ fontSize: 22, fontWeight: "700", marginLeft: 110 }}>
          Profile
        </Text>
      </View>

      {/* PROFILE TOP CARD */}
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          marginBottom: 25,
          gap: 12,
        }}
      >
        <Image
          source={require("../../../assets/images/logo.jpg")}
          style={{
            width: 55,
            height: 55,
            borderRadius: 30,
          }}
        />

        <View>
          <Text
            style={{
              fontSize: 18,
              fontWeight: "700",
              marginBottom: 2,
            }}
          >
            Zeeshan
          </Text>

          <Text
            style={{
              fontSize: 14,
              color: "#6B7280", // soft grey
            }}
          >
            admin@example.com
          </Text>
        </View>
      </View>

      {/* MENU LIST */}
      <View style={{ marginTop: 10,gap:20, }}>
        {/* Item */}
        <TouchableOpacity
          style={{
            flexDirection: "row",
            alignItems: "center",
            paddingVertical: 15,
            borderBottomWidth: 1,
            borderColor: "#eee",
          }}
          onPress={()=>router.push("/src/common/Editprofile")}
        >
          <Ionicons name="person-circle-outline" size={24} color="#6B7280" />
          <Text
            style={{ marginLeft: 15, fontSize: 16, flex: 1, color: "#6B7280" }}
          >
            My Profile
          </Text>
          <Ionicons name="chevron-forward-sharp" size={22} color="#6B7280" />
        </TouchableOpacity>

        {/* Settings */}
        <TouchableOpacity
          style={{
            flexDirection: "row",
            alignItems: "center",
            paddingVertical: 15,
            borderBottomWidth: 1,
            borderColor: "#eee",
          }}
        >
          <Ionicons name="settings-outline" size={24} color="#6B7280" />
          <Text
            style={{ marginLeft: 15, fontSize: 16, flex: 1, color: "#6B7280" }}
          >
            Settings
          </Text>
          <Ionicons name="chevron-forward-sharp" size={22} color="#6B7280" />
        </TouchableOpacity>

        {/* Notifications */}
        <TouchableOpacity
          style={{
            flexDirection: "row",
            alignItems: "center",
            paddingVertical: 15,
            borderBottomWidth: 1,
            borderColor: "#eee",
          }}
          onPress={()=>router.push("/src/common/Notification")}
        >
          <Ionicons name="notifications-outline" size={24} color="#6B7280" />
          <Text
            style={{ marginLeft: 15, fontSize: 16, flex: 1, color: "#6B7280" }}
          >
            Notifications
          </Text>
          <Ionicons name="chevron-forward-sharp" size={22} color="#6B7280" />
        </TouchableOpacity>

        {/* FAQ */}
        <TouchableOpacity
          style={{
            flexDirection: "row",
            alignItems: "center",
            paddingVertical: 15,
            borderBottomWidth: 1,
            borderColor: "#eee",
          }}
          onPress={()=>router.push("/src/common/Faq")}
        >
          <Ionicons name="help-circle-outline" size={24} color="#6B7280" />
          <Text
            style={{ marginLeft: 15, fontSize: 16, flex: 1, color: "#6B7280" }}
          >
            FAQ
          </Text>
          <Ionicons name="chevron-forward-sharp" size={22} color="#6B7280" />
        </TouchableOpacity>

        {/* About App */}
        <TouchableOpacity
          style={{
            flexDirection: "row",
            alignItems: "center",
            paddingVertical: 15,
            borderBottomWidth: 1,
            borderColor: "#eee",
          }}
          onPress={()=>router.push("/src/common/AboutApp")}
        >
          <Ionicons
            name="information-circle-outline"
            size={24}
            color="#6B7280"
          />
          <Text
            style={{ marginLeft: 15, fontSize: 16, flex: 1, color: "#6B7280" }}
          >
            About App
          </Text>
          <Ionicons name="chevron-forward-sharp" size={22} color="#6B7280" />
        </TouchableOpacity>
      </View>

      {/* LOGOUT */}
      <View style={{ marginTop: "auto", paddingVertical: 40 }}>
        <TouchableOpacity
          style={{
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <AntDesign name="logout" size={24} color="gray" />
          <Text
            style={{
              marginLeft: 15,
              fontSize: 18,
              fontWeight: "600",
              color: "#6B7280",
            }}
          >
            Logout
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
