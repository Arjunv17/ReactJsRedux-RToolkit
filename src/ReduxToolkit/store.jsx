// src/app/store.js
import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../ReduxToolkit/slice';

const store = configureStore({
    reducer: {
        auth: authReducer
    }
});

export default store;
