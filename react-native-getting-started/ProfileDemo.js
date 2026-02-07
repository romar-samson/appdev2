import { View, Text, StyleSheet } from "react-native";

export default function ProfileDemo() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Profile Information</Text>

      <Text>Course & Section: BSIS 3B</Text>
      <Text>Name: Romar Samson</Text>
      <Text>Age: 21</Text>
      <Text>Favorite Hobby: Table tennis, Volleyball, and Cycling</Text>
      <Text>
        Short Bio: I enjoy when i'm alone.
      </Text>

      <View style={styles.petPeeves}>
        <Text>Pet Peeves:</Text>
        <Text>• Slow walkers</Text>
        <Text>• Noisy people inside the cafe</Text>
        <Text>• People don't know how to clean</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 10,
  },
  petPeeves: {
    marginTop: 10,
  },
});
