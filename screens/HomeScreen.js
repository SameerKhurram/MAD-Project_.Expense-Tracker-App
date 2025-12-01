import React, { useState } from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

export default function HomeScreen({ navigation }) {
  const [expenses, setExpenses] = useState([
    { id: "1", title: "Groceries", amount: 1200 },
    { id: "2", title: "Transport", amount: 350 },
    { id: "3", title: "Snacks", amount: 200 },
  ]);

  const total = expenses.reduce((sum, item) => sum + item.amount, 0);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>SaveIt</Text>

      <Text style={styles.description}>
        SaveIt is a simple expense tracker app that helps users by recording
        their daily spending, managing their budget, and viewing total expenses
        — all in one place.
      </Text>

      {/* Total Expense Card */}
      <View style={styles.totalContainer}>
        <Text style={styles.totalText}>Total Spent</Text>
        <Text style={styles.totalAmount}>Rs. {total}</Text>
      </View>

      <Text style={styles.sectionTitle}>Recent Expenses</Text>

      {/* List of Expenses */}
      <FlatList
        data={expenses}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.expenseItem}>
            <Text style={styles.expenseTitle}>{item.title}</Text>
            <Text style={styles.expenseAmount}>Rs. {item.amount}</Text>
          </View>
        )}
        ListEmptyComponent={
          <Text style={styles.emptyText}>No expenses added yet.</Text>
        }
        style={{ marginBottom: 10 }}
      />

      {/* Add Expense Button */}
      <TouchableOpacity
        style={styles.addButton}
        onPress={() => navigation.navigate("AddExpense")}
      >
        <Text style={styles.addButtonText}>+ Add Expense</Text>
      </TouchableOpacity>

      {/* Expense History Button */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("ExpenseHistory")}
      >
        <Text style={styles.buttonText}>View Expense History</Text>
      </TouchableOpacity>

      {/* View Profile Button */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Profile")}
      >
        <Text style={styles.buttonText}>View Profile</Text>
      </TouchableOpacity>

      {/* Footer */}
      <Text style={styles.footerText}>
        Designed & Developed by Sameer (SP23-BSE-003) | Haris (SP23-BSE-006) |
        Talha (SP23-BSE-028)
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f9fa",
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 20,
    color: "#2f5d62",
  },
  description: {
    fontSize: 15,
    textAlign: "center",
    marginTop: 10,
    color: "#555",
    lineHeight: 22,
  },
  totalContainer: {
    backgroundColor: "#a7c957",
    borderRadius: 12,
    padding: 15,
    marginVertical: 20,
    alignItems: "center",
  },
  totalText: {
    fontSize: 18,
    color: "#fff",
  },
  totalAmount: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#fff",
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#2f5d62",
    marginBottom: 10,
  },
  expenseItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    elevation: 2,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 3,
    shadowOffset: { width: 0, height: 2 },
  },
  expenseTitle: {
    fontSize: 16,
    color: "#333",
  },
  expenseAmount: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#2f5d62",
  },
  emptyText: {
    textAlign: "center",
    color: "#999",
    marginTop: 20,
  },
  addButton: {
    backgroundColor: "#2f5d62",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 15,
  },
  addButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },

  button: {
    backgroundColor: "#2f5d62",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 10,
  },

  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },

  footerText: {
    fontSize: 12,
    textAlign: "center",
    marginTop: 25,
    color: "#777",
  },
});
