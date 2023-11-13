import { Platform, StatusBar, StyleSheet } from "react-native";
import { screenHeight } from "../../constants/screenDimensions";
import { secondaryColor } from "../../constants/appColors";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    top: 0,
    width: "100%",
    height: Platform.OS === "ios" ? screenHeight * 0.11 : screenHeight * 0.08,
    backgroundColor: secondaryColor,
    alignItems: "center",
    justifyContent: "space-between",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  headerTitle: {
    color: "white",
    fontWeight: "500",
    maxWidth: "80%",
    textAlign: "center",
    fontSize: 20,
  },
  headerButton: {
    width: 24,
    height: 24,
    marginHorizontal: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: "white",
  },
});
