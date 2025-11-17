import { ScrollView, View, Text, TouchableOpacity } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useRouter } from "expo-router";

export default function RecentQuotation() {
    const router = useRouter();
  const quotations = [
    { id: "01", client: "Ali Khan", date: "12 Nov 2025", total: "250" },
    { id: "02", client: "Ahmed Raza", date: "10 Nov 2025", total: "1850" },
    { id: "03", client: "Sara Malik", date: "08 Nov 2025", total: "3200" },
    { id: "04", client: "Usman Tariq", date: "05 Nov 2025", total: "15" },
    { id: "05", client: "Bilal Ahmed", date: "02 Nov 2025", total: "2790" },
    { id: "06", client: "Ali Khan", date: "12 Nov 2025", total: "250" },
    { id: "07", client: "Ahmed Raza", date: "10 Nov 2025", total: "1850" },
    { id: "08", client: "Sara Malik", date: "08 Nov 2025", total: "3200" },
    { id: "09", client: "Usman Tariq", date: "05 Nov 2025", total: "15" },
    { id: "10", client: "Bilal Ahmed", date: "02 Nov 2025", total: "2790" },
    { id: "11", client: "Ali Khan", date: "12 Nov 2025", total: "250" },
    { id: "12", client: "Ahmed Raza", date: "10 Nov 2025", total: "1850" },
    { id: "13", client: "Sara Malik", date: "08 Nov 2025", total: "3200" },
    { id: "14", client: "Usman Tariq", date: "05 Nov 2025", total: "15" },
    { id: "15", client: "Bilal Ahmed", date: "02 Nov 2025", total: "2790" },
    { id: "16", client: "Ali Khan", date: "12 Nov 2025", total: "250" },
    { id: "17", client: "Ahmed Raza", date: "10 Nov 2025", total: "1850" },
    { id: "18", client: "Sara Malik", date: "08 Nov 2025", total: "3200" },
    { id: "19", client: "Usman Tariq", date: "05 Nov 2025", total: "15" },
    { id: "20", client: "Bilal Ahmed", date: "02 Nov 2025", total: "2790" },
  ];

  return (
    <View style={{ flex: 1, margin: 10, borderRadius: 10 }}>
      {/* Header */}
      <TouchableOpacity onPress={()=>router.replace("/src/admin/Dashboard")}>
      <View style={{ marginBottom: 10 }}>
        <Ionicons name="arrow-back-sharp" size={24} color="black" />
      </View>
      </TouchableOpacity>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: 10,
        }}
      >
        <Text style={{ fontFamily: "fustat", fontWeight: "800", fontSize: 20 }}>
          Recent Quotation
        </Text>
      </View>

      {/* Scrollable Table */}
      <ScrollView
        style={{
          flex: 1,
          borderRadius: 10,
          backgroundColor: "#fff",
          borderWidth: 1,
          borderColor: "#00000025",
        }}
        contentContainerStyle={{ paddingBottom: 20 }}
      >
        {/* Table Header */}
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            paddingVertical: 8,
            paddingHorizontal: 10,
            borderRadius: 10,
            backgroundColor: "#eeeeee9c",
            borderBottomWidth: 1,
            borderColor: "#0000002c",
          }}
        >
          <Text style={{ width: "15%", fontWeight: "700" }}>#</Text>
          <Text style={{ width: "35%", fontWeight: "700" }}>Client Name</Text>
          <Text style={{ width: "25%", fontWeight: "700" }}>Date</Text>
          <Text style={{ width: "25%", fontWeight: "700", paddingLeft: 20 }}>
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
            <Text style={{ width: "25%", paddingLeft: 20 }}>${item.total}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}
