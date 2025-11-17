import { Text, View } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function Clientherosection() {
  return (
    <View
      style={{
        flexDirection: "column",
        width: "100%",
        height: "40%",
        paddingHorizontal: 10,
      }}
    >
      {/* First Row */}
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginBottom: 10,
        }}
      >
        {/* BOX 1 */}
        <View
          style={{
            flexDirection: "column",
            backgroundColor: "#fff",
            padding: 12,
            borderWidth: 1,
            gap: 10,
            borderColor: "#00000020",
            borderRadius: 10,
            width: "48%",
          }}
        >
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <View
              style={{
                backgroundColor: "#f1f1f1",
                padding: 8,
                borderRadius: 50,
                marginRight: 8,
              }}
            >
              <Ionicons name="notifications-outline" size={20} color="#444" />
            </View>

            <Text
              style={{
                fontSize: 20,
                fontWeight: "600",
                color: "#333",
                flex: 1,
                flexWrap: "wrap",
              }}
              numberOfLines={2}
            >
              Total Quotation
            </Text>
          </View>

          <Text
            style={{
              fontSize: 26,
              fontWeight: "700",
              marginTop: 6,
              color: "#000",
            }}
          >
            12
          </Text>

          <View style={{ flexDirection: "row", marginTop: 4 }}>
            <Text style={{ color: "green", fontWeight: "600" }}>+2% </Text>
            <Text style={{ color: "#666" }}>vs last week</Text>
          </View>
        </View>

        {/* BOX 2 */}
        <View
          style={{
            flexDirection: "column",
            backgroundColor: "#fff",
            padding: 12,
            borderWidth: 1,
            gap: 10,
            borderColor: "#00000020",
            borderRadius: 10,
            width: "48%",
          }}
        >
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <View
              style={{
                backgroundColor: "#f1f1f1",
                padding: 8,
                borderRadius: 50,
                marginRight: 8,
              }}
            >
              <Ionicons name="notifications-outline" size={20} color="#444" />
            </View>

            <Text style={{ fontSize: 18, fontWeight: "600", color: "#333" }}>
              Pending Quotation
            </Text>
          </View>

          <Text
            style={{
              fontSize: 26,
              fontWeight: "700",
              marginTop: 6,
              color: "#000",
            }}
          >
            25%
          </Text>

          <View style={{ flexDirection: "row", marginTop: 4 }}>
            <Text style={{ color: "green", fontWeight: "600" }}>+2% </Text>
            <Text style={{ color: "#666" }}>vs last week</Text>
          </View>
        </View>
      </View>

      {/* Single Box */}
      <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
        <View
          style={{
            flexDirection: "column",
            backgroundColor: "#fff",
            padding: 12,
            gap: 10,
            borderWidth: 1,
            borderColor: "#00000020",
            borderRadius: 10,
            width: "48%",
          }}
        >
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <View
              style={{
                backgroundColor: "#f1f1f1",
                padding: 8,
                borderRadius: 50,
                marginRight: 8,
              }}
            >
              <Ionicons name="notifications-outline" size={20} color="#444" />
            </View>

            <Text
              style={{
                fontSize: 18,
                color: "#333",
                fontFamily: "fustat",
                fontWeight: "bold",
              }}
            >
              New Clients
            </Text>
          </View>

          <Text
            style={{
              fontSize: 26,
              fontWeight: "700",
              marginTop: 6,
              color: "#000",
            }}
          >
            230
          </Text>

          <View style={{ flexDirection: "row", marginTop: 4 }}>
            <Text style={{ color: "green", fontWeight: "600" }}>+2% </Text>
            <Text style={{ color: "#666" }}>vs last week</Text>
          </View>
        </View>
        {/* Single Box */}
        <View
          style={{
            flexDirection: "column",
            backgroundColor: "#fff",
            padding: 12,
            gap: 10,
            borderWidth: 1,
            borderColor: "#00000020",
            borderRadius: 10,
            width: "48%",
          }}
        >
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <View
              style={{
                backgroundColor: "#f1f1f1",
                padding: 8,
                borderRadius: 50,
                marginRight: 8,
              }}
            >
              <Ionicons name="notifications-outline" size={20} color="#444" />
            </View>

            <Text
              style={{
                fontSize: 18,
                color: "#333",
                fontFamily: "fustat",
                fontWeight: "bold",
              }}
            >
              New Clients
            </Text>
          </View>

          <Text
            style={{
              fontSize: 26,
              fontWeight: "700",
              marginTop: 6,
              color: "#000",
            }}
          >
            230
          </Text>

          <View style={{ flexDirection: "row", marginTop: 4 }}>
            <Text style={{ color: "green", fontWeight: "600" }}>+2% </Text>
            <Text style={{ color: "#666" }}>vs last week</Text>
          </View>
        </View>
      </View>
    </View>
  );
}
