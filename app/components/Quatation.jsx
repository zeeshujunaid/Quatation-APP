import React from "react";
import {
  View,
  Text,
  Modal,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function QuotationModal({
  visible,
  onClose,
  clientInfo,
  orderInfo,
  products,
  priceSummary,
}) {
  return (
    <Modal
      visible={visible} // ✅ use the prop passed from parent
      animationType="slide"
      transparent={true}
      onRequestClose={onClose} // ✅ use the callback from parent
    >
      <View style={{ flex: 1, backgroundColor: "#fff" }}>
        <ScrollView>
          <View style={{ padding: 20 }}>
            {/* Header */}
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: 15,
              }}
            >
              <View
                style={{
                  flexDirection: "column",
                  alignItems: "center",
                  gap: 10,
                }}
              >
                <TouchableOpacity onPress={onClose}>
                  <Ionicons name="arrow-back-sharp" size={28} color="black" />
                </TouchableOpacity>
                <Image
                  source={require("../../assets/images/logo.jpg")}
                  style={{ width: 50, height: 50, borderRadius: 8 }}
                />
              </View>

              <View style={{ flex: 1, alignItems: "center" }}>
                <Text
                  style={{
                    fontSize: 26,
                    fontWeight: "700",
                    color: "#2196F3",
                    textAlign: "center",
                  }}
                  numberOfLines={1}
                >
                  QUOTATION
                </Text>
              </View>

              <View style={{ alignItems: "flex-end" }}>
                <Text style={{ fontSize: 10, fontWeight: "500" }}>
                  Invoice:{" "}
                  {orderInfo.invoiceNumber || (
                    <Text style={{ color: "red" }}>Not Set</Text>
                  )}
                </Text>
                <Text style={{ fontSize: 10 }}>
                  Date:{" "}
                  {orderInfo.orderDate || (
                    <Text style={{ color: "red" }}>Not Set</Text>
                  )}
                </Text>
                <Text style={{ fontSize: 10 }}>
                  Due:{" "}
                  {orderInfo.dueDate || (
                    <Text style={{ color: "red" }}>Not Set</Text>
                  )}
                </Text>
                <Text style={{ fontSize: 10, marginTop: 5, fontWeight: "500" }}>
                  {clientInfo.clientName || (
                    <Text style={{ color: "red" }}>Not Set</Text>
                  )}
                </Text>
                <Text style={{ fontSize: 10 }}>
                  {clientInfo.email || (
                    <Text style={{ color: "red" }}>Not Set</Text>
                  )}
                </Text>
                <Text style={{ fontSize: 10 }}>
                  {clientInfo.city && clientInfo.state ? (
                    `${clientInfo.city}, ${clientInfo.state}`
                  ) : (
                    <Text style={{ color: "red" }}>Not Set</Text>
                  )}
                </Text>
                <Text style={{ fontSize: 10 }}>
                  {clientInfo.postalCode || (
                    <Text style={{ color: "red" }}>Not Set</Text>
                  )}
                </Text>
              </View>
            </View>

            <View
              style={{
                height: 2,
                backgroundColor: "#2196F3",
                marginVertical: 10,
              }}
            />

            {/* Project Description */}
            <View style={{ marginBottom: 12 }}>
              <Text
                style={{ fontSize: 11, fontWeight: "600", marginBottom: 5 }}
              >
                Project Description:
              </Text>
              <Text style={{ fontSize: 10, color: "#666", lineHeight: 16 }}>
                {orderInfo.projectDescription || (
                  <Text style={{ color: "red" }}>Not Set</Text>
                )}
              </Text>
            </View>

            {/* Tags */}
            <View
              style={{
                flexDirection: "row",
                flexWrap: "wrap",
                gap: 6,
                marginBottom: 15,
              }}
            >
              {(orderInfo.tags && orderInfo.tags.length > 0
                ? orderInfo.tags
                : ["Not Set"]
              ).map((tag, i) => (
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
                  <Text
                    style={{
                      fontSize: 9,
                      color: tag === "Not Set" ? "red" : "#2196F3",
                    }}
                  >
                    {tag}
                  </Text>
                </View>
              ))}
            </View>

            {/* Table Header */}
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

            {/* Products Table */}
            {products.length > 0 ? (
              products.map((item, i) => (
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
                  <Text style={{ flex: 0.4, fontSize: 9 }}>
                    {item.qi || <Text style={{ color: "red" }}>Not Set</Text>}
                  </Text>
                  <Text style={{ flex: 1.8, fontSize: 9 }}>
                    {item.productName || (
                      <Text style={{ color: "red" }}>Not Set</Text>
                    )}
                  </Text>
                  <Text style={{ flex: 0.8, fontSize: 9, textAlign: "center" }}>
                    {item.quantity || (
                      <Text style={{ color: "red" }}>Not Set</Text>
                    )}
                  </Text>
                  <Text style={{ flex: 1, fontSize: 9, textAlign: "right" }}>
                    {item.unitPrice || (
                      <Text style={{ color: "red" }}>Not Set</Text>
                    )}
                  </Text>
                  <Text style={{ flex: 0.6, fontSize: 9, textAlign: "center" }}>
                    {item.discount || (
                      <Text style={{ color: "red" }}>Not Set</Text>
                    )}
                  </Text>
                  <Text style={{ flex: 0.6, fontSize: 9, textAlign: "center" }}>
                    {item.tax || <Text style={{ color: "red" }}>Not Set</Text>}
                  </Text>
                </View>
              ))
            ) : (
              <Text
                style={{
                  color: "red",
                  fontSize: 10,
                  textAlign: "center",
                  marginVertical: 10,
                }}
              >
                No products added
              </Text>
            )}

            {/* Price Summary */}
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
                    {priceSummary.subtotal || (
                      <Text style={{ color: "red" }}>Not Set</Text>
                    )}
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
                    {priceSummary.discount || (
                      <Text style={{ color: "red" }}>Not Set</Text>
                    )}
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
                    {priceSummary.totalTax || (
                      <Text style={{ color: "red" }}>Not Set</Text>
                    )}
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
                    {priceSummary.grandTotal || (
                      <Text style={{ color: "red" }}>Not Set</Text>
                    )}
                  </Text>
                </View>
              </View>
            </View>

            <View
              style={{
                height: 2,
                backgroundColor: "#2196F3",
                marginVertical: 10,
              }}
            />

            {/* Terms & Conditions */}
            <View style={{ marginBottom: 20 }}>
              <Text
                style={{ fontSize: 10, fontWeight: "600", marginBottom: 5 }}
              >
                Terms & Conditions :
              </Text>
              <Text style={{ fontSize: 9, color: "#666", lineHeight: 14 }}>
                {orderInfo.terms || (
                  <Text style={{ color: "red" }}>Not Set</Text>
                )}
              </Text>
            </View>

            {/* Signature */}
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
  );
}
