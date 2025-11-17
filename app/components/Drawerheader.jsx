import { View, Image, StyleSheet } from "react-native";

export default function DrawerHeader() {
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: "https://your-logo-url.com/logo.png" }}
        style={styles.logo}
      />
      <View style={styles.separator} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
    alignItems: "center",
    backgroundColor: "#fff",
  },
  logo: {
    width: 120,
    height: 40,
    resizeMode: "contain",
  },
  separator: {
    height: 1,
    backgroundColor: "#ccc",
    width: "90%",
    marginTop: 10,
  },
});
