import { FlatList, StyleSheet, View } from "react-native";
import { COLORS } from '../constants/colors'
import { ORDERS } from "../data/orders";
import OrderItem from "../components/OrderItem";
import React from "react";

const OrdersScreen = () => {
  const handeleDeleteOrder = () => {
    console.log("Eliminar orden");
  };
  const renderOrderItem = ({ item }) => (
    <OrderItem item={item} onDelete={handeleDeleteOrder} />
  );

  return (
    <View style={styles.container}>
      <FlatList style={styles.list}
        data={ORDERS}
        keyExtractor={item => item.id}
        renderItem={renderOrderItem}
      />
    </View>
  );
};

export default OrdersScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 12,
    backgroundColor: COLORS.primary,
    
  },
  list: {
    flex: 3,
  },
});