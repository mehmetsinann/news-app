import { StyleSheet } from "react-native";
import { screenHeight, screenWidth } from "../../constants/screenDimensions";
import { backgroundColor, secondaryColor } from "../../constants/appColors";

export const styles = StyleSheet.create({
  container: {
    width: screenWidth - 40,
    height: screenHeight * (screenHeight > 800 ? 0.45 : 0.55),
    borderRadius: 8,
    alignSelf: "center",
    marginVertical: 8,
    borderWidth: 1,
    borderColor: "lightgrey",
  },
  contentContainer: {
    flex: 1,
    backgroundColor: backgroundColor,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
    padding: 8,
    height: "40%",
    justifyContent: "space-around",
  },
  articleTitle: {
    fontSize: 20,
    fontWeight: "500",
    color: "black",
    marginVertical: 4,
  },
  articleDescription: {
    fontSize: 16,
    fontWeight: "400",
    color: "black",
  },
  bgImage: {
    width: "100%",
    height: "60%",
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  publishDate: {
    fontSize: 14,
    color: "gray",
  },
});
