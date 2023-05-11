import {StyleSheet} from 'react-native';
import colors from '../../constants/colors';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: colors.secondary,
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 16,
    },
    bookContainer: {
      alignItems: 'center',
      justifyContent: 'center',
      marginVertical: 16,
    },
    bookImage: {
      width: 200,
      height: 300,
      resizeMode: 'contain',
      marginBottom: 8,
    },
    bookName: {
      fontSize: 20,
      fontWeight: 'bold',
      marginBottom: 8,
    },
    bookAuthor: {
      fontSize: 16,
    },
  });

  export default styles;