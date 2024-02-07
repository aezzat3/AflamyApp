import { StyleSheet, Dimensions } from 'react-native';
import { COLORS } from '../../common';

const { width } = Dimensions.get('screen');
const buttonWidth = (width - 80) / 3;

export default StyleSheet.create({
  row: {
    flexDirection: 'row',
    margin: 20,
    justifyContent: 'space-between',
  },
  filterButton: {
    paddingVertical: 10,
    alignItems: 'center',
    justifyContent: 'center',
    width: buttonWidth,
    backgroundColor: COLORS.light_gray,
    borderRadius: 20,
  },
  selectedButton: {
    backgroundColor: COLORS.green,
  },
  text: {
    fontWeight: 'bold',
    fontSize: 13,
  },
  selectedText: {
    color: COLORS.white,
  },
});
