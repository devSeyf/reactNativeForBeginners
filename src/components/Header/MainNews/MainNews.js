import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  ImageBackground,
  FlatList,
  Dimensions,
} from "react-native";
import styles from "./styles";
import {} from '../../../utils/helpers/apiService.js'

const { width } = Dimensions.get("window");

export default function MainNews() {
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

      const filteredNews = results
        .filter((item) => item.image_url)
        .slice(0, 5);

      setNews(filteredNews);
    } catch (error) {
      console.log(error);
    }
  }

  function renderNews({ item }) {
    if (!item.image_url) return null;

    return (
      <ImageBackground
        source={{ uri: item.image_url }}
        style={styles.container}
        resizeMode="cover"
      >
        <View style={styles.whiteCont}>
          <View style={styles.redCont}>
            <Text style={styles.deadlineText}>
              {item.source_id}
            </Text>
          </View>

          <Text numberOfLines={2} style={styles.newsText}>
            {item.title}
          </Text>
        </View>
      </ImageBackground>
    );
  }

  return (
    <FlatList
      data={news}
      renderItem={renderNews}
      keyExtractor={(item, index) => index.toString()}
      horizontal
      pagingEnabled
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.listContainer}
    />
  );
}