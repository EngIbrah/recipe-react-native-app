import { View, Text, StyleSheet, TextInput, TouchableOpacity, Alert } from "react-native";
import { useUser } from "@clerk/clerk-expo";
import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";

export default function SettingsScreen() {
  const { user } = useUser();

  const [name, setName] = useState(user?.fullName || "");
  const [email, setEmail] = useState(user?.primaryEmailAddress?.emailAddress || "");
  const [loading, setLoading] = useState(false);

  const handleUpdate = async () => {
    try {
      setLoading(true);
      if (name !== user?.fullName) {
        await user.update({ firstName: name.split(" ")[0], lastName: name.split(" ").slice(1).join(" ") });
      }
      if (email !== user?.primaryEmailAddress?.emailAddress) {
        await user.primaryEmailAddress.update({ emailAddress: email });
      }
      Alert.alert("Success", "Account updated successfully.");
    } catch (err) {
      Alert.alert("Error", err.message || "Update failed.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <Ionicons name="settings-outline" size={40} color="#555" />
      <Text style={styles.title}>Edit Account</Text>

      <Text style={styles.label}>Full Name</Text>
      <TextInput style={styles.input} value={name} onChangeText={setName} />

      <Text style={styles.label}>Email</Text>
      <TextInput style={styles.input} value={email} onChangeText={setEmail} keyboardType="email-address" />

      <TouchableOpacity onPress={handleUpdate} style={styles.button} disabled={loading}>
        <Text style={styles.buttonText}>{loading ? "Updating..." : "Save Changes"}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 22,
    fontWeight: "700",
    marginVertical: 20,
    color: "#333",
    textAlign: "center",
  },
  label: {
    fontSize: 16,
    fontWeight: "500",
    marginTop: 20,
    color: "#444",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 12,
    marginTop: 8,
  },
  button: {
    backgroundColor: "#007bff",
    marginTop: 30,
    padding: 14,
    borderRadius: 8,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
});
