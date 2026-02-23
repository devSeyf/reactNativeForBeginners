import React from "react";
import { Image, Text, View, StyleSheet, Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import styles from "./styles";
export const Header = () => {
  return (
    <View style={styles.container}>
      <Image source={require("../../../assets/man.png")} style={styles.image} />

      <Text style={styles.name}>Mk News</Text>

      <Pressable>
        <Ionicons name="notifications-outline" size={24} color="black" />
      </Pressable>
    </View>
  );
};

