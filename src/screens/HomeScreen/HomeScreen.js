import React from "react";
import { ScrollView } from "react-native";
import { Header } from "../../components/Header/Header";
import MainNews from "../../components/Header/MainNews/MainNews";
import TopNews from "../../components/TopNews/TopNews";
import styles from "./styles";


const HomeScreen = () => {
  return (
    <ScrollView style={{ flex: 1 }}>
      <Header />
      <MainNews />
      <TopNews />
    </ScrollView>
  );
};
export default HomeScreen
 
 