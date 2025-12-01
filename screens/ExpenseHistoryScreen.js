import React from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

export default function ExpenseHistoryScreen({ navigation }) {
  const expenses = [
    { id: "1", title: "Groceries", amount: 1200 },
    { id: "2", title: "Transport", amount: 350 },
    { id: "3", title: "Snacks", amount: 200 },
    { id: "4", title: "Medicine", amount: 900 },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Expense History</Text>

      <FlatList
        data={expenses}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={styles.itemTitle}>{item.title}</Text>
            <Text style={styles.itemAmount}>Rs. {item.amount}</Text>
          </View>
        )}
      />

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Home")}
      >
        <Text style={styles.buttonText}>Back to Home</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: "#f8f9fa" },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 15,
    color: "#2f5d62",
  },
  item: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 12,
    backgroundColor: "#fff",
    borderRadius: 10,
    marginBottom: 10,
    elevation: 2,
  },
  itemTitle: { fontSize: 16, color: "#333" },
  itemAmount: { fontSize: 16, fontWeight: "bold", color: "#2f5d62" },
  button: {
    marginTop: 20,
    backgroundColor: "#2f5d62",
    padding: 12,
    borderRadius: 10,
    alignItems: "center",
  },
  buttonText: { color: "#fff", fontWeight: "bold", fontSize: 16 },
});
