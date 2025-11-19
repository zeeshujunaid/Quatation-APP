import { View, Text, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
export default function Aboutapp() {
  const router = useRouter();
  const About = [
    {
      number: "1",
      heading: "Quotation Creation",
      desc: "Generate professional quotations instantly with auto-calculated totals and tax summaries.",
    },
    {
      number: "2",
      heading: "Custom Field Builder",
      desc: "Super Admins can add, edit, or remove fields to match their company’s needs — no coding.",
    },
    {
      number: "3",
      heading: "Client Management",
      desc: "Store and organize client details, view history, and access past quotations anytime.",
    },
    {
      number: "4",
      heading: "Dashboard & Analytics",
      desc: "Track total quotations, pending approvals, and client data with a real-time dashboard.",
    },
    {
      number: "5",
      heading: "Template Designer",
      desc: "Create and customize quotation templates to match your brand identity.",
    },
  ];

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#fff",
        padding: 20,
        paddingTop: 40,
      }}
    >
      {/* HEADER */}
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          marginBottom: 30,
        }}
      >
        <TouchableOpacity onPress={() =>router.back()}>
          <Ionicons
            name="chevron-back-circle-outline"
            size={32}
            color="black"
          />
        </TouchableOpacity>
        <Text style={{ fontSize: 22, fontWeight: "700", marginLeft: 90 }}>
          About App
        </Text>
      </View>

      {/* ABOUT LIST */}
      {About.map((item) => (
        <View key={item.number} style={{ marginBottom: 22 }}>
          {/* NUMBER + HEADING */}
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Text
              style={{
                fontSize: 18,
                fontWeight: "700",
                color: "black",
                marginRight: 8,
              }}
            >
              {item.number}.
            </Text>

            <Text
              style={{
                fontSize: 18,
                fontWeight: "700",
                color: "black",
                flexShrink: 1,
              }}
            >
              {item.heading}
            </Text>
          </View>

          {/* DESCRIPTION */}
          <Text
            style={{
              fontSize: 14,
              color: "#6B7280",
              marginTop: 4,
              lineHeight: 20,
            }}
          >
            {item.desc}
          </Text>
        </View>
      ))}
    </View>
  );
}
