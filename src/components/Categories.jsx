import { Image, ScrollView, StyleSheet, Text, TouchableOpacity} from 'react-native'
import { Category } from '../data/Categories'
import { useNavigation } from '@react-navigation/native';




const Categories = () => {

const navigation = useNavigation();

  return (
    
    <ScrollView horizontal styles={styles.container}
    showsHorizontalScrollIndicator={false}
    >
        { Category.map((item)=>(
           <TouchableOpacity style={styles.Category} 
           onPress={()=>navigation.navigate("Product")}>
             <Image style={styles.image} source={item.image} />
             <Text style={styles.text} >{item.title}</Text>
           </TouchableOpacity>
        ))}
    </ScrollView>
  );
};

export default Categories

const styles = StyleSheet.create({

    container:{
        padding: 10,
    },

    Category:{
paddingHorizontal: 8,
alignItems: 'center',
    },

    image:{
width:50,
height:50,
    },


    text:{
        color:"#2c4341"
    },
})