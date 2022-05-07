import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const contactsApi = createApi({
  reducerPath: "contactsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://connections-api.herokuapp.com",
    prepareHeaders: (headers, {getState}) => {
      const token = getState().auth.token
      if(token) {
        headers.set('Authorization', `Bearer ${token}`)
      }
      return headers
    }
  }),
  tagTypes: ["contact"],
  endpoints: (builder) => ({
    fetchContacts: builder.query({
      query: () => `/contacts`,
      providesTags: ["contact"],
    }),
    createContact: builder.mutation({
      query: (newContact) => ({
        url: `/contacts`,
        method: "POST",
        body: newContact,
      }),
      invalidatesTags: ["contact"],
    }),
    deleteContact: builder.mutation({
      query: (contactId) => ({
        url: `/contacts/${contactId}`,
        method: "DELETE",
      }),
      invalidatesTags: ["contact"],
    }),
    changeContact: builder.mutation({
      query: (contactId) => ({
        url: `/contacts/${contactId}`,
        method: "PATCH",
      }),
      invalidatesTags: ["contact"],
    }),
  }),
});

export const {
  useFetchContactsQuery,
  useCreateContactMutation,
  useDeleteContactMutation,
  useChangeContactMutation
} = contactsApi;
