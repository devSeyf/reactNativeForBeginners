import { View, Text, Image,   } from "react-native";
import React, { useEffect, useState } from "react";
import styles from "./styles";
import axios from "axios";

export default function TopNews() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    getTopNews();
  }, []);

  async function getTopNews() {
    try {
      const response = await axios.get(
        "https://newsdata.io/api/1/news",
        {
          params: {
            apikey: "pub_3c38aff9d43749079cf6f92509e0e9ff",
            country: "tr",
            language: "tr",
          },
        }
      );

      const results = response.data?.results || [];

      const filtered = results
        .filter((item) => item.image_url)
        .slice(0, 10); 

      setNews(filtered);
    } catch (error) {
      console.log(error);
    }
  }

 

return (
  <View style={styles.container}>
    <Text style={styles.sectionTitle}>Top News</Text>

    {news.map((item, index) => (
      <View key={index} style={styles.cardCont}>
        <Image
          source={{ uri: item.image_url }}
          style={styles.cardArticlImage}
          resizeMode="cover"
        />
        <Text style={styles.cardArticleName}>
          {item.title}
        </Text>
      </View>
    ))}
  </View>
);
}