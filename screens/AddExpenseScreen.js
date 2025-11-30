import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function AddExpenseScreen({ navigation }) {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");

  const saveExpense = async () => {
    if (!title || !amount || !category) {
      Alert.alert("Error", "Please fill all fields");
      return;
    }

    const newExpense = {
      id: Date.now(),
      title,
      amount: parseFloat(amount),
      category,
      date: new Date().toISOString(),
    };

    try {
      const existing = await AsyncStorage.getItem("expenses");
      const expenses = existing ? JSON.parse(existing) : [];

      expenses.push(newExpense);
      await AsyncStorage.setItem("expenses", JSON.stringify(expenses));

      Alert.alert("Success", "Expense added!");
      navigation.goBack(); 
    } catch (error) {
      Alert.alert("Error", "Could not save expense");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Add New Expense</Text>

      <TextInput
        style={styles.input}
        placeholder="Expense Title"
        value={title}
        onChangeText={setTitle}
      />

      <TextInput
        style={styles.input}
        placeholder="Amount"
        keyboardType="numeric"
        value={amount}
        onChangeText={setAmount}
      />

      <TextInput
        style={styles.input}
        placeholder="Category (Food, Travel, Shopping...)"
        value={category}
        onChangeText={setCategory}
      />

      <TouchableOpacity style={styles.saveBtn} onPress={saveExpense}>
        <Text style={styles.saveText}>Save Expense</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.backBtn}
        onPress={() => navigation.goBack()}
      >
        <Text style={styles.backText}>Back to Home</Text>
      </TouchableOpacity>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },

  header: {
    fontSize: 26,
    fontWeight: "700",
    marginBottom: 20,
    textAlign: "center",
  },

  input: {
    borderWidth: 1,
    borderColor: "#888",
    padding: 12,
    borderRadius: 8,
    marginBottom: 15,
    fontSize: 16,
  },

  saveBtn: {
    backgroundColor: "#4CAF50",
    padding: 15,
    borderRadius: 8,
    marginTop: 10,
  },

  saveText: {
    color: "#fff",
    textAlign: "center",
    fontSize: 18,
    fontWeight: "bold",
  },

  backBtn: {
    padding: 12,
    marginTop: 15,
  },

  backText: {
    fontSize: 16,
    color: "#007BFF",
    textAlign: "center",
  },
});
