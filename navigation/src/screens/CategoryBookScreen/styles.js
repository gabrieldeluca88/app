import {StyleSheet} from 'react-native';
import colors from '../../constants/colors'

const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: 40,
      paddingHorizontal: 20,
      backgroundColor: colors.secondary,
    },
    scrollContainer: {
      flexGrow: 1,
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
    bookInfo: {
      flex: 1,
    },
    bookTitle: {
      fontSize: 24,
      fontWeight: 'bold',
      color: 'white',
    },
    bookAuthor: {
      fontSize: 18,
      fontStyle: 'italic',
      color: 'white',
    },
    image: {
      width: 100,
      height: 150,
      resizeMode: 'cover',
      marginRight: 10,
    },
    title: {
      color: 'white',
      fontSize: 26,
      marginBottom: 16,
    },
  });
  
  export default styles;