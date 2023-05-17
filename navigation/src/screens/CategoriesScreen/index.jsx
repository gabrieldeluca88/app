import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import styles from './styles';

const CategoriesScreen = ({ navigation }) => {
  const categories = [
    { id: 1, title: 'Ficción' },
    { id: 2, title: 'No Ficción' },
    { id: 3, title: 'Fantasía' },
  ];

  const renderCategoryItem = (category) => (
    <TouchableOpacity
      style={styles.categoryItem}
      onPress={() => navigation.navigate('Book')}
      key={category.id}
    >
      <View style={styles.categoryContainer}>
        <Text style={styles.categoryTitle}>{category.title}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.screenTitle}>CategoriesScreen</Text>
      {categories.map(renderCategoryItem)}
    </View>
  );
};



export default CategoriesScreen;
