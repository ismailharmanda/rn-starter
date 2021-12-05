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
  const myFriends = [
    { name: "Friend 1", age: 20 },
    { name: "Friend 2", age: 45 },
    { name: "Friend 3", age: 32 },
    { name: "Friend 4", age: 27 },
    { name: "Friend 5", age: 54 },
    { name: "Friend 6", age: 30 },
    { name: "Friend 7", age: 29 },
  ];
  //   const renderedList = friends.map((item) => (
  //     <Text key={item.name}>{item.name}</Text>
  //   ));
  return (
    <>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item, index) => index}
        data={friends}
        renderItem={({ item, index }) => {
          return <Text>{item.name}</Text>;
        }}
      />
      <FlatList
        keyExtractor={(item, index) => item.name}
        data={myFriends}
        renderItem={({ item, index }) => {
          return (
            <Text>
              Name:{item.name} ---- Age:{item.age}
            </Text>
          );
        }}
      />
    </>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    marginVertical: 50,
  },
});

export default ListScreen;
