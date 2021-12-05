import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

const ListScreen = () => {
  const friends = [
    { name: "Friend #1" },
    { name: "Friend #2" },
    { name: "Friend #3" },
    { name: "Friend #4" },
    { name: "Friend #5" },
    { name: "Friend #6" },
    { name: "Friend #7" },
    { name: "Friend #8" },
    { name: "Friend #9" },
    { name: "Friend #10" },
  ];
  //   const renderedList = friends.map((item) => (
  //     <Text key={item.name}>{item.name}</Text>
  //   ));
  return (
    <FlatList
      keyExtractor={(item, index) => index}
      data={friends}
      renderItem={({ item, index }) => <Text>{item.name}</Text>}
    />
  );
};

const styles = StyleSheet.create({});

export default ListScreen;
