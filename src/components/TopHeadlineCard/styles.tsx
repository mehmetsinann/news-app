import { StyleSheet } from "react-native";
import { screenHeight, screenWidth } from "../../constants/screenDimensions";
import { backgroundColor, secondaryColor } from "../../constants/appColors";

export const styles = StyleSheet.create({
  container: {
    width: screenWidth * 0.4,
    height: screenHeight * 0.2,
    backgroundColor: backgroundColor,
    borderRadius: 8,
    padding: 8
  },
  articleTitle: {
    fontSize: 18,
    fontWeight: "500",
    color: "black",
  },
  articleDescription: {
    fontSize: 14,
    fontWeight: "400",
    color: "black",
  }
});