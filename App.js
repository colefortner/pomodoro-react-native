import React, { useState } from "react";
import { StyleSheet, View, Text } from "react-native";

export default function App() {
  const [focusSubject, setFocusSubject] = useState(null);
  return (
    <View style={styles.container}>
      {focusSubject ? (
        <Text>I have subject</Text>
      ) : (
        <Text>I don't have a subject</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 50
  }
});
