import { StyleSheet } from 'react-native';
import { COLORS } from '../../common';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  genre: {
    backgroundColor: COLORS.light_gray,
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 2.5,
    marginRight: 10,
    marginBottom: 5,
  },
  genreText: {
    fontSize: 11,
    color: COLORS.dark,
    fontWeight: 'bold',
  },
});
