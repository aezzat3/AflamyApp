import { Platform, StyleSheet } from "react-native";
import { COLORS } from "../../common";

const styles = StyleSheet.create({
  container: {
 alignItems: 'center',
    backgroundColor: COLORS.green,
    height: Platform.OS === 'ios' ? 100 : 45,
    justifyContent: 'center',
    paddingTop: Platform.OS === 'ios' ? 50 : 0,
    position: 'absolute',
    width: '100%',
    zIndex: 1,
    },
    text: {
        color: COLORS.black
    }
});

export default styles