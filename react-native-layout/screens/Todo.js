import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  Modal,
  SafeAreaView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function Todo() {
  const [todoText, setTodoText] = useState("");
  const [searchText, setSearchText] = useState("");
  const [todos, setTodos] = useState([]);

  const [modalVisible, setModalVisible] = useState(false);
  const [selectedTodo, setSelectedTodo] = useState(null);

  const addTodo = () => {
    if (todoText.trim() === "") return;

    const newTodo = {
      id: Date.now().toString(),
      text: todoText,
      completed: false,
    };

    setTodos([newTodo, ...todos]);
    setTodoText("");
  };

  const toggleTodo = (id) => {
    const updated = todos.map((todo) =>
      todo.id === id
        ? { ...todo, completed: !todo.completed }
        : todo
    );

    setTodos(updated);
  };

  const confirmDelete = (todo) => {
    setSelectedTodo(todo);
    setModalVisible(true);
  };

  const deleteTodo = () => {
    const filtered = todos.filter(
      (todo) => todo.id !== selectedTodo.id
    );

    setTodos(filtered);
    setModalVisible(false);
  };

  const filteredTodos = todos.filter((todo) =>
    todo.text.toLowerCase().includes(searchText.toLowerCase())
  );

  const renderItem = ({ item }) => (
    <View style={styles.todoCard}>
      <TouchableOpacity
        style={styles.todoLeft}
        onPress={() => toggleTodo(item.id)}
      >
        <Ionicons
          name={item.completed ? "checkbox" : "square-outline"}
          size={22}
          color={item.completed ? "#16a34a" : "#6b7280"}
        />

        <Text
          style={[
            styles.todoText,
            item.completed && styles.completedText,
          ]}
        >
          {item.text}
        </Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => confirmDelete(item)}>
        <Ionicons name="trash-outline" size={20} color="#ef4444" />
      </TouchableOpacity>
    </View>
  );

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>

        <Text style={styles.title}>Todo List</Text>

        {/* Search */}
        <View style={styles.searchBox}>
          <Ionicons name="search-outline" size={20} color="#9ca3af" />
          <TextInput
            placeholder="Search tasks..."
            placeholderTextColor="#9ca3af"
            value={searchText}
            onChangeText={setSearchText}
            style={styles.searchInput}
          />
        </View>

        {/* Add Todo */}
        <View style={styles.addSection}>
          <TextInput
            placeholder="Add a new task..."
            placeholderTextColor="#9ca3af"
            value={todoText}
            onChangeText={setTodoText}
            style={styles.addInput}
          />

          <TouchableOpacity
            style={styles.addButton}
            onPress={addTodo}
          >
            <Ionicons name="add" size={22} color="white" />
          </TouchableOpacity>
        </View>

        {/* Todo List */}
        <FlatList
          data={filteredTodos}
          keyExtractor={(item) => item.id}
          renderItem={renderItem}
          showsVerticalScrollIndicator={false}
        />

      </View>

      {/* DELETE CONFIRMATION MODAL */}
      <Modal
        visible={modalVisible}
        transparent
        animationType="fade"
      >
        <View style={styles.modalOverlay}>

          <View style={styles.modalCard}>

            <Ionicons
              name="warning-outline"
              size={36}
              color="#ef4444"
            />

            <Text style={styles.modalTitle}>
              Delete Task?
            </Text>

            <Text style={styles.modalText}>
              Are you sure you want to delete this task?
            </Text>

            <View style={styles.modalButtons}>

              <TouchableOpacity
                style={styles.cancelButton}
                onPress={() => setModalVisible(false)}
              >
                <Text style={styles.cancelText}>Cancel</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.deleteButton}
                onPress={deleteTodo}
              >
                <Text style={styles.deleteText}>Delete</Text>
              </TouchableOpacity>

            </View>

          </View>

        </View>
      </Modal>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({

  safeArea: {
    flex: 1,
    backgroundColor: "#f4f6f8",
  },

  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 10,
  },

  title: {
    fontSize: 28,
    fontWeight: "700",
    color: "#111827",
    marginBottom: 20,
  },

  searchBox: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#ffffff",
    paddingHorizontal: 14,
    paddingVertical: 12,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: "#e5e7eb",
    marginBottom: 15,
  },

  searchInput: {
    flex: 1,
    marginLeft: 8,
    fontSize: 15,
  },

  addSection: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },

  addInput: {
    flex: 1,
    backgroundColor: "#ffffff",
    borderRadius: 14,
    borderWidth: 1,
    borderColor: "#e5e7eb",
    paddingHorizontal: 14,
    paddingVertical: 12,
    fontSize: 15,
  },

  addButton: {
    backgroundColor: "#111827",
    padding: 12,
    borderRadius: 12,
    marginLeft: 10,
  },

  todoCard: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#ffffff",
    padding: 16,
    borderRadius: 14,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: "#f1f5f9",
  },

  todoLeft: {
    flexDirection: "row",
    alignItems: "center",
  },

  todoText: {
    fontSize: 16,
    marginLeft: 10,
  },

  completedText: {
    textDecorationLine: "line-through",
    color: "#9ca3af",
  },

  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.4)",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },

  modalCard: {
    width: "100%",
    backgroundColor: "white",
    padding: 24,
    borderRadius: 18,
    alignItems: "center",
  },

  modalTitle: {
    fontSize: 20,
    fontWeight: "600",
    marginTop: 10,
  },

  modalText: {
    color: "#6b7280",
    textAlign: "center",
    marginTop: 6,
    marginBottom: 20,
  },

  modalButtons: {
    flexDirection: "row",
    width: "100%",
  },

  cancelButton: {
    flex: 1,
    padding: 12,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#e5e7eb",
    alignItems: "center",
    marginRight: 10,
  },

  deleteButton: {
    flex: 1,
    padding: 12,
    borderRadius: 10,
    backgroundColor: "#ef4444",
    alignItems: "center",
  },

  cancelText: {
    color: "#374151",
  },

  deleteText: {
    color: "white",
    fontWeight: "600",
  },
});