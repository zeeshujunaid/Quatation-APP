import { Text, View, TouchableOpacity,Image,TextInput } from "react-native";
import { useRouter } from "expo-router";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useState } from "react";

export default function Editprofile() {
      const [gender, setGender] = useState("");

  const router = useRouter();
  return (
    <View style={{ flex: 1 }}>
      <View style={{ paddingTop: 30 }}>
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons
            name="chevron-back-circle-outline"
            size={32}
            color="black"
          />
        </TouchableOpacity>
      </View>
      {/* Profile Image */}
      <View
        style={{
          alignItems: "center",
          marginBottom: 25,
        }}
      >
        <Image
          source={{ uri: "https://i.pravatar.cc/150?img=5" }}
          style={{
            width: 100,
            height: 100,
            borderRadius: 60,
            borderWidth: 2,
            borderColor: "#ccc",
          }}
        />
      </View>

      {/* Full Name Input */}
      <TextInput
        placeholder="Full Name"
        style={{
          borderWidth: 1,
          borderColor: "#ccc",
          padding: 12,
          borderRadius: 10,
          marginBottom: 15,
        }}
      />

      {/* Username Input */}
      <TextInput
        placeholder="Username"
        style={{
          borderWidth: 1,
          borderColor: "#ccc",
          padding: 12,
          borderRadius: 10,
          marginBottom: 15,
        }}
      />

      {/* Email Address Input */}
      <TextInput
        placeholder="Email Address"
        keyboardType="email-address"
        style={{
          borderWidth: 1,
          borderColor: "#ccc",
          padding: 12,
          borderRadius: 10,
          marginBottom: 20,
        }}
      />

      {/* Gender Buttons */}
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginTop: 10,
        }}
      >
        {/* Male */}
        <TouchableOpacity
          onPress={() => setGender("male")}
          style={{
            flex: 1,
            padding: 12,
            borderRadius: 10,
            borderWidth: 1,
            borderColor: gender === "male" ? "dodgerblue" : "#ccc",
            backgroundColor:
              gender === "male" ? "rgba(30,144,255,0.2)" : "#fff",
            marginRight: 10,
            alignItems: "center",
          }}
        >
          <Text
            style={{
              fontWeight: "600",
              color: gender === "male" ? "dodgerblue" : "black",
            }}
          >
            Male
          </Text>
        </TouchableOpacity>

        {/* Female */}
        <TouchableOpacity
          onPress={() => setGender("female")}
          style={{
            flex: 1,
            padding: 12,
            borderRadius: 10,
            borderWidth: 1,
            borderColor: gender === "female" ? "deeppink" : "#ccc",
            backgroundColor:
              gender === "female" ? "rgba(255,20,147,0.2)" : "#fff",
            alignItems: "center",
          }}
        >
          <Text
            style={{
              fontWeight: "600",
              color: gender === "female" ? "deeppink" : "black",
            }}
          >
            Female
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
