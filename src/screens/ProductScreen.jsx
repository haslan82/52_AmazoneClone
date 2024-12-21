import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import { ProductData } from "../data/ProductData";
import { AntDesign } from "@expo/vector-icons";
import PrimeLogo from "../assets/prime-logo.png";
import { getRating } from "../utils/Helpers";

const ProductScreen = () => {
  return (
    <SafeAreaView>
      <ScrollView style={styles.container}>
        <Text style={styles.title}>Result</Text>
       
        <Text style={styles.tagline}> 
          {" "}
          Price and other details may vary based on product aside and colour
        </Text>
        {ProductData.map((item) => (
          <View key={item.id} style={styles.productSection}>
            <View style={styles.productImgSection}>
              <Image style={styles.productImg} source={item.image} />
            </View>

            <View style={styles.productDetailSection}>
              <Text style={styles.sponsored}>Sponsored</Text>
              <Text style={styles.productName}>{item.productName}</Text>

              <View style={styles.row}>
                <Text style={styles.rating}>{item.rating} </Text>
         {getRating(item.rating)}

                <Text style={styles.ratingCount}>{item.ratingCount} </Text>
              </View>

              <View style={styles.row}>
                <Text style={styles.price}>{item.price} </Text>
                <Text style={styles.crossOut}>{item.crossOutText} </Text>
              </View>

              <Text style={styles.cashback}>
                Up to 5% cashback with Amazon Pay Credit card
              </Text>
              <Image style={styles.logo} source={PrimeLogo} />

              <Text style={styles.cashback}>
                FREE Delivery by {item.deliveryBy}
              </Text>
            </View>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default ProductScreen;

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },

  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#0000000",
  },

  tagline: {
    fontSize: 11,
    color: "gray",
  },

  productSection: {
    borderWidth: 2,
    flexDirection: "row",
    borderColor: "#dddddd",
    marginVertical: 10,
  },

  productImgSection: {
    width: "40%",
    backgroundColor: "#dddddd",
    justifyContent: "center",
  },

  productImg: {
    width: "100%",
    height: 150,
    resizeMode: "contain",
  },

  productDetailSection: {
    width: "60%",
    padding: 10,
  },

  sponsored: {
    fontSize: 12,
    color: "#000000",
  },

  productName: {
    fontSize: 12,
    color: "#0000000",
    lineHeight: 18,
  },

  rating: {
    fontSize: 10,
    color: "#017185",
    marginRight: 5,
  },

  ratingCount: {
    fontSize: 10,
    color: "#017185",
    marginLeft: 3
  },

  row: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 5,
  },
  price: {
    fontSize: 16,
    color: "#000000",
    marginRight: 5,
  },

  crossOut: {
    fontSize: 10,
    textDecorationLine: "line-through",
    color: "#ccc",
  },

  cashback: {
    fontSize: 9,
    marginVertical: 3,
  },

  logo: {
    height: 16,
    width: 42,
    marginVertical: 3,
  },
});
