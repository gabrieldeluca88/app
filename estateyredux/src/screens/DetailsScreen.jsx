import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useSelector } from "react-redux";
import { COLORS } from "../constants/colors";

const DetailsScreen = () => {
  const book = useSelector(state => state.products.selected);

  return (
    <View  style={styles.container}>
      <Text>{book.name}</Text>
      <Text>{book.description}</Text>
      <Text>${book.price}</Text>
    </View>
  );
};

export default DetailsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.primary,
    
  },
});