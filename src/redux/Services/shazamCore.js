import { createAPI, fetchBaseQuery } from '@reduxjs/toolkit/query/react';



export const shazamCoreApi = createAPI({
    reducerPath: 'shazamCoreApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://shazam-core.p.rapidapi.com/v1',
        prepareHeaders: () => {
            headers.set('X-RapidAPI-Key'), 'ca9ac2a99fmsh07054a8fe5103fep15e05bjsn23eb61e06858'
            return headers;
        },
    }),
    endpoints: (builder) => ({
        getTopCharts: builder.query({ query: '/charts/world' }),
    }),
});

export const {
    useGetTopChartsQuery,
} = shazamCoreApi;