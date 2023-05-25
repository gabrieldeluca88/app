import { StyleSheet, Text, View } from "react-native";

import React from "react";

const DetailsScreen = ({ route }) => {
  const book = route.params.product;
  return (
    <View>
      <Text>{book.name}</Text>
      <Text>{book.description}</Text>
      <Text>${book.price}</Text>
    </View>
  );
};

export default DetailsScreen;

const styles = StyleSheet.create({});