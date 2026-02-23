import { StyleSheet, Dimensions } from "react-native";

const { width } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    marginTop: 16,
    paddingHorizontal: 16,
  },

  sectionTitle: {
    fontSize: 20,
    color: "red",
    fontWeight: "bold",
    marginBottom: 12,
  },

  listCont: {
    paddingBottom: 20,
  },

  cardCont: {
    marginBottom: 16,
    backgroundColor: "#fff",
    borderRadius: 12,
    overflow: "hidden",
    elevation: 3,  
  },

  cardArticlImage: {
    width: "100%",
    height: width * 0.5, // نصف عرض الشاشة تقريبًا
  },

  cardArticleName: {
    fontSize: 16,
    fontWeight: "600",
    padding: 12,
    color: "#333",
  },
});

export default styles;