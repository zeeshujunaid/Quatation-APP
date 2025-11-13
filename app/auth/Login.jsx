import {
  View,
  Text,
  StatusBar,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from "react-native";

export default function Login(){
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
          }}
          keyboardShouldPersistTaps="handled"
        >
          <View
            style={{ height: "45%", backgroundColor: "#008cff", width: "100%",borderBottomLeftRadius:"18%",borderBottomRightRadius:"18%", }}
          >
            <Text>helo</Text>
          </View>
          <View
            style={{ height: "20%", width: "100%" }}
          >
            <Text>helo</Text>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    );
}