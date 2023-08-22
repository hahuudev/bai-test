import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const sliderApi = createApi({
    reducerPath: "silderApi",
    baseQuery: fetchBaseQuery({
        baseUrl: "https://test-react.agiletech.vn/",
    }),
    endpoints: (builder) => ({
        getGalleries: builder.query<{ id: string; desctiption: string; imageUrl: string }[], void>({
            query: () => "/galleries",
        }),
    }),
});

export const { useGetGalleriesQuery } = sliderApi;
export default sliderApi;
