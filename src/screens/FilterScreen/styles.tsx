import { StyleSheet } from "react-native";
import { screenWidth } from "../../constants/screenDimensions";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  input: {
    borderWidth: 1,
    borderColor: "grey",
    borderRadius: 5,
    padding: 10,
    marginVertical: 10,
    width: "100%",
    alignSelf: "center",
  },
  subContainer: {
    width: screenWidth - 80,
    alignSelf: "center",
    marginTop: 20,
  },
  label: {
    fontWeight: "600",
    fontSize: 20,
  },
  button: {
    alignSelf: "center",
    borderWidth: 1,
    borderColor: "green",
    borderRadius: 5,
    width: screenWidth - 80,
    padding: 10,
    alignItems: "center",
    marginVertical: 20,
  },
  buttonText: {
    fontWeight: "500",
    fontSize: 20,
    color: "green",
  },
  radioButtonContainer: {
    marginTop: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  radio: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 5,
    borderWidth: 1,
    padding: 5,
    borderRadius: 5,
  },
  radioText: {
    fontSize: 16,
  },
  resetButton: {
    alignSelf: "flex-end",
    marginRight: 12,
    marginTop: 8,
  },
  resetButtonText: {
    color: "red",
    fontWeight: "600",
    fontSize: 14,
  },
});
