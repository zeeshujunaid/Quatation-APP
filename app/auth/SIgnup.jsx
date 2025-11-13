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

export default function Signup() {
  return (
    <KeyboardAvoidingView
      style={{ flex: 1, backgroundColor: "#fff" }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <StatusBar hidden />

      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
          alignItems: "center",
          backgroundColor: "#fff",
        }}
        keyboardShouldPersistTaps="handled"
      >
        <View
          style={{
            height: "45%",
            backgroundColor: "#008CFF",
            width: "100%",
            // borderRadius:100,
            borderBottomLeftRadius: 115, // pixel value — NOT percentage
            borderBottomRightRadius: 115,
            justifyContent: "center",
            alignItems: "center",
            // paddingHorizontal: 20,
          }}
        >
          <Image
            source={require("../../assets/images/icon.png")}
            style={{ height: 100, width: 100, marginBottom: 20 }}
            resizeMode="contain"
          />

          <Text style={{ color: "white", fontSize: 18, fontWeight: "600" }}>
            Your Vision Our Expertise
          </Text>
          <Text
            style={{
              color: "white",
              textAlign: "center",
              marginTop: 10,
              fontSize: 14,
            }}
          >
            Experience seamless collaboration where your goals meet our
            professional expertise. Together, we create exceptional results.
          </Text>
        </View>

        <View
          style={{
            width: "90%",
            marginTop: 30,
            justifyContent: "center",
            // alignItems:"center",
            textAlign: "center",
          }}
        >
          <Text style={{ fontSize: 24, fontWeight: "700", color: "#333" }}>
            Signup
          </Text>
          <Text style={{ color: "#555", marginBottom: 20 }}>
            Enter your email and password to login
          </Text>

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
              marginBottom: 15,
            }}
          />

          <Text
            style={{
              textAlign: "right",
              color: "#008CFF",
              marginBottom: 25,
              fontWeight: "500",
            }}
          >
            Forgot password?
          </Text>

          <TouchableOpacity
            style={{
              backgroundColor: "#008CFF",
              paddingVertical: 15,
              borderRadius: 10,
              alignItems: "center",
            }}
            onPress={() => router.push("/Signup")}
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
