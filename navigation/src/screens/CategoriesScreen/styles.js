import {StyleSheet} from 'react-native';
import colors from '../../constants/colors'

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 16,
      backgroundColor: colors.secondary
    },
    screenTitle: {
      fontSize: 20,
      fontWeight: 'bold',
      marginBottom: 16,
      color: 'white',
    },
    categoryItem: {
      marginBottom: 12,
      width: '100%',
    },
    categoryContainer: {
      backgroundColor: colors.primary,
      borderRadius: 8,
      padding: 16,
    },
    categoryTitle: {
      fontSize: 16,
      color: 'white',
    },
  });

  export default styles;