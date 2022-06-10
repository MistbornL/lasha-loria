import { gql } from "@apollo/client";

export const GET_CURRENCY = `
  query {
    currencies {
      label
      symbol
    }
  }
`;
