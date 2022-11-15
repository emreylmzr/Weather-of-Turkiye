import { configureStore } from "@reduxjs/toolkit";

import weatherListReducer from "./weatherList"

export default configureStore({

    reducer: {

        weatherList: weatherListReducer,

    },
})