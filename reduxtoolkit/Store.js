import { configureStore } from "@reduxjs/toolkit";
import cartreducer from "./Cartslice"
const Store = configureStore({
    reducer:{
        name:cartreducer //all their action is stored in store which is redux sore
    }
})
export default Store;