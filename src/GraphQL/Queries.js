import { gql } from "@apollo/client";

export const GET_CATEGORIES_AND_CURRENCIES = gql`
  query {
    currencies {
      label
      symbol
    }
    categories {
      name
    }
  }
`;
