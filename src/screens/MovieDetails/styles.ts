import { StyleSheet } from 'react-native';
import { COLORS } from '../../common';

export default StyleSheet.create({
  container: {
    padding: 20,
  },
  image: {
    height: 180,
    width: '35%',
    alignSelf: 'center',
    borderRadius: 10,
    marginBottom: 10,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 10,
  },
  averageRate: {
    color: COLORS.green,
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 16,
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  overview: {
    color: COLORS.dark,
    textAlign: 'left',
    marginBottom: 20,
  },
  genresList: {
    marginBottom: 20,
  },
});
