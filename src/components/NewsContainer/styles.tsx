import { StyleSheet } from "react-native";
import { screenWidth } from "../../constants/screenDimensions";

export const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    marginBottom: 12,
    marginLeft: 18,
  },
  footer: {
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    marginBottom: 20,
  },
  loadMoreBtn: {
    padding: 10,
    backgroundColor: 'white',
    borderRadius: 8,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth:1,
    borderColor:'black',
    width: screenWidth/2,
  },
  btnText: {
    color: 'black',
    fontSize: 15,
    textAlign: 'center',
  },
})