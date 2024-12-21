import { Image, StyleSheet, Text, View } from 'react-native'


const ServicesCard = ({item}) => {
  return (
    <View style={styles.outherContainer}>
    <Text style={styles.text}>{item.title}</Text>
    <Image style={styles.image} source={item.image} />
</View>
  )
}

export default ServicesCard

const styles = StyleSheet.create({

    outherContainer:{
       backgroundColor:"#fff",
       marginLeft:8,
        width:140,
        padding:5,
        borderRadius:5,
    },

    text:{
fontSize:"14px",
marginBottom:10,
color:"#black",
    },

    image:{
width:"100%",
height:130,
    }
})