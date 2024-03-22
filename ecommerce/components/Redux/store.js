// import { configureStore } from '@reduxjs/toolkit'
// import { productsApi } from './service'
// import cartReducer from './cartReducer'

// import { combineReducers } from '@reduxjs/toolkit'
// import persistReducer from 'redux-persist/es/persistReducer'
// import storage from 'redux-persist/lib/storage'
// import persistStore from 'redux-persist/es/persistStore'
// import { setupListeners } from '@reduxjs/toolkit/query'

// let rootReducer = combineReducers(
//   {
//     [productsApi.reducerPath]: productsApi.reducer,
//     cart: cartReducer
//   }
// )
// const persistConfig = {
//   key: 'root',
//   storage,
// };
// const persistedReducer = persistReducer(persistConfig,rootReducer);

// export const store = configureStore({
//   reducer: persistedReducer,
//   middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware().concat(productsApi.middleware),
// });

// export const persistor = persistStore(store)
// setupListeners(store.dispatch);


import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from '@react-native-async-storage/async-storage'; // Correct import for AsyncStorage in React Native
import cartReducer from './cartReducer';
import { productsApi } from './service';
import { setupListeners } from '@reduxjs/toolkit/query';

const persistConfig = {
  key: 'root',
  storage: storage, // Use AsyncStorage for React Native
};

const rootReducer = combineReducers({
  [productsApi.reducerPath]: productsApi.reducer,
  cart: cartReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productsApi.middleware),
});

 export const persistor = persistStore(store);
setupListeners(store.dispatch);



