import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {config} from "../../config";
import {TagsResponse} from "./Types";


export const tagsApi = createApi({
  reducerPath: 'tagsApi',
  baseQuery: fetchBaseQuery({ baseUrl: config.baseUrl }),
  endpoints: (builder) => ({
    getAllTags: builder.query<TagsResponse, any>({
      query: () => `/tags`,
    }),
  }),
})
export const {useGetAllTagsQuery} = tagsApi