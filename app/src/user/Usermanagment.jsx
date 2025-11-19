import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Image,
} from "react-native";
import Header from "../../components/Header";
import { useState } from "react";

export default function UserManagement() {
  const [users, setUsers] = useState([
    {
      id: 1,
      name: "John Doe",
      email: "john@example.com",
      selected: false,
      profile: "https://randomuser.me/api/portraits/men/1.jpg",
    },
    {
      id: 2,
      name: "Jane Smith",
      email: "jane@example.com",
      selected: false,
      profile: "https://randomuser.me/api/portraits/women/2.jpg",
    },
    {
      id: 3,
      name: "Ali Khan",
      email: "ali@example.com",
      selected: false,
      profile: "https://randomuser.me/api/portraits/men/3.jpg",
    },
    {
      id: 4,
      name: "Sara Malik",
      email: "sara@example.com",
      selected: false,
      profile: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      id: 5,
      name: "Sara Malik",
      email: "sara@example.com",
      selected: false,
      profile: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      id: 6,
      name: "Sara Malik",
      email: "sara@example.com",
      selected: false,
      profile: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      id: 7,
      name: "Sara Malik",
      email: "sara@example.com",
      selected: false,
      profile: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      id: 8,
      name: "Sara Malik",
      email: "sara@example.com",
      selected: false,
      profile: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      id: 9,
      name: "Sara Malik",
      email: "sara@example.com",
      selected: false,
      profile: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      id: 10,
      name: "Sara Malik",
      email: "sara@example.com",
      selected: false,
      profile: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      id: 11,
      name: "Sara Malik",
      email: "sara@example.com",
      selected: false,
      profile: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      id: 12,
      name: "Sara Malik",
      email: "sara@example.com",
      selected: false,
      profile: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      id: 13,
      name: "Sara Malik",
      email: "sara@example.com",
      selected: false,
      profile: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      id: 14,
      name: "Sara Malik",
      email: "sara@example.com",
      selected: false,
      profile: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      id: 15,
      name: "Sara Malik",
      email: "sara@example.com",
      selected: false,
      profile: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      id: 16,
      name: "Sara Malik",
      email: "sara@example.com",
      selected: false,
      profile: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      id: 17,
      name: "Sara Malik",
      email: "sara@example.com",
      selected: false,
      profile: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      id: 18,
      name: "Sara Malik",
      email: "sara@example.com",
      selected: false,
      profile: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      id: 19,
      name: "Sara Malik",
      email: "sara@example.com",
      selected: false,
      profile: "https://randomuser.me/api/portraits/women/4.jpg",
    },
  ]);

  const toggleSelect = (id) => {
    setUsers((prev) =>
      prev.map((user) =>
        user.id === id ? { ...user, selected: !user.selected } : user
      )
    );
  };

  return (
    <View style={{ flex: 1, backgroundColor: "#f8f8f8" }}>
      <Header />
      <View style={{ padding: 15 }}>
        <Text style={{ fontSize: 22, fontWeight: "700", marginBottom: 5 }}>
          USER MANAGEMENT
        </Text>
        <Text style={{ fontSize: 14, color: "#555", marginBottom: 10 }}>
          Manage your team members and their account permissions
        </Text>
        <Text style={{ fontSize: 14, fontWeight: "600", color: "#333" }}>
          ALL USERS (200 users)
        </Text>
      </View>
      <View
        style={{
          flexDirection: "row",
          paddingHorizontal: 15,
          alignItems: "center",
          marginBottom: 10,
        }}
      >
        <TextInput
          placeholder="Search"
          style={{
            flex: 1,
            height: 40,
            borderWidth: 1,
            borderColor: "#ccc",
            borderRadius: 8,
            paddingHorizontal: 10,
            backgroundColor: "#fff",
          }}
        />
        {/* <TouchableOpacity
          style={{
            marginLeft: 10,
            backgroundColor: "#1c2730",
            paddingVertical: 10,
            paddingHorizontal: 15,
            borderRadius: 8,
          }}
        >
          <Text style={{ color: "#fff", fontWeight: "600" }}> + ADD USER</Text>
        </TouchableOpacity> */}
      </View>
      <View
        style={{
          flexDirection: "row",
          backgroundColor: "#e0e0e0",
          paddingVertical: 12,
          paddingHorizontal: 15,
          borderTopLeftRadius: 8,
          borderTopRightRadius: 8,
        }}
      >
        <Text style={{ width: 50, fontWeight: "700" }}>Select</Text>
        <Text style={{ flex: 1, fontWeight: "700", paddingLeft: 10 }}>
          User Name
        </Text>
        <Text style={{ width: 120, fontWeight: "700", textAlign: "center" }}>
          Actions
        </Text>
      </View>
      <ScrollView
        style={{ flex: 1, paddingHorizontal: 15, marginTop: 1 }}
        contentContainerStyle={{ paddingBottom: 30 }}
      >
        {users.map((user) => (
          <View
            key={user.id}
            style={{
              flexDirection: "row",
              width: "100%",
              alignItems: "center",
              backgroundColor: "#fff",
              paddingVertical: 12,
              borderBottomWidth: 1,
              borderBottomColor: "#eee",
            }}
          >
            <TouchableOpacity
              onPress={() => toggleSelect(user.id)}
              style={{
                width: 20,
                height: 20,
                borderRadius: 4,
                borderWidth: 1,
                borderColor: "#555",
                justifyContent: "center",
                alignItems: "center",
                marginRight: 10,
              }}
            >
              {user.selected && (
                <View
                  style={{
                    width: 16,
                    height: 16,
                    backgroundColor: "#3284F0",
                    borderRadius: 2,
                  }}
                />
              )}
            </TouchableOpacity>
            <View
              style={{ flex: 1, flexDirection: "row", alignItems: "center" }}
            >
              <Image
                source={{ uri: user.profile }}
                style={{
                  width: 36,
                  height: 36,
                  borderRadius: 18,
                  marginRight: 10,
                }}
              />
              <View>
                <Text style={{ fontWeight: "600" }}>{user.name}</Text>
                <Text style={{ fontSize: 12, color: "#555" }}>
                  {user.email}
                </Text>
              </View>
            </View>
            <View
              style={{
                width: 120,
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <TouchableOpacity
                style={{
                  backgroundColor: "#007bff4d",
                  paddingVertical: 6,
                  borderWidth: 2,
                  borderColor: "#3284F0",
                  paddingHorizontal: 8,
                  borderRadius: 16,
                }}
              >
                <Text
                  style={{ color: "#3284F0", fontWeight: "600", fontSize: 12 }}
                >
                  Import
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={{
                  backgroundColor: "#b19ef165",
                  paddingVertical: 6,
                  borderWidth: 2,
                  borderColor: "#B29EF1",
                  paddingHorizontal: 8,
                  borderRadius: 16,
                }}
              >
                <Text
                  style={{ color: "#B29EF1", fontWeight: "600", fontSize: 12 }}
                >
                  Export
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}
