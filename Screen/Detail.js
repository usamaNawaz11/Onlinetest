import React from "react";
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Image
} from "react-native";
import { responsiveHeight, responsiveWidth, responsiveFontSize } from 'react-native-responsive-dimensions';
import { addCartItem } from "../reduxtoolkit/Cartslice";
import { useDispatch, useSelector } from "react-redux";
const Detail = ({ route, navigation }) => {
    const { list } = route.params //use root.param because when user press an item it will navigate to detail screen and this screen carries all the informatoin from list and display it in this screen
    const dispatch = useDispatch(); //using dispatch to dispatch an action
    const add=useSelector(state=>state)
    console.log(add)
    const handleadd=(list)=>[
        dispatch(addCartItem(list)) //it dispatch an action which is tored in redux cart slice which is now is add cart item so it gonna add the item in cart
        
    ]
    return (
        <View style={styles.container}>
         <Image
         source={list.Image}
         style={styles.img}
         />

         
            <View style={styles.mainBox}>
            <Text
            style={styles.font}
            >
                {list.name}
            </Text>
            <View style={{flexDirection:"row", marginTop:responsiveHeight(1)}}>
                <Text style={styles.fontDef}>
                    Price: 
                </Text>
            <Text
            style={styles.fontsmall}
            >
                
                {list.price}
            </Text>
            </View>
            <View style={{marginTop:responsiveHeight(1)}}>
                <Text style={styles.fontDef}>
                    Description: 
                </Text>
            <Text
            style={styles.fontsmall}
            >
                
                {list.detail}
            </Text>
            </View>
            </View>
            <TouchableOpacity
            onPress={()=>handleadd(list)}
            style={styles.button}
            >
                <Text
                style={styles.buttonText}
                >
                    Add to cart
                </Text>

            </TouchableOpacity>
            <Text>
                {add.name.length}
            </Text>
            </View>


    )

}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",

    },
    mainBox:{
        width:responsiveWidth(100),
       
        
    },
    img:{
        alignSelf:"center"
    },
    font:{
        fontSize:responsiveFontSize(3.3),
        fontWeight:"bold"
    },
    fontDef:{
        fontWeight:"bold",
        fontSize:responsiveFontSize(2)

    },
    fontsmall:{
        fontSize:responsiveFontSize(2)
    },
    button:{
        width:responsiveWidth(80),
        height:responsiveHeight(5),
        backgroundColor:"#89CFF0",
        justifyContent:"center",
        alignSelf:"center",
        borderRadius:responsiveHeight(5),
        marginTop:responsiveHeight(40)
    },
    buttonText:{
        fontSize:responsiveFontSize(2),
        textAlign:"center",
        color:"black"
    }


})
export default Detail;