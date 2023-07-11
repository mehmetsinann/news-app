import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  goToTopButton: {
    position: "absolute",
    bottom: 20,
    right: 20,
    padding: 12,
    backgroundColor: "black",
    borderRadius: 100,
    opacity: 0.7,
  },
  title: {
    fontSize: 20,
  },
  titleContainer: {
    marginVertical: 12,
    marginHorizontal: 16,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  keyword: {
    fontSize: 14,
    color: "grey",
  },
});
