import { StyleSheet } from "react-native";
import { screenWidth } from "../../constants/screenDimensions";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: 'center'
  },
  subContainer: {
    width: screenWidth - 80,
    alignSelf: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 12
  },
  label: {
    fontSize: 16,
    fontWeight: 'normal',
    marginBottom: 8
  },
  input: {
    width: "100%",
    height: 40,
    borderWidth: 1,
    borderColor: 'lightgrey',
    borderRadius: 4,
    marginBottom: 12,
    paddingLeft: 8
  },
  button: {
    width: screenWidth - 80,
    height: 40,
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: 12,
    borderWidth: 1,
    borderColor: 'green',
    marginBottom: 12
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'green'
  },
});