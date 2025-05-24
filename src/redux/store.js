import { configureStore } from "@reduxjs/toolkit";
import {
    persistStore, persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from "redux-persist";
import contactsReduser from "./contactsSlice";
import filtersReduser from "./filtersSlice";
import storage from "redux-persist/lib/storage";

const persistConfig = {
    key: 'contacts',
    storage
};

const rootReducer = persistReducer(persistConfig, contactsReduser);

export const store = configureStore({
    reducer: {
        contacts: rootReducer,
        filters: filtersReduser,
    },
      middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);