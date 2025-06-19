import { View, Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function HelpScreen() {
  return (
    <View style={styles.container}>
      <Ionicons name="help-circle" size={40} color="#555" />
      <Text style={styles.title}>Help & FAQ</Text>
      <Text style={styles.text}>Find answers to common questions and get support.</Text>
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
