import { useRouter } from "expo-router";
import { Text, View, TouchableOpacity } from "react-native";

export default function Index() {
  const router = useRouter();

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#008CFF", // Blue background
        justifyContent: "center",
        alignItems: "center",
        padding: 20,
      }}
    >
      <Text
        style={{
          color: "white",
          fontSize: 28,
          fontWeight: "bold",
          marginBottom: 40,
          textAlign: "center",
        }}
      >
        Welcome to Quotation App
      </Text>

      <TouchableOpacity
        style={{
          backgroundColor: "#104E8B", // Darker blue button
          paddingVertical: 15,
          paddingHorizontal: 40,
          borderRadius: 10,
        }}
        onPress={() => router.push("/auth/Login")}
      >
        <Text
          style={{
            color: "white",
            fontSize: 18,
            fontWeight: "bold",
            textAlign: "center",
          }}
        >
          Login
        </Text>
      </TouchableOpacity>
    </View>
  );
}
