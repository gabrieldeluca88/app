import styles from './styles';
import React, { useState } from 'react';
import { Button, StyleSheet, Text, View, Image } from 'react-native';
import { bookList } from '../../../App';

const MainScreen = () => {
  const getRandomBook = () => {
    return bookList[Math.floor(Math.random() * bookList.length)];
  };

  const [currentBook, setCurrentBook] = useState(getRandomBook());

  const handleShowRandomBook = () => {
    setCurrentBook(getRandomBook());
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Libro aleatorio:</Text>
      <View style={styles.bookContainer}>
        <Image source={{ uri: currentBook.image }} style={styles.bookImage} />
        <Text style={styles.bookName}>{currentBook.name}</Text>
        <Text style={styles.bookAuthor}>{currentBook.author}</Text>
      </View>
      <Button title="Mostrar libro aleatorio" onPress={handleShowRandomBook} />
    </View>
  );
};



export default MainScreen;


