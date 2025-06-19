import { View, Text, StyleSheet } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

export default function PrivacyScreen() {
  return (
    <View style={styles.container}>
      <MaterialIcons name="privacy-tip" size={40} color="#555" />
      <Text style={styles.title}>Privacy Policy</Text>
      <Text style={styles.text}>Understand how we handle your data and protect your privacy.</Text>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 22,
    fontWeight: "700",
    marginTop: 16,
    marginBottom: 8,
    color: "#333",
  },
  text: {
    fontSize: 16,
    textAlign: "center",
    color: "#666",
    paddingHorizontal: 10,
  },
});
