import { ScrollView, Text, View, TouchableOpacity } from "react-native";
import Welcomsection from "../../components/Welcomesection";
import AdminHeader from "../../components/Header";
import Clientherosection from "../../components/ClientHerosection";
import { useRouter } from "expo-router";

export default function Client() {
  const router = useRouter();

  const quotations = [
    { id: "01", client: "Ali Khan", date: "12 Nov 2025", total: "250" },
    { id: "02", client: "Ahmed Raza", date: "10 Nov 2025", total: "1850" },
    { id: "03", client: "Sara Malik", date: "08 Nov 2025", total: "3200" },
    { id: "04", client: "Usman Tariq", date: "05 Nov 2025", total: "15" },
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
              onPress={() => router.push("/src/admin/RecentQuatation")}
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
              <Text style={{ width: "15%", fontWeight: "700" }}>#</Text>
              <Text style={{ width: "35%", fontWeight: "700" }}>
                Client Name
              </Text>
              <Text style={{ width: "25%", fontWeight: "700" }}>Date</Text>
              <Text
                style={{ width: "25%", fontWeight: "700", paddingLeft: 20 }}
              >
                Amount
              </Text>
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
                  borderBottomWidth: index === quotations.length - 1 ? 0 : 1,
                  borderBottomColor: "#ddd",
                }}
              >
                <Text style={{ width: "15%" }}>#{item.id}</Text>
                <Text style={{ width: "35%" }}>{item.client}</Text>
                <Text style={{ width: "25%" }}>{item.date}</Text>
                <Text style={{ width: "25%", paddingLeft: 20 }}>
                  ${item.total}
                </Text>
              </View>
            ))}
          </ScrollView>
        </View>
      </ScrollView>
    </View>
  );
}
