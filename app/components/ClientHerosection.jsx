import { Text, View } from "react-native";
import Feather from "@expo/vector-icons/Feather";
import AntDesign from "@expo/vector-icons/AntDesign";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
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
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginBottom: 10,
        }}
      >
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
              <Feather name="users" size={24} color="#527EDB" />
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
              Total Clients
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

          <View style={{ flexDirection: "row", marginTop: 4, gap: 5 }}>
            <Text
              style={{
                color: "#527EDB",
                fontWeight: "600",
                backgroundColor: "#527ddb3a",
                borderRadius: 5,
              }}
            >
              +2%{" "}
            </Text>
            <Text style={{ color: "#666" }}>vs last week</Text>
          </View>
        </View>

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
                backgroundColor: "#17b26a3a",
                padding: 8,
                borderRadius: 60,
                marginRight: 8,
              }}
            >
              <AntDesign name="check-circle" size={24} color="#17B26A" />
            </View>

            <Text style={{ fontSize: 18, fontWeight: "600", color: "#333" }}>
              Approved Quotation
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

          <View style={{ flexDirection: "row", marginTop: 4, gap: 5 }}>
            <Text
              style={{
                color: "green",
                fontWeight: "600",
                backgroundColor: "#17b26a3a",
                borderRadius: 5,
              }}
            >
              +2%{" "}
            </Text>
            <Text style={{ color: "#666" }}>vs last week</Text>
          </View>
        </View>
      </View>

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
                backgroundColor: "#ff03032a",
                padding: 8,
                borderRadius: 50,
                marginRight: 8,
              }}
            >
              <AntDesign name="close" size={24} color="red" />
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

          <View style={{ flexDirection: "row", marginTop: 4, gap: 5 }}>
            <Text
              style={{
                color: "red",
                fontWeight: "600",
                backgroundColor: "#ff03032a",
                borderRadius: 5,
              }}
            >
              +2%{" "}
            </Text>
            <Text style={{ color: "#666" }}>vs last week</Text>
          </View>
        </View>
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
                backgroundColor: "#17b26a1c",
                padding: 8,
                borderRadius: 50,
                marginRight: 8,
              }}
            >
              <MaterialCommunityIcons
                name="format-title"
                size={24}
                color="green"
              />
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

          <View style={{ flexDirection: "row", marginTop: 4 ,gap:5,}}>
            <Text
              style={{
                color: "green",
                fontWeight: "600",
                borderRadius:5,
                backgroundColor: "#17b26a1c",
              }}
            >
              +2%{" "}
            </Text>
            <Text style={{ color: "#666" }}>vs last week</Text>
          </View>
        </View>
      </View>
    </View>
  );
}
