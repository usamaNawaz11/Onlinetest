import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FlatList, Text, View, Image , TouchableOpacity} from 'react-native';
import { StyleSheet } from 'react-native';
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import { Ionicons } from '@expo/vector-icons';
import { removeCart } from '../reduxtoolkit/Cartslice';

const CartScreen = () => {
  const cart = useSelector((state) => state.name);   // Using useSelector to extract the 'name' property from the Redux state,
  const dispatch = useDispatch(); //using dispatch function to dispatch an action

  const remove = (index) => { //it is a function to remove an item from the cart using it index
    dispatch(removeCart(index));
  };

  const cartItem = ({ item, index }) => {
    return (
      <View style={styles.list}>
        <View style={styles.item}>
        <Image source={item.Image} style={styles.image} />
        <View style={{ flexDirection: "column" }}>

          <Text style={styles.font}>{item.name}</Text>
            <Text style={styles.price}>{item.price}</Text>
           
          <TouchableOpacity onPress={() => remove(index)} style={styles.delete}>
            <Text style={{ color: "white" }}>Delete</Text>
          </TouchableOpacity>
        </View>
        </View>
      </View>
    );
  };

  return (
    <View>
      <FlatList
        data={cart}
        renderItem={cartItem}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

const styles= StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:"white"
  },
  delete:{
    width:responsiveWidth(28),
    height:responsiveHeight(4.5),
    backgroundColor:"red",
    marginTop:responsiveHeight(4),
    alignItems:"center",
    justifyContent:"center",
    borderRadius:25,

  },

price: {
    fontSize: responsiveFontSize(1.8),
    fontWeight: "300"
},
image: {
    width: responsiveWidth(30),
    height: responsiveHeight(8),
    marginTop: responsiveHeight(1)
},

font: {
    textAlign: "center",
    fontSize: responsiveFontSize(2),
    color: "black",
    fontWeight: "bold",
    marginTop: responsiveHeight(1.5),
},
item: {
    width: responsiveWidth(95),
    height: responsiveHeight(15),
    borderWidth: 1,
    backgroundColor: "white",
    borderRadius: 10,
    marginTop: responsiveHeight(2),
    flexDirection: "row",
    marginLeft: responsiveHeight(-0.5)
},
list: {
    marginLeft: responsiveHeight(2),
    marginRight: responsiveHeight(2),
},

});

export default CartScreen;