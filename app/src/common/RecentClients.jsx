import { ScrollView, View, Text, TouchableOpacity } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useRouter } from "expo-router";

export default function RecentClient() {
  const router = useRouter();

  const quotations = [
    {
      client: "Ali Khan",
      CompanyName: "Granite Solutions",
      PhoneNumber: "+1 202 555 0143",
      Status: "Rejected",
      Date: "12 Nov 2025",
      Amount: "4500",
    },
    {
      client: "Ahmed Raza",
      CompanyName: "Summit Architects",
      PhoneNumber: "+1 202 555 0144",
      Status: "Pending",
      Date: "10 Nov 2025",
      Amount: "1850",
    },
    {
      client: "Sara Malik",
      CompanyName: "BlueTech Labs",
      PhoneNumber: "+1 202 555 0145",
      Status: "Approved",
      Date: "08 Nov 2025",
      Amount: "3200",
    },
    {
      client: "Usman Tariq",
      CompanyName: "Summit Architects",
      PhoneNumber: "+1 202 555 0146",
      Status: "Rejected",
      Date: "05 Nov 2025",
      Amount: "15",
    },
    {
      client: "Bilal Ahmed",
      CompanyName: "Granite Solutions",
      PhoneNumber: "+1 202 555 0147",
      Status: "Approved",
      Date: "02 Nov 2025",
      Amount: "2790",
    },
    {
      client: "Bilal Ahmed",
      CompanyName: "Granite Solutions",
      PhoneNumber: "+1 202 555 0147",
      Status: "Approved",
      Date: "02 Nov 2025",
      Amount: "2790",
    },
    {
      client: "Bilal Ahmed",
      CompanyName: "Granite Solutions",
      PhoneNumber: "+1 202 555 0147",
      Status: "Approved",
      Date: "02 Nov 2025",
      Amount: "2790",
    },
    {
      client: "Bilal Ahmed",
      CompanyName: "Granite Solutions",
      PhoneNumber: "+1 202 555 0147",
      Status: "Approved",
      Date: "02 Nov 2025",
      Amount: "2790",
    },
    {
      client: "Bilal Ahmed",
      CompanyName: "Granite Solutions",
      PhoneNumber: "+1 202 555 0147",
      Status: "Approved",
      Date: "02 Nov 2025",
      Amount: "2790",
    },
    {
      client: "Bilal Ahmed",
      CompanyName: "Granite Solutions",
      PhoneNumber: "+1 202 555 0147",
      Status: "Approved",
      Date: "02 Nov 2025",
      Amount: "2790",
    },
    {
      client: "Bilal Ahmed",
      CompanyName: "Granite Solutions",
      PhoneNumber: "+1 202 555 0147",
      Status: "Approved",
      Date: "02 Nov 2025",
      Amount: "2790",
    },
    {
      client: "Bilal Ahmed",
      CompanyName: "Granite Solutions",
      PhoneNumber: "+1 202 555 0147",
      Status: "Approved",
      Date: "02 Nov 2025",
      Amount: "2790",
    },
    {
      client: "Bilal Ahmed",
      CompanyName: "Granite Solutions",
      PhoneNumber: "+1 202 555 0147",
      Status: "Approved",
      Date: "02 Nov 2025",
      Amount: "2790",
    },
    {
      client: "Bilal Ahmed",
      CompanyName: "Granite Solutions",
      PhoneNumber: "+1 202 555 0147",
      Status: "Approved",
      Date: "02 Nov 2025",
      Amount: "2790",
    },
    {
      client: "Bilal Ahmed",
      CompanyName: "Granite Solutions",
      PhoneNumber: "+1 202 555 0147",
      Status: "Approved",
      Date: "02 Nov 2025",
      Amount: "2790",
    },
    {
      client: "Bilal Ahmed",
      CompanyName: "Granite Solutions",
      PhoneNumber: "+1 202 555 0147",
      Status: "Approved",
      Date: "02 Nov 2025",
      Amount: "2790",
    },
    {
      client: "Bilal Ahmed",
      CompanyName: "Granite Solutions",
      PhoneNumber: "+1 202 555 0147",
      Status: "Approved",
      Date: "02 Nov 2025",
      Amount: "2790",
    },
    {
      client: "Bilal Ahmed",
      CompanyName: "Granite Solutions",
      PhoneNumber: "+1 202 555 0147",
      Status: "Approved",
      Date: "02 Nov 2025",
      Amount: "2790",
    },
  ];

  const fixedColumnsWidth = [120, 150, 150];
  const scrollColumnsWidth = [120, 120, 120];

  return (
    <View style={{ flex: 1, backgroundColor: "#f8f8f8", padding: 10 }}>
      {/* Back Button */}
      <TouchableOpacity onPress={() => router.replace("/src/admin/Clientlist")}>
        <Ionicons
          name="arrow-back-sharp"
          size={28}
          color="black"
          style={{ marginBottom: 10 }}
        />
      </TouchableOpacity>

      {/* Page Title */}
      <Text style={{ fontSize: 22, fontWeight: "800", marginBottom: 15 }}>
        Recent Clients
      </Text>

      {/* Table */}
      <ScrollView horizontal showsHorizontalScrollIndicator={true}>
        <View style={{ flex: 1 }}>
          {/* Header */}
          <View style={{ flexDirection: "row", backgroundColor: "#f1f1f1" }}>
            {["Client Name", "Company Name", "Phone Number"].map((title, i) => (
              <Text
                key={i}
                style={{
                  width: fixedColumnsWidth[i],
                  fontWeight: "700",
                  padding: 10,
                  textAlign: "left",
                }}
              >
                {title}
              </Text>
            ))}
            {["Status", "Date", "Amount"].map((title, i) => (
              <Text
                key={i}
                style={{
                  width: scrollColumnsWidth[i],
                  fontWeight: "700",
                  padding: 10,
                  textAlign: "left",
                }}
              >
                {title}
              </Text>
            ))}
          </View>

          {/* Rows */}
          {/* Rows */}
          <ScrollView
            style={{ flex: 1 }}
            contentContainerStyle={{ paddingBottom: 50 }}
          >
            {quotations.map((item, index) => (
              <View
                key={index}
                style={{
                  flexDirection: "row",
                  backgroundColor: index % 2 === 0 ? "#fff" : "#fafafa",
                }}
              >
                {/* Fixed Columns */}
                <Text style={{ width: fixedColumnsWidth[0], padding: 12 }}>
                  {item.client}
                </Text>
                <Text style={{ width: fixedColumnsWidth[1], padding: 12 }}>
                  {item.CompanyName}
                </Text>
                <Text style={{ width: fixedColumnsWidth[2], padding: 12 }}>
                  {item.PhoneNumber}
                </Text>

                {/* Scrollable Columns */}
                <Text style={{ width: scrollColumnsWidth[0], padding: 12 }}>
                  {item.Status}
                </Text>
                <Text style={{ width: scrollColumnsWidth[1], padding: 12 }}>
                  {item.Date}
                </Text>
                <Text style={{ width: scrollColumnsWidth[2], padding: 12 }}>
                  {item.Amount}
                </Text>
              </View>
            ))}
          </ScrollView>
        </View>
      </ScrollView>
    </View>
  );
}
