import { View, Text, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";

export default function FeedbackScreen() {
  return (
    <View style={styles.container}>
      <Feather name="message-square" size={40} color="#555" />
      <Text style={styles.title}>User Feedback</Text>
      <Text style={styles.text}>Let us know what you think. Feature request? Bug report?</Text>
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
