import { configureStore } from "@reduxjs/toolkit";
import postApi from "./post.service";
import sliderApi from "./slider.service";

export const store = configureStore({
    reducer: {
        [postApi.reducerPath]: postApi.reducer,
        [sliderApi.reducerPath]: sliderApi.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([postApi.middleware, sliderApi.middleware]),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
