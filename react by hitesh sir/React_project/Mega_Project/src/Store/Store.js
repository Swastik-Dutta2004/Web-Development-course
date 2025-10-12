import { configureStore } from "@reduxjs/toolkit"
import authSlice from './authSlice';

const store = configureStore({
    reducer: {
        auth: authSlice  // Add this line!
    }
})

export default store