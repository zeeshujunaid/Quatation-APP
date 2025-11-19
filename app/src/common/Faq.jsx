import React, { useState } from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useRouter } from "expo-router";
import AntDesign from "@expo/vector-icons/AntDesign";


export default function FAQ() {
    const router = useRouter();

  const faqData = [
    {
      question: "What is the Quotation System App?",
      answer:
        "It’s a platform where users can request quotations for products or services, and vendors can send personalized offers in response.",
    },
    {
      question: "How can I request a quotation?",
      answer:
        "You can install it using npm or yarn and follow the official documentation.",
    },
    {
      question: "Can I compare quotations from multiple vendors?",
      answer: "A component is a reusable piece of UI in React Native.",
    },
    {
      question: "How long does it take to receive a quotation?",
      answer:
        "You can style components using the StyleSheet API or inline styles.",
    },
    {
      question: "Can I approve or reject a quotation?",
      answer: "State is a way to store and manage dynamic data in a component.",
    },
    {
      question: "Do I need to register to use the app?",
      answer:
        "You can use TextInput components and handle changes with onChangeText.",
    },
    {
      question: "Can I view my previous quotations?",
      answer:
        "Props are inputs to components used to pass data from parent to child.",
    },
    {
      question: "Is there any fee for requesting quotations?",
      answer:
        "You can use React Navigation for handling navigation in your app.",
    },
  ];

  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleExpand = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <View style={{ flex: 1, backgroundColor: "#fff" }}>
      {/* Header */}
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          padding: 15,
          marginTop: 20,
        }}
      >
        {/* Back Button */}
        <TouchableOpacity
          onPress={() =>router.back()}
          style={{ paddingRight: 15 }}
        >
          <Ionicons
            name="chevron-back-circle-outline"
            size={32}
            color="black"
          />
        </TouchableOpacity>

        {/* Title */}
        <Text
          style={{
            fontSize: 18,
            fontWeight: "700",
            flex: 1,
            textAlign: "center",
          }}
        >
          FAQ
        </Text>

        {/* Placeholder for centering title */}
        <View style={{ width: 24 }} />
      </View>

      {/* FAQ List */}
      <ScrollView style={{ flex: 1, padding: 15 }}>
        {faqData.map((item, index) => (
          <View
            key={index}
            style={{
              marginBottom: 10,
              borderWidth: 1,
              borderColor: "#ddd",
              borderRadius: 8,
              overflow: "hidden",
            }}
          >
            <TouchableOpacity
              onPress={() => toggleExpand(index)}
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                padding: 15,
                backgroundColor: "#f5f5f5",
              }}
            >
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: "600",
                  flex: 1,
                  paddingRight: 10,
                }}
              >
                {item.question}
              </Text>
              <AntDesign
                name={expandedIndex === index ? "minus" : "plus"}
                size={20}
                color="black"
              />
            </TouchableOpacity>

            {expandedIndex === index && (
              <View style={{ padding: 15, backgroundColor: "#fff" }}>
                <Text style={{ fontSize: 14, color: "#555" }}>
                  {item.answer}
                </Text>
              </View>
            )}
          </View>
        ))}
      </ScrollView>
    </View>
  );
}
