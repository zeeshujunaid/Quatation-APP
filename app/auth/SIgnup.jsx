import {
  View,
  Text,
  StatusBar,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { useRouter } from "expo-router";
import BeforeAfterSlider from "../components/beforeafter";
import beforeImg from "../../assets/images/beforeimg.jpg";
import afterImg from "../../assets/images/afterimg.jpg";

export default function Signup() {
  const router = useRouter();
  return (
    <KeyboardAvoidingView
      style={{ flex: 1, backgroundColor: "#fff" }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <StatusBar hidden />

      <ScrollView
        style={{ flex: 1 }}
        contentContainerStyle={{
          paddingBottom: 20,
        }}
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
      >
        <View
          style={{
            height: 380,
            backgroundColor: "#008CFF",
            width: "100%",
            justifyContent: "flex-start",
            alignItems: "center",
            borderBottomLeftRadius: 200,
            borderBottomRightRadius: 200,
            overflow: "hidden",
            paddingHorizontal: 30,
            paddingTop: 40, // 👈 slider ko neeche push karega
          }}
        >
          {/* BEFORE/AFTER SLIDER */}
          <BeforeAfterSlider
            beforeImage={beforeImg}
            afterImage={afterImg}
            width={200}
            height={200}
            sliderColor="#fff"
          />
          {/* SPACE AFTER SLIDER */}
          <View style={{ height: 20 }} /> {/* 👈 Clean gap added */}
          {/* MAIN HEADING */}
          <Text style={{ color: "white", fontSize: 20, fontWeight: "700" }}>
            Your Vision Our Expertise
          </Text>
          {/* DESCRIPTION */}
          <Text
            style={{
              color: "white",
              textAlign: "center",
              marginTop: 10,
              fontSize: 10,
              paddingHorizontal: 10,
              lineHeight: 18,
            }}
          >
            Experience seamless collaboration where your goals meet our
            professional expertise. Together, we create exceptional results.
          </Text>
        </View>

        <View style={{ paddingHorizontal: 20, paddingTop: 20 }}>
          <Text
            style={{
              fontSize: 24,
              fontWeight: "700",
              color: "#333",
              textAlign: "center",
              marginBottom: 10,
            }}
          >
            Signup
          </Text>

          <Text
            style={{
              color: "#555",
              marginBottom: 20,
              textAlign: "center",
            }}
          >
            Enter your email and password to login
          </Text>

          <Text style={{ color: "#333", fontWeight: "600", marginBottom: 5 }}>
            Name
          </Text>
          <TextInput
            placeholder="Enter your Name"
            placeholderTextColor="#aaa"
            style={{
              borderWidth: 1,
              borderColor: "#008CFF",
              borderRadius: 8,
              padding: 12,
              marginBottom: 20,
            }}
          />

          <Text style={{ color: "#333", fontWeight: "600", marginBottom: 5 }}>
            Email Address
          </Text>
          <TextInput
            placeholder="Enter your email"
            placeholderTextColor="#aaa"
            style={{
              borderWidth: 1,
              borderColor: "#008CFF",
              borderRadius: 8,
              padding: 12,
              marginBottom: 20,
            }}
          />

          <Text style={{ color: "#333", fontWeight: "600", marginBottom: 5 }}>
            Password
          </Text>
          <TextInput
            placeholder="Enter your password"
            placeholderTextColor="#aaa"
            secureTextEntry
            style={{
              borderWidth: 1,
              borderColor: "#008CFF",
              borderRadius: 8,
              padding: 12,
              marginBottom: 20,
            }}
          />

          <Text style={{ color: "#333", fontWeight: "600", marginBottom: 5 }}>
            Confirm Password
          </Text>
          <TextInput
            placeholder="Enter your confirm password"
            placeholderTextColor="#aaa"
            secureTextEntry
            style={{
              borderWidth: 1,
              borderColor: "#008CFF",
              borderRadius: 8,
              padding: 12,
              marginBottom: 20,
            }}
          />

          <TouchableOpacity
            style={{
              backgroundColor: "#008CFF",
              paddingVertical: 15,
              borderRadius: 10,
              alignItems: "center",
              marginBottom: 50,
            }}
            onPress={() => router.push("/src/user/Homescreen")}
          >
            <Text style={{ color: "white", fontWeight: "bold", fontSize: 16 }}>
              Signup
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
