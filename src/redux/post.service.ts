import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IPost } from "~/@types";

const postApi = createApi({
    reducerPath: "postApi",
    baseQuery: fetchBaseQuery({
        baseUrl: "https://test-react.agiletech.vn",
        headers: { Authorization: "Bearer " + localStorage.getItem("accessToken") },
    }),
    tagTypes: ["Post"],
    endpoints: (builder) => ({
        getPost: builder.query<{ posts: IPost[] }, void>({
            query: () => ({
                url: "/posts",
            }),

            providesTags: () => ["Post"],
        }),

        getPostById: builder.query<IPost, string>({
            query: (id) => "/posts/" + id,
        }),
        newPost: builder.mutation<IPost, IPost>({
            query: (data) => ({
                url: "/posts",
                method: "POST",
                body: data,
            }),
            invalidatesTags: () => ["Post"],
        }),
        updatePost: builder.mutation<IPost, IPost>({
            query: (data) => ({
                url: "/posts/" + data.id,
                method: "PATCH",
                body: data,
            }),
            invalidatesTags: () => ["Post"],
        }),
        deletePost: builder.mutation<IPost, string>({
            query: (id) => ({
                url: "/posts/" + id,
                method: "DELETE",
            }),
            invalidatesTags: () => ["Post"],
        }),
    }),
});

export const { useGetPostQuery, useGetPostByIdQuery, useNewPostMutation, useUpdatePostMutation, useDeletePostMutation } = postApi;
export default postApi;
