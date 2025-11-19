import {
  Text,
  TouchableOpacity,
  View,
  TextInput,
} from "react-native";
import Header from "../../components/Header";
import AntDesign from "@expo/vector-icons/AntDesign";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import Feather from "@expo/vector-icons/Feather";
import React, { useState } from "react";
import QuotationModal from "../../components/Quatation";


export default function Homescreen() {
  const [clientInfo, setClientInfo] = useState({
    clientName: "",
    companyName: "",
    address: "",
    city: "",
    state: "",
    postalCode: "",
    email: "",
    phone: "",
    specialNote: "",
  });

  const [orderInfo, setOrderInfo] = useState({
    orderSource: "",
    orderDate: "",
    issueDate: "",
    dueDate: "",
    paymentMethod: "",
    advancePayment: "",
    terms: "",
  });
  
  const [priceSummary, setPriceSummary] = useState({
    subtotal: "",
    discount: "",
    totalTax: "",
    grandTotal: "",
  });

  const [productInfo, setProductInfo] = useState({
    productName: "",
    category: "",
    unitMeasure: "",
    quantity: "",
    unitPrice: "",
    discount: "",
    tax: "",
  });

  const [products, setProducts] = useState([]);



  const addProduct = () => {
    if (productInfo.productName.trim() === "") return;
    setProducts([...products, productInfo]); // Add product to list
    setProductInfo({
      productName: "",
      category: "",
      unitMeasure: "",
      quantity: "",
      unitPrice: "",
      discount: "",
      tax: "",
    }); // Clear form for next product
  };

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
              backgroundColor: activeForm === 1 ? "#DCEEFF" : "#ffffffff",
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
              backgroundColor: activeForm === 2 ? "#DCEEFF" : "#ffffffff",
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
              backgroundColor: activeForm === 3 ? "#DCEEFF" : "#ffffffff",
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
              backgroundColor: activeForm === 4 ? "#cbe4fcff" : "#ffffffff",
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
            {/* Client + Company */}
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
                  value={clientInfo.clientName}
                  onChangeText={(text) =>
                    setClientInfo({ ...clientInfo, clientName: text })
                  }
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
                  value={clientInfo.companyName}
                  onChangeText={(text) =>
                    setClientInfo({ ...clientInfo, companyName: text })
                  }
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

            {/* Address */}
            <View style={{ marginBottom: 15 }}>
              <Text style={{ fontWeight: "600", marginBottom: 5 }}>
                Delivery Address
              </Text>
              <TextInput
                placeholder="Enter Delivery Address"
                value={clientInfo.address}
                onChangeText={(text) =>
                  setClientInfo({ ...clientInfo, address: text })
                }
                style={{
                  borderWidth: 1,
                  borderColor: "#aaa",
                  borderRadius: 6,
                  padding: 12,
                  height: 45,
                }}
              />
            </View>

            {/* City, State, Postal */}
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
                  value={clientInfo.city}
                  onChangeText={(text) =>
                    setClientInfo({ ...clientInfo, city: text })
                  }
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
                  value={clientInfo.state}
                  onChangeText={(text) =>
                    setClientInfo({ ...clientInfo, state: text })
                  }
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
                  value={clientInfo.postalCode}
                  onChangeText={(text) =>
                    setClientInfo({ ...clientInfo, postalCode: text })
                  }
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

            {/* Email + Phone */}
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
                  value={clientInfo.email}
                  onChangeText={(text) =>
                    setClientInfo({ ...clientInfo, email: text })
                  }
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
                  value={clientInfo.phone}
                  onChangeText={(text) =>
                    setClientInfo({ ...clientInfo, phone: text })
                  }
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

            {/* Special Note */}
            <View>
              <Text style={{ fontWeight: "600", marginBottom: 5 }}>
                Special Note
              </Text>
              <TextInput
                placeholder="Enter Special Note"
                value={clientInfo.specialNote}
                onChangeText={(text) =>
                  setClientInfo({ ...clientInfo, specialNote: text })
                }
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
          <View style={{ marginTop: 10, padding: 15, borderRadius: 8 }}>
            {/* Order Source + Order Date */}
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
                  value={orderInfo.orderSource}
                  onChangeText={(text) =>
                    setOrderInfo({ ...orderInfo, orderSource: text })
                  }
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
                  value={orderInfo.orderDate}
                  onChangeText={(text) =>
                    setOrderInfo({ ...orderInfo, orderDate: text })
                  }
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

            {/* Issue Date + Due Date */}
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
                  value={orderInfo.issueDate}
                  onChangeText={(text) =>
                    setOrderInfo({ ...orderInfo, issueDate: text })
                  }
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
                  value={orderInfo.dueDate}
                  onChangeText={(text) =>
                    setOrderInfo({ ...orderInfo, dueDate: text })
                  }
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

            {/* Payment Method + Advance Payment */}
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
                  value={orderInfo.paymentMethod}
                  onChangeText={(text) =>
                    setOrderInfo({ ...orderInfo, paymentMethod: text })
                  }
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
                  value={orderInfo.advancePayment}
                  onChangeText={(text) =>
                    setOrderInfo({ ...orderInfo, advancePayment: text })
                  }
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

            {/* Terms & Conditions */}
            <View>
              <Text style={{ fontWeight: "600", marginBottom: 5 }}>
                Terms & Conditions
              </Text>
              <TextInput
                placeholder="Enter Terms & Conditions"
                value={orderInfo.terms}
                onChangeText={(text) =>
                  setOrderInfo({ ...orderInfo, terms: text })
                }
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
          <View style={{ marginTop: 10, padding: 15, borderRadius: 8 }}>
            <Text style={{ fontWeight: "600", marginBottom: 15, fontSize: 16 }}>
              Add Product
            </Text>

            {/* Product Name + Category */}
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
                  value={productInfo.productName}
                  onChangeText={(text) =>
                    setProductInfo({ ...productInfo, productName: text })
                  }
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
                  value={productInfo.category}
                  onChangeText={(text) =>
                    setProductInfo({ ...productInfo, category: text })
                  }
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

            {/* Unit Measure + Quantity */}
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
                  value={productInfo.unitMeasure}
                  onChangeText={(text) =>
                    setProductInfo({ ...productInfo, unitMeasure: text })
                  }
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
                  value={productInfo.quantity}
                  onChangeText={(text) =>
                    setProductInfo({ ...productInfo, quantity: text })
                  }
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

            {/* Unit Price + Discount Applied */}
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
                  value={productInfo.unitPrice}
                  onChangeText={(text) =>
                    setProductInfo({ ...productInfo, unitPrice: text })
                  }
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
                  value={productInfo.discount}
                  onChangeText={(text) =>
                    setProductInfo({ ...productInfo, discount: text })
                  }
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

            {/* Tax Applied */}
            <View>
              <Text style={{ fontWeight: "600", marginBottom: 5 }}>
                Tax Applied
              </Text>
              <TextInput
                placeholder="Enter Tax"
                value={productInfo.tax}
                onChangeText={(text) =>
                  setProductInfo({ ...productInfo, tax: text })
                }
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
          <View style={{ marginTop: 10, padding: 15, borderRadius: 8 }}>
            <Text style={{ fontWeight: "600", marginBottom: 15, fontSize: 16 }}>
              Price Summary
            </Text>

            {/* Subtotal + Discount */}
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
                  value={priceSummary.subtotal}
                  onChangeText={(text) =>
                    setPriceSummary({ ...priceSummary, subtotal: text })
                  }
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
                  value={priceSummary.discount}
                  onChangeText={(text) =>
                    setPriceSummary({ ...priceSummary, discount: text })
                  }
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

            {/* Total Tax + Grand Total */}
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <View style={{ flex: 1, marginRight: 5 }}>
                <Text style={{ fontWeight: "600", marginBottom: 5 }}>
                  Total Tax Applied
                </Text>
                <TextInput
                  placeholder="Enter Total Tax"
                  value={priceSummary.totalTax}
                  onChangeText={(text) =>
                    setPriceSummary({ ...priceSummary, totalTax: text })
                  }
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
                  value={priceSummary.grandTotal}
                  onChangeText={(text) =>
                    setPriceSummary({ ...priceSummary, grandTotal: text })
                  }
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

          <TouchableOpacity onPress={addProduct}>
            <View
              style={{
                backgroundColor: "#000",
                paddingVertical: 10,
                paddingHorizontal: 25,
                borderRadius: 8,
                alignItems: "center",
              }}
            >
              <Text style={{ color: "#fff", fontWeight: "600" }}>ADD</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>

      <QuotationModal
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
        clientInfo={clientInfo}
        orderInfo={orderInfo}
        products={products}
        priceSummary={priceSummary}
      />
    </View>
  );
}
