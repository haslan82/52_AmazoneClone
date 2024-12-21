/* import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import AmazonePay from "../assets/amazon-pay.png";
import SendMoney from "../assets/send-money.jpg";
import Scan from "../assets/scan-qr.jpeg";
import PayBills from "../assets/pay-bills.jpeg";
import {RecentSearchData} from "../data/RecentSearchData"
import ServicesCard from "./ServicesCard";

const Services = () => {
  return (
   
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingRight: 20}}
        style={styles.container}
      >
        <View style={styles.ServicesContainer}>
            
          <View style={styles.row}>
            <View style={styles.innerContainer}>
              <Image style={styles.image} source={AmazonePay} />
              <Text style={styles.text}>Amazone Pay</Text>
            </View>

            <View style={styles.innerContainer}>
              <Image style={styles.image} source={SendMoney} />
              <Text style={styles.text}>Send Money</Text>
            </View>

          </View>




          <View style={styles.row}>
            <View style={styles.innerContainer}>
              <Image style={styles.image} source={Scan} />
              <Text style={styles.text}>Scan QR</Text>
            </View>

            <View style={styles.innerContainer}>
              <Image style={styles.image} source={PayBills} />
              <Text style={styles.text}>PayBills</Text>
            </View>
          </View>
        </View>

<View>
    {
        RecentSearchData.map((item)=>(
           <ServicesCard item={item}/>
        ))
    }
</View>

      </ScrollView>
    
  );
};

export default Services;

const styles = StyleSheet.create({

  container: {
    marginTop:-50,
    paddingHorizontal:10
  },

  ServicesContainer: {
    backgroundColor:"#fff",
    borderRadius:5,
  },


  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },


  innerContainer: {
    padding:10,
    alignItems:"center",
    paddingTop:15
  },


  image: {
    width: 50,
    height: 50,
    borderRadius:50
  },
  
  text: {
    fontSize: 10,
    color: "#black",
    marginTop:2
  },
});
 */


import { ScrollView, StyleSheet, Text, View, Image } from "react-native";
import AmazonPay from "../assets/amazon-pay.png";
import SendMoney from "../assets/send-money.jpg";
import ScanQR from "../assets/scan-qr.jpeg";
import PayBills from "../assets/pay-bills.jpeg";
import { RecentSearchData } from "../data/RecentSearchData";
import ServiceCard from "./ServicesCard";

const Services = () => {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{ paddingRight: 20 }}
      style={styles.container}
    >
      <View style={styles.serviceContainer}>
        <View style={styles.row}>
          <View style={styles.innerContainer}>
            <Image source={AmazonPay} style={styles.imgStyle} />
            <Text style={styles.title}>Amazon Pay</Text>
          </View>

          <View style={styles.innerContainer}>
            <Image source={SendMoney} style={styles.imgStyle} />
            <Text style={styles.title}>Send Money</Text>
          </View>
        </View>

        <View style={styles.row}>
          <View style={styles.innerContainer}>
            <Image source={ScanQR} style={styles.imgStyle} />
            <Text style={styles.title}>Scan QR</Text>
          </View>

          <View style={styles.innerContainer}>
            <Image source={PayBills} style={styles.imgStyle} />
            <Text style={styles.title}>Pay Bills</Text>
          </View>
        </View>
      </View>
      {RecentSearchData.map((item) => (
        <ServiceCard item={item} />
      ))}
    </ScrollView>
  );
};

export default Services;

const styles = StyleSheet.create({
  container: {
    marginTop: -30,
    paddingHorizontal: 10,
  },
  serviceContainer: {
    backgroundColor: "#fff",
    borderRadius: 5,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  innerContainer: {
    padding: 10,
    alignItems: "center",
    paddingTop: 15,
  },
  imgStyle: {
    height: 50,
    width: 50,
    borderRadius: 50,
  },
  title: {
    fontSize: 10,
    color: "#000000",
    marginTop: 2,
  },
});

