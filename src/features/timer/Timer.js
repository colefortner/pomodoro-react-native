import React from "react";
import { View, StyleSheet, Text, Platform } from "react-native";

import { Countdown } from "../../components/Countdown";
import { colors } from "../../utils/colors";
import { spacing } from "../../utils/sizes";

export const Timer = ({ focusSubject }) => {
  return (
    <View style={styles.container}>
      <View style={styles.countdown}>
        <Countdown />
      </View>
      <View style={{ paddingTop: spacing.xxl }}>
        <Text style={styles.title}>Focusing on:</Text>
        <Text style={styles.task}>{focusSubject}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  title: {
    color: colors.white,
    textAlign: "center"
  },
  task: {
    color: colors.white,
    fontWeight: "bold",
    textAlign: "center"
  },
  countdown: {
    flex: 0.5,
    alignItems: "center",
    justifyContent: "center"
  }
});
