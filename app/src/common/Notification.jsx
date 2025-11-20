import { View, Text, Image, FlatList,TouchableOpacity } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useRouter } from "expo-router";

export default function Notification() {
    const router = useRouter();
  const notifications = [
    {
      id: 1,
      image: "https://i.pravatar.cc/150?img=1",
      name: "John Doe",
      message: "fill up the quatation foam",
      time: "12:22",
    },
    {
      id: 2,
      image: "https://i.pravatar.cc/150?img=2",
      name: "Ayesha Khan",
      message: "fill up the quatation foam",
      time: "12:22",
    },
    {
      id: 3,
      image: "https://i.pravatar.cc/150?img=3",
      name: "Ali Raza",
      message: "fill up the quatation foam",
      time: "12:22",
    },
    {
      id: 4,
      image: "https://i.pravatar.cc/150?img=3",
      name: "Ali Raza",
      message: "fill up the quatation foam",
      time: "12:22",
    },
    {
      id: 5,
      image: "https://i.pravatar.cc/150?img=3",
      name: "Ali Raza",
      message: "fill up the quatation foam",
      time: "12:22",
    },
    {
      id: 6,
      image: "https://i.pravatar.cc/150?img=3",
      name: "Ali Raza",
      message: "fill up the quatation foam",
      time: "12:22",
    },
    {
      id: 7,
      image: "https://i.pravatar.cc/150?img=3",
      name: "Ali Raza",
      message: "fill up the quatation foam",
      time: "12:22",
    },
    {
      id: 8,
      image: "https://i.pravatar.cc/150?img=3",
      name: "Ali Raza",
      message: "fill up the quatation foam",
      time: "12:22",
    },
    {
      id: 9,
      image: "https://i.pravatar.cc/150?img=3",
      name: "Ali Raza",
      message: "fill up the quatation foam",
      time: "12:22",
    },
    {
      id: 10,
      image: "https://i.pravatar.cc/150?img=3",
      name: "Ali Raza",
      message: "fill up the quatation foam",
      time: "12:22",
    },
  ];

  const renderItem = ({ item }) => (
    <View
      style={{
        flexDirection: "row",
        borderBottomWidth: 1,
        borderColor: "#eee",
        padding: 12,
        gap: 12,
      }}
    >
      <Image
        source={{ uri: item.image }}
        style={{
          width: 50,
          height: 50,
          borderRadius: 30,
        }}
      />

      <View style={{ flex: 1 }}>
        <View style={{flexDirection:"row",gap:3,}}>
        <Text style={{ fontSize: 16, fontWeight: "600" }}>{item.name}</Text>
        <Text style={{ fontSize: 14, color: "#555", marginTop: 2 }}>
          {item.message}
        </Text>
        </View>
        <Text style={{ fontSize: 12, color: "#999", marginTop: 5 }}>
          {item.time}
        </Text>
      </View>
    </View>
  );

  return (
    <View style={{ padding: 15, flex: 1 }}>
      <View style={{ height: 60, flexDirection: "row", alignItems: "center" }}>
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons
            name="chevron-back-circle-outline"
            size={32}
            color="black"
          />
        </TouchableOpacity>
        <Text style={{ paddingLeft: 90 }}>NOTIFICATIONS</Text>
      </View>

      <Text>
        you have{" "}
        <Text style={{ color: "rgba(16, 129, 163, 0.8)", fontWeight: "bold" }}>
          2 notifications
        </Text>{" "}
        today
      </Text>

      <FlatList
        data={notifications}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}
