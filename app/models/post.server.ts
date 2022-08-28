import apollo from "~/apollo.server";
import { GetAllPostsDocument } from "~/graphql-operations";

export const getPostTitles = () =>
  apollo.query({ query: GetAllPostsDocument }).then(({ data }) => data);
