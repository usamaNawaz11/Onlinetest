import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { FlatList } from "react-native";
import { responsiveHeight, responsiveWidth, responsiveFontSize } from 'react-native-responsive-dimensions';
import { useSelector } from "react-redux";
import AntDesign from "react-native-vector-icons/AntDesign"

const List = ({ navigation }) => {
    const [company, setCompany] = useState([
        {
            id: "1",
            name: "Omelette McMuffin Meal",
            price: "5$",
            Image: require("../assets/break1.png"),
            screen: "detail",
            detail: "The best way to start the day! Nestled between a toasted English muffin is a perfectly cooked omelet loaded with capsicum, onions, tomato, and enhanced with a slice of melted cheese.Enjoy it with a hot beverage of your choice and a crispy hash brown."
        },
        {
            id: "2",
            name: "Chicken Sausage McMuffin ",
            price: "8$",
            Image: require("../assets/break2.png"),
            screen: "detail",
            detail: "Extra Value Meal: Make your morning sizzle with McDonald’s Chicken Sausage McMuffin with egg breakfast freshly toasted English muffin, savory chicken sausage, a slice of melted cheese, a freshly cracked Grade A+ egg and a crispy golden hash brown. Enjoy it with a steaming hot cup of our delicious coffee."
        },
        {
            id: "3",
            name: "Chicken Sausage McMuffin Meal",
            price: "3$",
            Image: require("../assets/break3.png"),
            screen: "detail",
            detail: "Extra Value Meal: Wake up to a McDonald’s Chicken Sausage McMuffin breakfast freshly toasted English muffin topped with savory chicken sausage, a slice of melted cheese and a crispy golden hash brown. Enjoy it with a steaming hot cup of our delicious coffee."
        },
        {
            id: "4",
            name: "Chicken Muffin Meal",
            price: "6$",
            Image: require("../assets/break4.png"),
            screen: "detail",
            detail: "Wake up to a McDonald’s Chicken Muffin breakfast – freshly toasted English muffin topped with special chicken patty, crispy lettuce and mayonnaise and a crispy golden hash brown.Enjoy it with a steaming hot cup of our delicious coffee."
        },
        {
            id: "5",
            name: "Hot Cakes",
            price: "9$",
            Image: require("../assets/break5.png"),
            screen: "detail",
            detail: "Mornings have never been tastier – enjoy golden brown melt-in-your-mouth McDonald’s hotcakes, with butter and the sweet flavour of maple."
        },
    ])

    const handlePress = (item) => {
        navigation.navigate("detail", { list: item }); //when user press any item it will navigate the user to detail screen and all the information will pass to the detail screen using this logic

    };
    const handlePress1 = () => {
        navigation.navigate("cartitem");
    };
    const add = useSelector(state => state) //using the useSelector hook from React Redux to access the Redux store state
    console.log(add) // log the entire state to see it structure
    const totalprice = add.name.reduce((acc, item) => { //add.name mean i set the property as name in redux store so for accessing the store i use add.mame and reduce method iterates over each item in the name array
        const price = Number(item.price.replace("$", "")); // i used the dollar sign in the price spo for replacing dollor to string and from string to integer  i used the number
        return acc + price; // i initialize initallprice of acc is 0 and when use add the item in the cart it return the new price by adding it pervious one
    }, 0);
    const renderItem = ({ item }) => {
        return (
            <TouchableOpacity
                onPress={() => handlePress(item)}
                style={styles.list}
            >
                <View
                    style={styles.item}
                >
                    <Image
                        style={styles.image}
                        source={item.Image}
                    />
                    <View style={{ flexDirection: "column" }}>
                        <Text style={styles.font}>{item.name}</Text>
                        <Text style={styles.price}>{item.price}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        )
    }

    return (
        <View style={styles.container}>
            <View
                style={styles.headStyle}
            >
                <Text style={styles.heading}>
                    Wellcome
                </Text>
                <TouchableOpacity
                onPress={handlePress1}
                >
                    <AntDesign name="shoppingcart" size={responsiveFontSize(3.5)}
                        style={{ marginLeft: responsiveHeight(26) }} />
                </TouchableOpacity>
                <Text
                style={{color:"#0000FF"}}
                >
                    {add.name.length}
                </Text>
            </View>
            



            <FlatList
                data={company}
                renderItem={renderItem}
            />
            <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
                <View style={{ flexDirection: "row" }}>
                    <Text
                        style={styles.botomFont}
                    >
                        Total Price :
                    </Text>
                    <Text style={{ marginLeft: responsiveHeight(1), marginTop: responsiveHeight(0.4) }}>
                        {totalprice}$
                    </Text>
                </View>

                <TouchableOpacity
                onPress={handlePress1}
                    style={styles.button}
                >
                    <Text
                        style={styles.buttonText}
                    >
                        View cart

                    </Text>

                </TouchableOpacity>
            </View>
            <View
                style={styles.itemStyle}
            >
                <Text
                    style={styles.botomFont}
                >Total Item  : </Text>

                <Text style={{ marginLeft: responsiveHeight(0.5), marginTop: responsiveHeight(0.4) }}>
                    {add.name.length}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        backgroundColor: "white"
    },
    botomFont: {
        fontSize: responsiveFontSize(2),
        fontWeight: "700"

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
    itemStyle: {
        marginTop: responsiveHeight(-5),
        marginBottom: responsiveHeight(2),
        marginLeft: responsiveHeight(2.3),
        flexDirection: "row"

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
    heading: {
        fontSize: responsiveFontSize(3),
        fontWeight: "700"
    },
    headStyle: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginLeft: responsiveHeight(1.5),
        marginRight: responsiveHeight(1.5)

    },
    button: {
        width: responsiveWidth(50),
        height: responsiveHeight(5),
        backgroundColor: "#89CFF0",
        justifyContent: "center",
        alignSelf: "flex-end",
        marginRight: responsiveHeight(2),
        borderRadius: responsiveHeight(2),
        marginBottom: responsiveHeight(3)
    },
    buttonText: {
        fontSize: responsiveFontSize(2),
        textAlign: "center",
        color: "black"
    }

})

export default List;
