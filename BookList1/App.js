import React, { useState } from 'react';

import { Button, FlatList, Modal, StyleSheet, Text, TextInput, TouchableOpacity, View , Image} from 'react-native';
import MainScreen from './src/screens/MainScreen';
import {useFonts} from 'expo-font';
import colors from './src/constants/colors';


 

export const bookList = [

  { name: 'carrie', author: 'stephen king',  image: 'https://http2.mlstatic.com/D_NQ_NP_612839-MLA47351874381_092021-O.jpg'},

  { name: 'cujo', author: 'stephen king' , image: 'https://images.cdn3.buscalibre.com/fit-in/360x360/cd/3e/cd3e373399ae88d5d7daba92518c3b2d.jpg'},

  { name: 'duma key', author: 'stephen king', image: 'https://www.ibs.it/images/9788868360887_0_536_0_75.jpg' },

];

 

export default function App() {

  const [modalVisible, setModalVisible] = useState(false);

  const [selectedBooks, setSelectedBooks] = useState([]);

  const [loaded] = useFonts({
    "Roboto-Regular": require("./src/assets/fonts/Roboto-Regular.ttf"),
  });

  if (!loaded) {
    return null;
  }

  const renderItem = ({ item }) => (

    <View style={styles.item}>

      <Image source={{ uri: item.image }} style={styles.image} />

      <View style={styles.bookInfo}>

        <Text style={styles.title}>{item.name}</Text>

        <Text style={styles.author}>{item.author}</Text>

        <TouchableOpacity onPress={() => handleBookSelect(item)}>

          <Text style={styles.addButton}>Add</Text>

        </TouchableOpacity>

      </View>

    </View>

  );

 

  const handleBookSelect = (book) => {

    setSelectedBooks([...selectedBooks, book]);

  };

 

  const handleClearSelectedBooks = (bookToRemove) => {

    setSelectedBooks(selectedBooks.filter(book => book !== bookToRemove));

  };

 

  return (

    <View style={styles.container}>

      <Text style={styles.titleContainer}>Book List</Text>
      
      <FlatList

        data={bookList}

        renderItem={renderItem}

        keyExtractor={(item) => item.name}

      />

      <Button title="Ver Books" onPress={() => setModalVisible(true)} />

      <Modal visible={modalVisible} animationType="slide">

        <View style={styles.modalContainer}>
        <MainScreen/>
          <Text style={styles.modalTitle}>Books</Text>

          {selectedBooks.length > 0 ? (

            selectedBooks.map((book, index) => (

              <SelectedBook key={index} book={book} handleClearSelectedBooks={handleClearSelectedBooks} />

            ))

          ) : (

            <Text>No books selected</Text>

          )}

          <Button title="Cerrar" onPress={() => setModalVisible(false)} />

        </View>

      </Modal>

    </View>

  );

}

 

const SelectedBook = ({ book, handleClearSelectedBooks }) => {

  const handleRemoveBook = () => {

    handleClearSelectedBooks(book);

  };

 

  return (

    <View style={styles.selectedBook}>

      <Text style={styles.selectedBookName}>{book.name}</Text>

      <Text style={styles.selectedBookAuthor}>{book.author}</Text>

      <Button title="X" onPress={handleRemoveBook} />

    </View>

  );

};

 




const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    paddingHorizontal: 20,
    backgroundColor: colors.secondary,
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.primary,
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 10,
  },
  title: {
    flex: 1,
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    fontFamily:'Roboto-Regular',
  },
  author: {
    fontSize: 18,
    fontStyle: 'italic',
    color: 'white'
  },
  addButton: {
    marginLeft: 10,
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 10,
    backgroundColor: 'black',
    color: '#E5F876',
  },
  modalContainer: {
    flex: 1,
    padding: 20,
    backgroundColor: '#2E2F36',
    color: 'white'
  },
  modalTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: 'white',
  },
  selectedBook: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  selectedBookName: {
    flex: 1,
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
  selectedBookAuthor: {
    fontSize: 16,
    fontStyle: 'italic',
    color: 'white',
  },


    image: {
      width: 100,
      height: 150,
      resizeMode: 'cover',
      marginRight: 10,
    },
    bookInfo: {
      flex: 1,
    },
    
    titleContainer: {
      color:'white',
      fontSize: 26,
    }
  });
