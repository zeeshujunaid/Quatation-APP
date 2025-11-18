import { Text, View } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import Feather from "@expo/vector-icons/Feather";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
export default function Adminherosection() {
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
                backgroundColor: "#E9EAEC",
                padding: 8,
                borderRadius: 60,
                marginRight: 8,
              }}
            >
              <AntDesign name="file" size={24} color="#00000049" />
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

          <View style={{ flexDirection: "row", marginTop: 4,gap:5, }}>
            <Text
              style={{
                color: "green",
                fontWeight: "600",
                backgroundColor: "#E5F5ED",
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
                backgroundColor: "#17b26a1a",
                padding: 8,
                borderRadius: 50,
                marginRight: 8,
              }}
            >
              <MaterialIcons name="pending-actions" size={24} color="#17B26A" />
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

          <View style={{ flexDirection: "row", marginTop: 4, gap: 4 }}>
            <Text
              style={{
                color: "green",
                fontWeight: "600",
                backgroundColor: "#E5F5ED",
                borderRadius: 5,
              }}
            >
              +2%{" "}
            </Text>
            <Text style={{ color: "#666" }}>vs last week</Text>
          </View>
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
        }}
      >
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <View
            style={{
              backgroundColor: "#EEF2FB",
              padding: 8,
              borderRadius: 60,
              marginRight: 8,
            }}
          >
            <Feather name="users" size={24} color="#527EDB" />
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
              backgroundColor: "#E5F5ED",
              borderRadius: 5,
            }}
          >
            +2%{" "}
          </Text>
          <Text style={{ color: "#666" }}>vs last week</Text>
        </View>
      </View>
    </View>
  );
}
