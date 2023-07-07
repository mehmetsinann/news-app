import { StyleSheet } from "react-native";
import { screenWidth } from "../../constants/screenDimensions";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: 'center',
  },
  newsContainer: {
    width: screenWidth - 80,
    alignItems: 'center',
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
    marginTop: 12
  },
  email: {
    fontSize: 20,
    fontWeight: 'normal',
    marginBottom: 4,
    color: "grey"
  },
  newsTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 4,
    marginTop: 12,
  },
  logoutButton: {
    padding: 12,
    backgroundColor: 'white',
    borderRadius: 8,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth:1,
    borderColor:'red',
    width: screenWidth - 80,
    marginTop: 12,
    position:'absolute',
    bottom: 32

  }
})