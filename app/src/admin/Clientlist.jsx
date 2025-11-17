import { ScrollView, Text, View, TouchableOpacity } from "react-native";
import Welcomsection from "../../components/Welcomesection";
import AdminHeader from "../../components/Header";
import Clientherosection from "../../components/ClientHerosection";
import { useRouter } from "expo-router";

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

      {/* Parent ScrollView */}
      <ScrollView
        style={{ flex: 1 }}
        contentContainerStyle={{ paddingBottom: 20 }}
      >
        <View style={{ marginBottom: 120 }}>
          <Clientherosection />
        </View>
        {/* Filter Row */}
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-around",
            marginBottom: 10,
          }}
        >
          <Text>Filter</Text>
          <Text>Clients</Text>
          <Text>Status</Text>
        </View>

        {/* Recent Quotations */}
        <View style={{ margin: 10, borderRadius: 10 }}>
          {/* Header */}
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: 10,
            }}
          >
            <Text
              style={{ fontFamily: "fustat", fontWeight: "800", fontSize: 20 }}
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

          {/* Table with ScrollView */}
          <ScrollView style={{ maxHeight: 400 }}>
            {/* Table Header */}
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                paddingVertical: 8,
                paddingHorizontal: 10,
                borderRadius: 10,
                backgroundColor: "#eeeeee9c",
                borderWidth: 1,
                borderColor: "#0000002c",
              }}
            >
              <Text style={{ flex: 0.35, fontWeight: "700" }}>Client Name</Text>
              <Text style={{ flex: 0.35, fontWeight: "700" }}>Company</Text>
              <Text style={{ flex: 0.25, fontWeight: "700" }}>Phone</Text>
            </View>

            {/* Table Rows */}
            {quotations.map((item, index) => (
              <View
                key={index}
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  paddingVertical: 10,
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
