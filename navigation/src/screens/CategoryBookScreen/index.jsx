import React from 'react';
import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native';
import styles from './styles';

const CategoryBookScreen = ({ navigation }) => {
  const bookList = [
    { name: 'carrie', author: 'stephen king', image: 'https://http2.mlstatic.com/D_NQ_NP_612839-MLA47351874381_092021-O.jpg' },
    { name: 'cujo', author: 'stephen king', image: 'https://images.cdn3.buscalibre.com/fit-in/360x360/cd/3e/cd3e373399ae88d5d7daba92518c3b2d.jpg' },
    { name: 'duma key', author: 'stephen king', image: 'https://www.ibs.it/images/9788868360887_0_536_0_75.jpg' },
  ];

  const handleBookPress = () => {
    // Lógica para la navegación cuando se presiona un libro
    navigation.navigate('Detail');
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Text style={styles.title}>CategoryBookScreen</Text>
        {bookList.map((book, index) => (
          <TouchableOpacity
            style={styles.item}
            onPress={handleBookPress}
            key={index}
          >
            <Image source={{ uri: book.image }} style={styles.image} />
            <View style={styles.bookInfo}>
              <Text style={styles.bookTitle}>{book.name}</Text>
              <Text style={styles.bookAuthor}>{book.author}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};


export default CategoryBookScreen;
