import { createSlice } from "@reduxjs/toolkit";
import { act } from "react";
const initialstate=[];
const Cartslice=createSlice({
    name:"cart",
    initialState:[],
    reducers:{
        addCartItem(state,action){ //all the action is stord in cart slice screen so that any action we want we can get fron the page
            state.push(action.payload) //it is for add the item in cart

        },
        removeCart(state,action){
            return state.filter((item,index)=>index!=action.payload) //it is for removing an item from cart

        }
    }
})
export const {addCartItem,removeCart}=Cartslice.actions; //we use export so that we can use it any screen 
export default Cartslice.reducer