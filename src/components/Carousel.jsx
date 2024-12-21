import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import Swiper from "react-native-swiper";
import { CarouselData } from "../data/CarouselData";

const Carousel = () => {
  return (
    <View style={styles.container}>
      <Swiper
        style={styles.wrapper}
        showsButtons={false}
        showsPagination={false}
        autoplay={true}
        
      >


        {CarouselData.map((item) => (
          <View>
            <Image style={styles.image} source={item.image} />
          </View>
        ))}

        
      </Swiper>
    </View>
  );
};

export default Carousel;

const styles = StyleSheet.create({
  container: {
    height: 250,
  },
  wrapper: {

  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
});
