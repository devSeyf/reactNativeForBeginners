import { StyleSheet, Dimensions } from "react-native";

const { width } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10,
    borderRadius: 20,
    overflow: "hidden",
    width: width - 20,
    height: 220,
    justifyContent: "flex-end",
  },

  whiteCont: {
    backgroundColor: "rgba(255, 255, 255, 0.9)",
    padding: 10,
    borderRadius: 10,
    margin: 10,
  },

  redCont: {
    backgroundColor: "#FF0000",
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderRadius: 5,
    alignSelf: "flex-start",
  },

  deadlineText: {
    color: "#FFFFFF",
    fontWeight: "bold",
    fontSize: 12,
  },

  newsText: {
    marginTop: 8,
    color: "#333",
    fontWeight: "600",
  },

  listContainer: {
    marginTop: 20,
  },
});

export default styles;