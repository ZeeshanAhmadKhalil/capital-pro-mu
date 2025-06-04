import { api } from '../../../services';

export const homeApi = api.injectEndpoints({
  endpoints: (builder) => ({
    makeTemplate: builder.mutation({
      query: ({ }) => {
        return {
          url: `/api/make-template`,
          method: 'POST',
        };
      },
    }),
  }),
});

export const { useMakeTemplateMutation } = homeApi;
