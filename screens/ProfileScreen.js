import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

export default function ProfileScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>User Profile</Text>

      {/* Static Details */}
      <Text style={styles.info}>Name: Haris Khan</Text>
      <Text style={styles.info}>Email: haris@example.com</Text>
      <Text style={styles.info}>Member Since: 2025</Text>

      {/* Go back to home */}
      <TouchableOpacity 
        style={styles.button}
        onPress={() => navigation.navigate("Home")}
      >
        <Text style={styles.buttonText}>Back to Home</Text>
      </TouchableOpacity>

      {/* Logout */}
      <TouchableOpacity 
        style={[styles.button, { backgroundColor: "red", marginTop: 10 }]}
        onPress={() => navigation.navigate("Login")}
      >
        <Text style={styles.buttonText}>Logout</Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: "#f8f9fa" },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#2f5d62",
  },
  info: { 
    fontSize: 16, 
    marginBottom: 10, 
    color: "#333",
  },
  button: {
    backgroundColor: "#2f5d62",
    padding: 12,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 20,
  },
  buttonText: { color: "#fff", fontWeight: "bold", fontSize: 16 },
});
