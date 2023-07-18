import { StyleSheet } from "react-native";
import { screenHeight, screenWidth } from "../../constants/screenDimensions";

export const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginVertical: 12,
  },
  publishedAt: {
    fontSize: 14,
    color: "gray",
    marginBottom: 12,
  },
  image: {
    width: "100%",
    height: screenHeight * 0.25,
    marginBottom: 12,
    borderRadius: 12,
  },
  description: {
    fontSize: 16,
    marginBottom: 12,
  },
  content: {
    fontSize: 16,
    marginBottom: 12,
  },
  readMore: {
    fontSize: 14,
    color: "gray",
    marginBottom: 12,
    textAlign: "center",
  },
  goToNewButton: {
    width: screenWidth * 0.8,
    borderWidth: 1,
    borderRadius: 12,
    padding: 12,
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 12,
  },
});
