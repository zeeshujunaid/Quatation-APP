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

  const columnsWidth = [120, 150, 130, 90, 100, 80];

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

      <Text style={{ fontSize: 22, fontWeight: "800", marginBottom: 15 }}>
        Recent Clients
      </Text>

      <View style={{ flex: 1 }}>
        <ScrollView horizontal showsHorizontalScrollIndicator={true}>
          <View style={{ flex: 1 }}>
            {/* Table Header */}
            <View
              style={{
                flexDirection: "row",
                backgroundColor: "#f1f1f1",
                borderTopLeftRadius: 8,
                borderTopRightRadius: 8,
              }}
            >
              {["Client", "Company", "Phone", "Status", "Date", "Amount"].map(
                (title, i) => (
                  <Text
                    key={i}
                    style={{
                      width: columnsWidth[i],
                      padding: 10,
                      fontWeight: "700",
                      textAlign: "center",
                      borderRightWidth: i !== 5 ? 1 : 0,
                      borderColor: "#ccc",
                    }}
                  >
                    {title}
                  </Text>
                )
              )}
            </View>

            {/* Table Rows */}
            <ScrollView
              style={{ flex: 1 }}
              contentContainerStyle={{ paddingBottom: 20 }}
            >
              {quotations.map((item, index) => {
                let statusStyle = {};
                if (item.Status === "Approved")
                  statusStyle = {
                    backgroundColor: "#E4F4E4",
                    color: "#4E866C",
                    borderColor: "#21965f",
                  };
                else if (item.Status === "Rejected")
                  statusStyle = {
                    backgroundColor: "#FEE0D9",
                    color: "#BE4242",
                    borderColor: "#ac2727",
                  };
                else if (item.Status === "Pending")
                  statusStyle = {
                    backgroundColor: "#fff3cd",
                    color: "#856404",
                    borderColor: "#856404",
                  };

                return (
                  <View
                    key={index}
                    style={{
                      flexDirection: "row",
                      backgroundColor: index % 2 === 0 ? "#fff" : "#fafafa",
                    }}
                  >
                    <Text
                      style={{
                        width: columnsWidth[0],
                        padding: 10,
                        textAlign: "center",
                      }}
                    >
                      {item.client}
                    </Text>
                    <Text
                      style={{
                        width: columnsWidth[1],
                        padding: 10,
                        textAlign: "center",
                      }}
                    >
                      {item.CompanyName}
                    </Text>
                    <Text
                      style={{
                        width: columnsWidth[2],
                        padding: 10,
                        textAlign: "center",
                      }}
                    >
                      {item.PhoneNumber}
                    </Text>

                    {/* Status Badge */}
                    <View
                      style={{
                        width: columnsWidth[3],
                        height: 28,
                        borderWidth: 1,
                        borderRadius: 14,
                        justifyContent: "center",
                        alignItems: "center",
                        marginVertical: 4,
                        ...statusStyle,
                      }}
                    >
                      <Text
                        style={{
                          color: statusStyle.color,
                          fontWeight: "600",
                          fontSize: 12,
                          textAlign: "center",
                        }}
                        numberOfLines={1}
                      >
                        {item.Status}
                      </Text>
                    </View>

                    <Text
                      style={{
                        width: columnsWidth[4],
                        padding: 10,
                        textAlign: "center",
                      }}
                    >
                      {item.Date}
                    </Text>
                    <Text
                      style={{
                        width: columnsWidth[5],
                        padding: 10,
                        textAlign: "center",
                      }}
                    >
                      {item.Amount}
                    </Text>
                  </View>
                );
              })}
            </ScrollView>
          </View>
        </ScrollView>
      </View>
    </View>
  );
}
