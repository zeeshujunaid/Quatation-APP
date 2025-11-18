import { Text, TouchableOpacity, View, TextInput } from "react-native";
import Header from "../../components/Header";
import AntDesign from "@expo/vector-icons/AntDesign";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import Feather from "@expo/vector-icons/Feather";
import React, { useState } from "react";

export default function Homescreen() {
  const [activeForm, setActiveForm] = useState(1);
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
              height: 40,
            }}
          >
            <MaterialCommunityIcons name="eye-closed" size={18} color="black" />
            <Text>See Preview</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity>
          <View
            style={{
              alignItems: "center",
              flexDirection: "row",
              backgroundColor: "#00000007",
              justifyContent: "space-around",
              borderRadius: 5,
              height: 40,
            }}
          >
            <Feather name="save" size={18} color="black" />
            <Text>Save As Draft</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity>
          <View
            style={{
              alignItems: "center",
              flexDirection: "row",
              backgroundColor: "#00000007",
              justifyContent: "space-around",
              borderRadius: 5,
              height: 40,
            }}
          >
            <Feather name="send" size={18} color="black" />
            <Text>Send Invoices</Text>
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
              <Text style={{ color: "#fff", fontWeight: "600" }}>PREVIEW</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
