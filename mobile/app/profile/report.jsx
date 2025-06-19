import { View, Text, StyleSheet } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

export default function ReportScreen() {
  return (
    <View style={styles.container}>
      <MaterialIcons name="report-problem" size={40} color="#555" />
      <Text style={styles.title}>Report a Problem</Text>
      <Text style={styles.text}>Spotted something wrong? Let us know so we can fix it.</Text>
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
