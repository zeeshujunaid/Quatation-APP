import { useRouter } from "expo-router";
import { Text, View, TouchableOpacity, Image } from "react-native";
import BeforeAfterSlider from "./components/beforeafter";
import beforeImg from "../assets/images/beforeimg.jpg";
import afterImg from "../assets/images/afterimg.jpg";

export default function Index() {
  const router = useRouter();

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#008CFF",
        justifyContent: "flex-start",
        alignItems: "center",
        padding: 20,
      }}
    >
      {/* TOP CIRCLE */}
      <View
        style={{
          position: "absolute",
          top: -150,
          width: 350,
          height: 350,
          backgroundColor: "#0A6FE3",
          borderRadius: 200,
          opacity: 0.3,
        }}
      />

      {/* BEFORE / AFTER SLIDER */}
      <View style={{ marginTop: 90, marginBottom: 25 }}>
        <BeforeAfterSlider
          beforeImage={beforeImg}
          afterImage={afterImg}
          width={230}
          height={230}
          sliderColor="#fff"
        />
      </View>

      {/* LOGO */}
      <Image
        source={require("../assets/images/logo.jpg")}
        style={{
          width: 90,
          height: 90,
          borderRadius: 15,
          marginBottom: 25,
        }}
      />

      {/* MAIN TEXT */}
      <Text
        style={{
          color: "white",
          fontSize: 30,
          fontWeight: "800",
          textAlign: "center",
          marginBottom: 10,
        }}
      >
        Welcome to Quotation App
      </Text>

      <Text
        style={{
          color: "#e7e7e7",
          fontSize: 14,
          textAlign: "center",
          paddingHorizontal: 20,
          marginBottom: 40,
        }}
      >
        Create, manage and share quotations with ease. Fast, simple and
        professional.
      </Text>

      {/* LOGIN BUTTON */}
      <TouchableOpacity
        style={{
          backgroundColor: "white",
          paddingVertical: 15,
          width: "70%",
          borderRadius: 12,
          shadowColor: "#000",
          shadowOpacity: 0.3,
          shadowRadius: 4,
          elevation: 5,
        }}
        onPress={() => router.push("/src/common/Profile")}
      >
        <Text
          style={{
            color: "#008CFF",
            fontSize: 18,
            fontWeight: "700",
            textAlign: "center",
          }}
        >
          Login
        </Text>
      </TouchableOpacity>

      {/* FOOTER */}
      <Text
        style={{
          color: "#cce7ff",
          fontSize: 12,
          marginTop: 20,
        }}
      >
        © 2025 Quotation App
      </Text>
    </View>
  );
}
