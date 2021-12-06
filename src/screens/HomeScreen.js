import React from "react";
import { Text, StyleSheet, View, Button } from "react-native";

const HomeScreen = () => {
  const buttonText = "Go to Components Demo";
  return (
    <View>
      <Text style={styles.text}>Hi there!</Text>
      <Button
        onPress={() => console.log("Button pressed")}
        title={buttonText}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default HomeScreen;
