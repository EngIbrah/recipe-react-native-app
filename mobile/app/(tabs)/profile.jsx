import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Image } from "react-native";
import { useUser } from "@clerk/clerk-expo";
import { useRouter } from "expo-router";
import { Ionicons, MaterialIcons, Feather } from "@expo/vector-icons";
import { COLORS } from "../../constants/colors"; // Make sure this exists or replace with your own colors
import { useAuth, useClerk } from "@clerk/clerk-expo";

export default function ProfileScreen() {

  const { user } = useUser();
  const router = useRouter();

  const { signOut } = useClerk(); // <-- GET signOut method


  const options = [
    { title: "User Feedback", icon: <Feather name="message-circle" size={20} color="#555" />, route: "/profile/feedback" },
    { title: "Settings", icon: <Ionicons name="settings-outline" size={20} color="#555" />, route: "/profile/settings" },
    { title: "Privacy Policy", icon: <MaterialIcons name="privacy-tip" size={20} color="#555" />, route: "/profile/privacy" },
    { title: "Contact Us", icon: <Ionicons name="call-outline" size={20} color="#555" />, route: "/profile/contact" },
    { title: "Report a Problem", icon: <MaterialIcons name="report-problem" size={20} color="#555" />, route: "/profile/report" },
    { title: "Help & FAQ", icon: <Ionicons name="help-circle-outline" size={20} color="#555" />, route: "/profile/help" },
  ];

  return (
    <ScrollView style={styles.container}>
      <View style={styles.profileBox}>
        <Image
          source={{ uri: user?.imageUrl }}
          style={styles.avatar}
        />
        <Text style={styles.name}>{user?.fullName || "User"}</Text>
        <Text style={styles.email}>{user?.primaryEmailAddress?.emailAddress}</Text>
      </View>

      <View style={styles.section}>
        {options.map((item, i) => (
          <TouchableOpacity
            key={i}
            style={styles.optionItem}
            onPress={() => router.push(item.route)}
          >
            <View style={styles.optionLeft}>
              {item.icon}
              <Text style={styles.optionText}>{item.title}</Text>
            </View>
            <Ionicons name="chevron-forward" size={20} color="#ccc" />
          </TouchableOpacity>
        ))}
      </View>
      <View style={styles.logoutContainer}>
  <TouchableOpacity onPress={() => signOut()} style={styles.logoutButton}>
    <Ionicons name="log-out-outline" size={20} color="#fff" />
    <Text style={styles.logoutText}>Log Out</Text>
  </TouchableOpacity>
</View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background || "#fff",
  },
  profileBox: {
    alignItems: "center",
    paddingVertical: 30,
    backgroundColor: COLORS.white || "#fff",
    borderBottomWidth: 1,
    borderColor: "#eee",
  },
  avatar: {
    width: 90,
    height: 90,
    borderRadius: 50,
    marginBottom: 12,
  },
  name: {
    fontSize: 20,
    fontWeight: "600",
    color: COLORS.textDark || "#333",
  },
  email: {
    fontSize: 14,
    color: COLORS.textLight || "#666",
    marginTop: 4,
  },
  section: {
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  optionItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderColor: "#f0f0f0",
  },
  optionLeft: {
    flexDirection: "row",
    alignItems: "center",
  },
  optionText: {
    marginLeft: 15,
    fontSize: 16,
    color: "#333",
  },

  logoutContainer: {
  marginTop: 30,
  alignItems: "center",
},
logoutButton: {
  flexDirection: "row",
  alignItems: "center",
  backgroundColor: "#e63935",
  paddingVertical: 12,
  paddingHorizontal: 24,
  borderRadius: 8,
},
logoutText: {
  color: "#fff",
  fontSize: 16,
  marginLeft: 10,
  fontWeight: "600",
},

});
