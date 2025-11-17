import { ScrollView, Text, Touchable, TouchableOpacity, View } from "react-native";
import Header from "../../components/Header";
import Welcomsection from "../../components/Welcomesection";
import Adminherosection from "../../components/Adminherosection";
import { useRouter } from "expo-router";

export default function Dashboard() {
  const router = useRouter();

  const quotations = [
    { id: "01", client: "Ali Khan", date: "12 Nov 2025", total: "250" },
    { id: "02", client: "Ahmed Raza", date: "10 Nov 2025", total: "1850" },
    { id: "03", client: "Sara Malik", date: "08 Nov 2025", total: "3200" },
    { id: "04", client: "Usman Tariq", date: "05 Nov 2025", total: "15" },
    { id: "05", client: "Bilal Ahmed", date: "02 Nov 2025", total: "2790" },
  ];


  return (
    <View style={{ flex: 1, backgroundColor: "#fff" }}>
      <Header />

      <Welcomsection />

      <ScrollView
        style={{ flex: 1 }}
        contentContainerStyle={{
          paddingBottom: 6,
        }}
      >
        <View style={{ marginBottom: 80 }}>
          <Adminherosection />
        </View>

        <View
          style={{
            height: 300,
            margin: 10,
            borderRadius: 10,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Text
              style={{
                fontFamily: "fustat",
                fontWeight: "800",
                fontSize: 20,
              }}
            >
              Recent Quotation
            </Text>
            <TouchableOpacity onPress={() => router.push("/src/admin/RecentQuatation")}>
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

          <View
            style={{
              flex: 1,
              borderRadius: 10,
              backgroundColor: "#ffffffff",
              borderWidth: 1,
              borderColor: "#00000025",
              paddingTop: 20,
            }}
          >
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

            <View style={{ paddingHorizontal: 10 }}>
              {quotations.map((item, index) => (
                <View
                  key={index}
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    paddingVertical: 10,
                    borderBottomWidth: 1,
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
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
