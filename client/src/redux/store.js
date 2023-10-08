// import cartReducer from "./cartReducer";
// import { configureStore } from "@reduxjs/toolkit";
// import {
//   persistStore,
//   persistReducer,
//   FLUSH,
//   REHYDRATE,
//   PAUSE,
//   PERSIST,
//   PURGE,
//   REGISTER,
// } from "redux-persist";
// import storage from "redux-persist/lib/storage";


// const persistConfig = {
//   key: "root",
//   version: 1,
//   storage,
// };

// const persistedReducer = persistReducer(persistConfig, cartReducer);

// export const store = configureStore({
//   reducer: {
//     cart: persistedReducer,
   
//   },
//   middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware({
//       serializableCheck: {
//         ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//       },
//     }),
// });

// export let persistor = persistStore(store);


// store.js
import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from "redux-persist";
import storage from "redux-persist/lib/storage";
import cartReducer from "./cartReducer";
// import {spotifyApi} from "../pages/Listen/redux/services/spotifyChore"

const persistConfig = {
  key: "root",
  version: 1,
  storage,
};

const persistedReducer = persistReducer(persistConfig, cartReducer);

export const store = configureStore({
  reducer: {
    cart: persistedReducer,
    // [spotifyApi.reducerPath]: spotifyApi.reducer, 
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    })
});

export const persistor = persistStore(store);



// // import cartReducer from "./cartReducer";
// // import { configureStore } from '@reduxjs/toolkit'

// // export default configureStore({
// //   reducer: {
// //     cart: cartReducer
// //   },
// // })

// // import { configureStore } from "@reduxjs/toolkit";
// // import { persistStore, persistReducer } from "redux-persist";
// // import storage from "redux-persist/lib/storage";
// // // const stripe = require('stripe')('sk_test_51LvQdWSGW9yGJv3NxyvMtwcESsmfwNg5WLIpF4Um6zh6Uoml94cQjIZVMKgKJOdRtIrwdJbNxdEHr3IJXTNVLXHM00WKsIT3pV');

// // import cartReducer from "./cartReducer";

// // const persistConfig = {
// //   key: "root",
// //   version: 1,
// //   storage,
// // };

// // const persistedReducer = persistReducer(persistConfig, cartReducer);

// // export const store = configureStore({
// //   reducer: {
// //     cart: persistedReducer,
// //   },
// // });

// // export const persistor = persistStore(store);
