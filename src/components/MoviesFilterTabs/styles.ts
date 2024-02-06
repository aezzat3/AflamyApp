import { StyleSheet, Dimensions } from 'react-native';

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
    backgroundColor: '#0000',
    borderRadius: 20,
  },
  selectedButton: {
    backgroundColor: 'green',
  },
  text: {
    fontWeight: 'bold',
    fontSize: 13,
  },
  selectedText: {
    color: '#FFFF',
  },
});
