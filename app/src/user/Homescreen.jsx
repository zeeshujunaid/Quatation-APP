import {
  Text,
  TouchableOpacity,
  View,
  TextInput,
  Modal,
  Image,
  ScrollView,
} from "react-native";
import Header from "../../components/Header";
import AntDesign from "@expo/vector-icons/AntDesign";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import Feather from "@expo/vector-icons/Feather";
import React, { useState } from "react";
import Ionicons from "@expo/vector-icons/Ionicons";


export default function Homescreen() {
  const [activeForm, setActiveForm] = useState(1);
    const [modalVisible, setModalVisible] = useState(false);
  return (
    <View style={{ flex: 1 }}>
      <Header />

      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          marginVertical: 10,
          marginHorizontal: 10,
        }}
      >
        <Text style={{ fontSize: 18, fontWeight: "600" }}>New Invoice</Text>
        <AntDesign name="scan" size={24} color="black" />
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          marginVertical: 10,
          marginHorizontal: 10,
        }}
      >
        <TouchableOpacity>
          <View
            style={{
              alignItems: "center",
              flexDirection: "row",
              backgroundColor: "#00000007",
              justifyContent: "space-around",
              borderRadius: 5,
              height: 30,
              gap: 5,
              paddingHorizontal: 8,
            }}
          >
            <MaterialCommunityIcons name="eye-closed" size={14} color="black" />{" "}
            <TouchableOpacity onPress={() => setModalVisible(true)}>
              <Text style={{ fontSize: 12 }}>See Preview</Text>{" "}
            </TouchableOpacity>
          </View>
        </TouchableOpacity>

        <TouchableOpacity>
          <View
            style={{
              alignItems: "center",
              flexDirection: "row",
              backgroundColor: "#00000007",
              justifyContent: "space-around",
              gap: 5,
              borderRadius: 5,
              height: 30,
              paddingHorizontal: 8,
            }}
          >
            <Feather name="save" size={14} color="black" />
            <Text style={{ fontSize: 12 }}>Save As Draft</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity>
          <View
            style={{
              alignItems: "center",
              gap: 5,
              flexDirection: "row",
              backgroundColor: "#00000007",
              justifyContent: "space-around",
              borderRadius: 5,
              height: 30,
              paddingHorizontal: 8,
            }}
          >
            <Feather name="send" size={14} color="black" />
            <Text style={{ fontSize: 12 }}>Send Invoices</Text>
          </View>
        </TouchableOpacity>
      </View>

      <View
        style={{
          flex: 1,
          paddingHorizontal: 5,
          paddingTop: 10,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <TouchableOpacity
            onPress={() => setActiveForm(1)}
            style={{
              backgroundColor: activeForm === 1 ? "#DCEEFF" : "#e0e0e0",
              paddingVertical: 2,
              height: 25,
              borderColor: "#007AFF",
              borderWidth: 2,
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 6,
              marginHorizontal: 2,
              flex: 1,
              alignItems: "center",
            }}
          >
            <Text style={{ fontSize: 10, color: "#007AFF" }}>
              Customer Details
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => setActiveForm(2)}
            style={{
              backgroundColor: activeForm === 1 ? "#DCEEFF" : "#e0e0e0",
              paddingVertical: 2,
              borderColor: "#007AFF",
              borderWidth: 2,
              height: 25,
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 6,
              flex: 1,
              alignItems: "center",
              marginHorizontal: 5,
            }}
          >
            <Text style={{ fontSize: 11, color: "#007AFF" }}>
              Order Sources
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => setActiveForm(3)}
            style={{
              backgroundColor: activeForm === 1 ? "#DCEEFF" : "#e0e0e0",
              paddingVertical: 2,
              borderColor: "#007AFF",
              borderWidth: 2,
              height: 25,
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 6,
              flex: 1,
              alignItems: "center",
              marginHorizontal: 5,
            }}
          >
            <Text style={{ fontSize: 11, color: "#007AFF" }}>Add Product</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => setActiveForm(4)}
            style={{
              backgroundColor: activeForm === 1 ? "#cbe4fcff" : "#e0e0e0",
              paddingVertical: 2,
              borderColor: "#007AFF",
              borderWidth: 2,
              height: 25,
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 6,
              flex: 1,
              alignItems: "center",
              marginHorizontal: 5,
            }}
          >
            <Text style={{ fontSize: 11, color: "#007AFF" }}>
              Price Summary
            </Text>
          </TouchableOpacity>
        </View>
        {activeForm === 1 && (
          <View
            style={{
              marginTop: 15,
              padding: 20,
              borderRadius: 8,
              width: "100%",
            }}
          >
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-around",
                marginBottom: 15,
              }}
            >
              <View style={{ flex: 1, marginRight: 5 }}>
                <Text style={{ fontWeight: "600", marginBottom: 5 }}>
                  Client Name
                </Text>
                <TextInput
                  placeholder="Enter Client Name"
                  style={{
                    borderWidth: 1,
                    borderColor: "#aaa",
                    borderRadius: 6,
                    padding: 12,
                    height: 45,
                  }}
                />
              </View>

              <View style={{ flex: 1, marginLeft: 5 }}>
                <Text style={{ fontWeight: "600", marginBottom: 5 }}>
                  Company Name
                </Text>
                <TextInput
                  placeholder="Enter Company Name"
                  style={{
                    borderWidth: 1,
                    borderColor: "#aaa",
                    borderRadius: 6,
                    padding: 12,
                    height: 45,
                  }}
                />
              </View>
            </View>

            <View style={{ marginBottom: 15 }}>
              <Text style={{ fontWeight: "600", marginBottom: 5 }}>
                Delivery Address
              </Text>
              <TextInput
                placeholder="Enter Delivery Address"
                style={{
                  borderWidth: 1,
                  borderColor: "#aaa",
                  borderRadius: 6,
                  padding: 12,
                  height: 45,
                }}
              />
            </View>

            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                marginBottom: 15,
              }}
            >
              <View style={{ flex: 1, marginRight: 5 }}>
                <Text style={{ fontWeight: "600", marginBottom: 5 }}>City</Text>
                <TextInput
                  placeholder="Enter City"
                  style={{
                    borderWidth: 1,
                    borderColor: "#aaa",
                    borderRadius: 6,
                    padding: 12,
                    height: 45,
                  }}
                />
              </View>

              <View style={{ flex: 1, marginHorizontal: 5 }}>
                <Text style={{ fontWeight: "600", marginBottom: 5 }}>
                  State
                </Text>
                <TextInput
                  placeholder="Enter State"
                  style={{
                    borderWidth: 1,
                    borderColor: "#aaa",
                    borderRadius: 6,
                    padding: 12,
                    height: 45,
                  }}
                />
              </View>

              <View style={{ flex: 1, marginLeft: 5 }}>
                <Text style={{ fontWeight: "600", marginBottom: 5 }}>
                  Postal Code
                </Text>
                <TextInput
                  placeholder="Enter Postal Code"
                  style={{
                    borderWidth: 1,
                    borderColor: "#aaa",
                    borderRadius: 6,
                    padding: 12,
                    height: 45,
                  }}
                />
              </View>
            </View>

            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                marginBottom: 15,
              }}
            >
              <View style={{ flex: 1, marginRight: 5 }}>
                <Text style={{ fontWeight: "600", marginBottom: 5 }}>
                  Email
                </Text>
                <TextInput
                  placeholder="Enter Email"
                  style={{
                    borderWidth: 1,
                    borderColor: "#aaa",
                    borderRadius: 6,
                    padding: 12,
                    height: 45,
                  }}
                />
              </View>

              <View style={{ flex: 1, marginLeft: 5 }}>
                <Text style={{ fontWeight: "600", marginBottom: 5 }}>
                  Phone Number
                </Text>
                <TextInput
                  placeholder="Enter Phone Number"
                  style={{
                    borderWidth: 1,
                    borderColor: "#aaa",
                    borderRadius: 6,
                    padding: 12,
                    height: 45,
                  }}
                />
              </View>
            </View>

            <View>
              <Text style={{ fontWeight: "600", marginBottom: 5 }}>
                Special Note
              </Text>
              <TextInput
                placeholder="Enter Special Note"
                multiline
                numberOfLines={4}
                style={{
                  borderWidth: 1,
                  borderColor: "#aaa",
                  borderRadius: 6,
                  padding: 12,
                  textAlignVertical: "top",
                  height: 90,
                }}
              />
            </View>
          </View>
        )}
        {activeForm === 2 && (
          <View
            style={{
              marginTop: 10,
              padding: 15,
              borderRadius: 8,
            }}
          >
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                marginBottom: 15,
              }}
            >
              <View style={{ flex: 1, marginRight: 5 }}>
                <Text style={{ fontWeight: "600", marginBottom: 5 }}>
                  Order Source
                </Text>
                <TextInput
                  placeholder="Enter Order Source"
                  style={{
                    borderWidth: 1,
                    borderColor: "#aaa",
                    borderRadius: 6,
                    padding: 12,
                    height: 45,
                  }}
                />
              </View>
              <View style={{ flex: 1, marginLeft: 5 }}>
                <Text style={{ fontWeight: "600", marginBottom: 5 }}>
                  Order Date
                </Text>
                <TextInput
                  placeholder="Enter Order Date"
                  style={{
                    borderWidth: 1,
                    borderColor: "#aaa",
                    borderRadius: 6,
                    padding: 12,
                    height: 45,
                  }}
                />
              </View>
            </View>

            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                marginBottom: 15,
              }}
            >
              <View style={{ flex: 1, marginRight: 5 }}>
                <Text style={{ fontWeight: "600", marginBottom: 5 }}>
                  Issue Date
                </Text>
                <TextInput
                  placeholder="Enter Issue Date"
                  style={{
                    borderWidth: 1,
                    borderColor: "#aaa",
                    borderRadius: 6,
                    padding: 12,
                    height: 45,
                  }}
                />
              </View>
              <View style={{ flex: 1, marginLeft: 5 }}>
                <Text style={{ fontWeight: "600", marginBottom: 5 }}>
                  Due Date
                </Text>
                <TextInput
                  placeholder="Enter Due Date"
                  style={{
                    borderWidth: 1,
                    borderColor: "#aaa",
                    borderRadius: 6,
                    padding: 12,
                    height: 45,
                  }}
                />
              </View>
            </View>

            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                marginBottom: 15,
              }}
            >
              <View style={{ flex: 1, marginRight: 5 }}>
                <Text style={{ fontWeight: "600", marginBottom: 5 }}>
                  Payment Method
                </Text>
                <TextInput
                  placeholder="Enter Payment Method"
                  style={{
                    borderWidth: 1,
                    borderColor: "#aaa",
                    borderRadius: 6,
                    padding: 12,
                    height: 45,
                  }}
                />
              </View>
              <View style={{ flex: 1, marginLeft: 5 }}>
                <Text style={{ fontWeight: "600", marginBottom: 5 }}>
                  Advance Payment
                </Text>
                <TextInput
                  placeholder="Enter Advance Payment"
                  style={{
                    borderWidth: 1,
                    borderColor: "#aaa",
                    borderRadius: 6,
                    padding: 12,
                    height: 45,
                  }}
                />
              </View>
            </View>

            <View>
              <Text style={{ fontWeight: "600", marginBottom: 5 }}>
                Terms & Conditions
              </Text>
              <TextInput
                placeholder="Enter Terms & Conditions"
                multiline
                numberOfLines={4}
                style={{
                  borderWidth: 1,
                  borderColor: "#aaa",
                  borderRadius: 6,
                  padding: 12,
                  textAlignVertical: "top",
                  height: 90,
                }}
              />
            </View>
          </View>
        )}
        {activeForm === 3 && (
          <View
            style={{
              marginTop: 10,
              padding: 15,
              borderRadius: 8,
            }}
          >
            <Text style={{ fontWeight: "600", marginBottom: 15, fontSize: 16 }}>
              Add Product
            </Text>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                marginBottom: 15,
              }}
            >
              <View style={{ flex: 1, marginRight: 5 }}>
                <Text style={{ fontWeight: "600", marginBottom: 5 }}>
                  Product Name
                </Text>
                <TextInput
                  placeholder="Enter Product Name"
                  style={{
                    borderWidth: 1,
                    borderColor: "#aaa",
                    borderRadius: 6,
                    padding: 12,
                    height: 45,
                  }}
                />
              </View>
              <View style={{ flex: 1, marginLeft: 5 }}>
                <Text style={{ fontWeight: "600", marginBottom: 5 }}>
                  Category
                </Text>
                <TextInput
                  placeholder="Enter Category"
                  style={{
                    borderWidth: 1,
                    borderColor: "#aaa",
                    borderRadius: 6,
                    padding: 12,
                    height: 45,
                  }}
                />
              </View>
            </View>

            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                marginBottom: 15,
              }}
            >
              <View style={{ flex: 1, marginRight: 5 }}>
                <Text style={{ fontWeight: "600", marginBottom: 5 }}>
                  Unit Measure
                </Text>
                <TextInput
                  placeholder="Enter Unit Measure"
                  style={{
                    borderWidth: 1,
                    borderColor: "#aaa",
                    borderRadius: 6,
                    padding: 12,
                    height: 45,
                  }}
                />
              </View>
              <View style={{ flex: 1, marginLeft: 5 }}>
                <Text style={{ fontWeight: "600", marginBottom: 5 }}>
                  Quantity
                </Text>
                <TextInput
                  placeholder="Enter Quantity"
                  style={{
                    borderWidth: 1,
                    borderColor: "#aaa",
                    borderRadius: 6,
                    padding: 12,
                    height: 45,
                  }}
                />
              </View>
            </View>

            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                marginBottom: 15,
              }}
            >
              <View style={{ flex: 1, marginRight: 5 }}>
                <Text style={{ fontWeight: "600", marginBottom: 5 }}>City</Text>
                <TextInput
                  placeholder="Enter City"
                  style={{
                    borderWidth: 1,
                    borderColor: "#aaa",
                    borderRadius: 6,
                    padding: 12,
                    height: 45,
                  }}
                />
              </View>
              <View style={{ flex: 1, marginLeft: 5 }}>
                <Text style={{ fontWeight: "600", marginBottom: 5 }}>
                  Phone Number
                </Text>
                <TextInput
                  placeholder="Enter Phone Number"
                  style={{
                    borderWidth: 1,
                    borderColor: "#aaa",
                    borderRadius: 6,
                    padding: 12,
                    height: 45,
                  }}
                />
              </View>
            </View>

            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                marginBottom: 15,
              }}
            >
              <View style={{ flex: 1, marginRight: 5 }}>
                <Text style={{ fontWeight: "600", marginBottom: 5 }}>
                  Unit Price
                </Text>
                <TextInput
                  placeholder="Enter Unit Price"
                  style={{
                    borderWidth: 1,
                    borderColor: "#aaa",
                    borderRadius: 6,
                    padding: 12,
                    height: 45,
                  }}
                />
              </View>
              <View style={{ flex: 1, marginLeft: 5 }}>
                <Text style={{ fontWeight: "600", marginBottom: 5 }}>
                  Discount Applied
                </Text>
                <TextInput
                  placeholder="Enter Discount"
                  style={{
                    borderWidth: 1,
                    borderColor: "#aaa",
                    borderRadius: 6,
                    padding: 12,
                    height: 45,
                  }}
                />
              </View>
            </View>

            <View>
              <Text style={{ fontWeight: "600", marginBottom: 5 }}>
                Tax Applied
              </Text>
              <TextInput
                placeholder="Enter Tax"
                style={{
                  borderWidth: 1,
                  borderColor: "#aaa",
                  borderRadius: 6,
                  padding: 12,
                  height: 45,
                }}
              />
            </View>
          </View>
        )}
        {activeForm === 4 && (
          <View
            style={{
              marginTop: 10,
              padding: 15,
              borderRadius: 8,
            }}
          >
            <Text style={{ fontWeight: "600", marginBottom: 15, fontSize: 16 }}>
              Price Summary
            </Text>

            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                marginBottom: 15,
              }}
            >
              <View style={{ flex: 1, marginRight: 5 }}>
                <Text style={{ fontWeight: "600", marginBottom: 5 }}>
                  Subtotal
                </Text>
                <TextInput
                  placeholder="Enter Subtotal"
                  style={{
                    borderWidth: 1,
                    borderColor: "#aaa",
                    borderRadius: 6,
                    padding: 12,
                    height: 45,
                  }}
                />
              </View>
              <View style={{ flex: 1, marginLeft: 5 }}>
                <Text style={{ fontWeight: "600", marginBottom: 5 }}>
                  Discount Applied
                </Text>
                <TextInput
                  placeholder="Enter Discount"
                  style={{
                    borderWidth: 1,
                    borderColor: "#aaa",
                    borderRadius: 6,
                    padding: 12,
                    height: 45,
                  }}
                />
              </View>
            </View>

            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <View style={{ flex: 1, marginRight: 5 }}>
                <Text style={{ fontWeight: "600", marginBottom: 5 }}>
                  Total Tax Applied
                </Text>
                <TextInput
                  placeholder="Enter Total Tax"
                  style={{
                    borderWidth: 1,
                    borderColor: "#aaa",
                    borderRadius: 6,
                    padding: 12,
                    height: 45,
                  }}
                />
              </View>
              <View style={{ flex: 1, marginLeft: 5 }}>
                <Text style={{ fontWeight: "600", marginBottom: 5 }}>
                  Grand Total
                </Text>
                <TextInput
                  placeholder="Enter Grand Total"
                  style={{
                    borderWidth: 1,
                    borderColor: "#aaa",
                    borderRadius: 6,
                    padding: 12,
                    height: 45,
                  }}
                />
              </View>
            </View>
          </View>
        )}
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-around",
            width: "100%",
          }}
        >
          <TouchableOpacity>
            <View
              style={{
                backgroundColor: "#000",
                paddingVertical: 10,
                paddingHorizontal: 25,
                borderRadius: 8,
                alignItems: "center",
              }}
            >
              <Text style={{ color: "#fff", fontWeight: "600" }}>NEXT</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => setModalVisible(true)}>
            <View
              style={{
                backgroundColor: "#000",
                paddingVertical: 10,
                paddingHorizontal: 25,
                borderRadius: 8,
                alignItems: "center",
              }}
            >
              <Text style={{ color: "#fff", fontWeight: "600" }}>PREVIEW</Text>
            </View>
          </TouchableOpacity>
        </View>
        <Modal
          visible={modalVisible}
          animationType="slide"
          transparent={true}
          onRequestClose={() => setModalVisible(false)}
        >
          <View style={{ flex: 1, backgroundColor: "#fff" }}>
            <ScrollView>
              <View style={{ padding: 20 }}>
                {/* HEADER ROW */}
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: 15,
                  }}
                >
                  {/* LEFT - Back & Logo (Column) */}
                  <View
                    style={{
                      flexDirection: "column",
                      alignItems: "center",
                      gap: 10,
                    }}
                  >
                    <TouchableOpacity onPress={() => setModalVisible(false)}>
                      <Ionicons
                        name="arrow-back-sharp"
                        size={28}
                        color="black"
                      />
                    </TouchableOpacity>
                    <Image
                      source={require("../../../assets/images/logo.jpg")}
                      style={{ width: 50, height: 50, borderRadius: 8 }}
                    />
                  </View>

                  {/* CENTER - QUOTATION */}
                  <View style={{ flex: 1, alignItems: "center" }}>
                    <Text
                      style={{
                        fontSize: 26,
                        fontWeight: "700",
                        color: "#2196F3",
                        textAlign: "center",
                      }}
                      numberOfLines={1} // ensures single line
                    >
                      QUOTATION
                    </Text>
                  </View>

                  {/* RIGHT - Invoice & Client Info */}
                  <View style={{ alignItems: "flex-end" }}>
                    <Text style={{ fontSize: 10, fontWeight: "500" }}>
                      Invoice: INV-56478
                    </Text>
                    <Text style={{ fontSize: 10 }}>Date: Nov 01, 2025</Text>
                    <Text style={{ fontSize: 10 }}>Due: Nov 15, 2025</Text>
                    <Text
                      style={{ fontSize: 10, marginTop: 5, fontWeight: "500" }}
                    >
                      Thomas Shelby
                    </Text>
                    <Text style={{ fontSize: 10 }}>thomasshelby@gmail.com</Text>
                    <Text style={{ fontSize: 10 }}>Houston, Texas</Text>
                    <Text style={{ fontSize: 10 }}>77002</Text>
                  </View>
                </View>

                {/* SINGLE LINE SEPARATOR */}
                <View
                  style={{
                    height: 2,
                    backgroundColor: "#2196F3",
                    marginVertical: 10,
                  }}
                />

                {/* PROJECT DESCRIPTION */}
                <View style={{ marginBottom: 12 }}>
                  <Text
                    style={{ fontSize: 11, fontWeight: "600", marginBottom: 5 }}
                  >
                    Project Description:
                  </Text>
                  <Text style={{ fontSize: 10, color: "#666", lineHeight: 16 }}>
                    Add a brief and concise description of the project, item or
                    service here
                  </Text>
                </View>

                {/* TAGS */}
                <View
                  style={{
                    flexDirection: "row",
                    flexWrap: "wrap",
                    gap: 6,
                    marginBottom: 15,
                  }}
                >
                  {[
                    "Customized pricing",
                    "Season",
                    "Just Deal",
                    "Season 5",
                    "Tech",
                  ].map((tag, i) => (
                    <View
                      key={i}
                      style={{
                        backgroundColor: "#fff",
                        paddingHorizontal: 10,
                        paddingVertical: 4,
                        borderRadius: 12,
                        borderWidth: 1,
                        borderColor: "#2196F3",
                      }}
                    >
                      <Text style={{ fontSize: 9, color: "#2196F3" }}>
                        {tag}
                      </Text>
                    </View>
                  ))}
                </View>

                {/* TABLE HEADER */}
                <View
                  style={{
                    flexDirection: "row",
                    paddingVertical: 8,
                    paddingHorizontal: 8,
                    borderBottomWidth: 1,
                    borderBottomColor: "#E0E0E0",
                    marginBottom: 2,
                  }}
                >
                  <Text style={{ flex: 0.4, fontSize: 9, fontWeight: "600" }}>
                    QI
                  </Text>
                  <Text style={{ flex: 1.8, fontSize: 9, fontWeight: "600" }}>
                    Description
                  </Text>
                  <Text
                    style={{
                      flex: 0.8,
                      fontSize: 9,
                      fontWeight: "600",
                      textAlign: "center",
                    }}
                  >
                    Qty
                  </Text>
                  <Text
                    style={{
                      flex: 1,
                      fontSize: 9,
                      fontWeight: "600",
                      textAlign: "right",
                    }}
                  >
                    Unit Price
                  </Text>
                  <Text
                    style={{
                      flex: 0.6,
                      fontSize: 9,
                      fontWeight: "600",
                      textAlign: "center",
                    }}
                  >
                    Disc
                  </Text>
                  <Text
                    style={{
                      flex: 0.6,
                      fontSize: 9,
                      fontWeight: "600",
                      textAlign: "center",
                    }}
                  >
                    Tax
                  </Text>
                </View>

                {/* TABLE ROWS */}
                {[
                  {
                    qi: "01",
                    desc: "Gas torch",
                    qty: "60pcs",
                    price: "40,005",
                    disc: "6%",
                    tax: "2%",
                  },
                  {
                    qi: "02",
                    desc: "Scrapers",
                    qty: "48pcs",
                    price: "36,005",
                    disc: "8%",
                    tax: "3%",
                  },
                  {
                    qi: "03",
                    desc: "Sealant guns",
                    qty: "30pcs",
                    price: "50,005",
                    disc: "6%",
                    tax: "3%",
                  },
                ].map((item, i) => (
                  <View
                    key={i}
                    style={{
                      flexDirection: "row",
                      paddingVertical: 8,
                      paddingHorizontal: 8,
                      borderBottomWidth: 1,
                      borderBottomColor: "#E0E0E0",
                    }}
                  >
                    <Text style={{ flex: 0.4, fontSize: 9 }}>{item.qi}</Text>
                    <Text style={{ flex: 1.8, fontSize: 9 }}>{item.desc}</Text>
                    <Text
                      style={{ flex: 0.8, fontSize: 9, textAlign: "center" }}
                    >
                      {item.qty}
                    </Text>
                    <Text style={{ flex: 1, fontSize: 9, textAlign: "right" }}>
                      {item.price}
                    </Text>
                    <Text
                      style={{ flex: 0.6, fontSize: 9, textAlign: "center" }}
                    >
                      {item.disc}
                    </Text>
                    <Text
                      style={{ flex: 0.6, fontSize: 9, textAlign: "center" }}
                    >
                      {item.tax}
                    </Text>
                  </View>
                ))}

                {/* TOTALS */}
                <View
                  style={{
                    alignItems: "flex-end",
                    marginTop: 15,
                    marginBottom: 15,
                  }}
                >
                  <View style={{ width: "45%" }}>
                    <View
                      style={{
                        flexDirection: "row",
                        justifyContent: "space-between",
                        marginBottom: 6,
                      }}
                    >
                      <Text style={{ fontSize: 10 }}>Subtotal:</Text>
                      <Text style={{ fontSize: 10, fontWeight: "600" }}>
                        180,005
                      </Text>
                    </View>
                    <View
                      style={{
                        flexDirection: "row",
                        justifyContent: "space-between",
                        marginBottom: 6,
                      }}
                    >
                      <Text style={{ fontSize: 10 }}>Discount Applied:</Text>
                      <Text style={{ fontSize: 10, fontWeight: "600" }}>
                        -35%
                      </Text>
                    </View>
                    <View
                      style={{
                        flexDirection: "row",
                        justifyContent: "space-between",
                        marginBottom: 6,
                      }}
                    >
                      <Text style={{ fontSize: 10 }}>Tax Applied:</Text>
                      <Text style={{ fontSize: 10, fontWeight: "600" }}>
                        13%
                      </Text>
                    </View>
                    <View
                      style={{
                        flexDirection: "row",
                        justifyContent: "space-between",
                        paddingTop: 6,
                        borderTopWidth: 1.5,
                        borderTopColor: "#000",
                      }}
                    >
                      <Text style={{ fontSize: 11, fontWeight: "700" }}>
                        Grand Total:
                      </Text>
                      <Text style={{ fontSize: 11, fontWeight: "700" }}>
                        137,4085
                      </Text>
                    </View>
                  </View>
                </View>

                {/* BLUE SEPARATOR ABOVE TERMS */}
                <View
                  style={{
                    height: 2,
                    backgroundColor: "#2196F3",
                    marginVertical: 10,
                  }}
                />

                {/* TERMS & CONDITIONS */}
                <View style={{ marginBottom: 20 }}>
                  <Text
                    style={{ fontSize: 10, fontWeight: "600", marginBottom: 5 }}
                  >
                    Terms & Conditions :
                  </Text>
                  <Text style={{ fontSize: 9, color: "#666", lineHeight: 14 }}>
                    Above information is not an invoice and only an estimate of
                    goods / services. This will not be valid proof for the
                    delivery of goods / services
                  </Text>
                </View>

                {/* SIGNATURE LEFT */}
                <View style={{ alignItems: "flex-start", marginBottom: 30 }}>
                  <Text style={{ fontSize: 10, marginBottom: 8 }}>
                    We Are Awaiting Your Acceptance Of This Quote
                  </Text>
                  <Text
                    style={{
                      fontSize: 10,
                      fontWeight: "600",
                      marginBottom: 12,
                    }}
                  >
                    Authorized Signature
                  </Text>
                  <View
                    style={{ width: 140, height: 1.5, backgroundColor: "#000" }}
                  />
                </View>
              </View>
            </ScrollView>
          </View>
        </Modal>
      </View>
    </View>
  );
}
