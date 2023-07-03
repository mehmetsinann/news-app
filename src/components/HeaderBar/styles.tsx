import { StyleSheet } from "react-native";
import { screenHeight } from "../../constants/screenDimensions";
import { secondaryColor } from "../../constants/appColors";

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    top: 0,
    width: "100%",
    height: screenHeight * 0.11,
    backgroundColor: secondaryColor,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  headerTitle: {
    color:'white',
    fontSize: 24,
    fontWeight: "500",
    paddingBottom: 12
  },
  headerButton: {
    width: 40,
    height: 40,
    marginHorizontal: 8,
    justifyContent:'center',
    alignItems:'center'
  },
  buttonText: {
    color: "white",
  }
});