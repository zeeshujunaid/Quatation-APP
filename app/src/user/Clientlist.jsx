import { ScrollView, Text, View, TouchableOpacity } from "react-native";
import Welcomsection from "../../components/Welcomesection";
import AdminHeader from "../../components/Header";
import Clientherosection from "../../components/ClientHerosection";
import { useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

export default function Client() {
  const router = useRouter();

  const quotations = [
    {
      clientName: "James Carter",
      CompanyName: "Granite Solutions",
      PhoneNumber: "+1 202 555 0143",
    },
    {
      clientName: "James Carter",
      CompanyName: "Granite Solutions",
      PhoneNumber: "+1 202 555 0143",
    },
    {
      clientName: "Daniel Brook",
      CompanyName: "Summit Architects",
      PhoneNumber: "+1 202 555 0143",
    },
    {
      clientName: "James Carter",
      CompanyName: "Granite Solutions",
      PhoneNumber: "+1 202 555 0143",
    },
  ];

  return (
    <View style={{ flex: 1 }}>
      <AdminHeader />
      <Welcomsection />

      <ScrollView contentContainerStyle={{ paddingBottom: 40 }}>
        <View style={{ marginBottom: 80 }}>
          <Clientherosection />
        </View>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginHorizontal: 10,
            marginBottom: 15,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              borderWidth: 1,
              borderColor: "#ccc",
              paddingHorizontal: 8,
              paddingVertical: 4,
              borderRadius: 8,
            }}
          >
            <Text style={{ marginRight: 4 }}>Filter</Text>
            <Ionicons name="filter" size={16} />
          </View>

          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              borderWidth: 1,
              borderColor: "#ccc",
              paddingHorizontal: 8,
              paddingVertical: 4,
              borderRadius: 8,
            }}
          >
            <Text style={{ marginRight: 4 }}>Client</Text>
            <Text style={{ color: "green", marginRight: 4 }}>Zeeshan</Text>
            <Ionicons name="close" size={16} color="red" />
          </View>

          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              borderWidth: 1,
              borderColor: "#ccc",
              paddingHorizontal: 8,
              paddingVertical: 4,
              borderRadius: 8,
            }}
          >
            <Text style={{ marginRight: 4 }}>Status</Text>
            <Text style={{ color: "green", marginRight: 4 }}>Approved</Text>
            <Ionicons name="close" size={16} color="red" />
          </View>
        </View>

        <View style={{ marginHorizontal: 10 }}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: 8,
            }}
          >
            <Text
              style={{ fontFamily: "fustat", fontWeight: "800", fontSize: 18 }}
            >
              Client List
            </Text>
            <TouchableOpacity
              onPress={() => router.push("/src/common/RecentClients")}
            >
              <Text
                style={{
                  fontFamily: "fustat",
                  fontWeight: "600",
                  fontSize: 14,
                }}
              >
                View All
              </Text>
            </TouchableOpacity>
          </View>

          <ScrollView style={{ maxHeight: 380 }}>
            {/* Table Header */}
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                paddingVertical: 6,
                paddingHorizontal: 10,
                borderRadius: 8,
                backgroundColor: "#eeeeee9c",
                borderWidth: 1,
                borderColor: "#0000002c",
              }}
            >
              <Text style={{ flex: 0.35, fontWeight: "700" }}>Client Name</Text>
              <Text style={{ flex: 0.35, fontWeight: "700" }}>Company</Text>
              <Text style={{ flex: 0.25, fontWeight: "700" }}>Phone</Text>
            </View>

            {quotations.map((item, index) => (
              <View
                key={index}
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  paddingVertical: 8,
                  paddingHorizontal: 10,
                  borderBottomWidth: 1,
                  borderBottomColor: "#ddd",
                }}
              >
                <Text style={{ flex: 0.35 }}>{item.clientName}</Text>
                <Text style={{ flex: 0.25 }}>{item.CompanyName}</Text>
                <Text style={{ flex: 0.35 }}>{item.PhoneNumber}</Text>
              </View>
            ))}
          </ScrollView>
        </View>
      </ScrollView>
    </View>
  );
}
