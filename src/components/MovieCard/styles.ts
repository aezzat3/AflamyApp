import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  card: {
    padding: 10,
    flexDirection: 'row',
    backgroundColor: '#FFFF',
    width: '100%',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 5,
    marginBottom: 20,
    borderRadius: 10,
    minHeight: 140,
  },
  image: {
    width: '25%',
    height: '100%',
    borderRadius: 5,
  },
  content: {
    flex: 1,
    marginLeft: 10,
  },
  title: {
    marginBottom: 10,
    color: '#000',
    fontWeight: 'bold',
    fontSize: 14,
  },
  date: {
    color: '#0000',
    fontSize: 12,
    marginBottom: 10,
  },
  averageRate: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    color:'green',
    fontWeight: 'bold',
  },
});
