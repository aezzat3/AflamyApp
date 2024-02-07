import { StyleSheet } from "react-native";
import { COLORS } from "../../common";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.white, 
  },
  errorText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: COLORS.dark, 
  },
  avatar: {
    width: 200,
    height: 200,
    borderRadius: 30,
    marginBottom: 5,
  },

});

export default styles