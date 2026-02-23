import { StyleSheet } from "react-native";
  const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    backgroundColor: "white",
    borderBottomWidth: 1,
    borderBottomColor: "lightgray",
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  name: {
    flex: 1,
    textAlign: "center",
    fontSize: 18,
    fontWeight: "bold",
  },
});


export default styles