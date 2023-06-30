import { configureStore} from "@reduxjs/toolkit";
import Slice from './Slice'

const store=configureStore({
    reducer:{
        reducer1:Slice
    }
})
export default store;



