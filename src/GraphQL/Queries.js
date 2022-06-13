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

export const GET_ALL_CATEGORIES = gql`
  query {
    category(input: { title: "all" }) {
      name
      products {
        id
        name
        inStock
        gallery
        description
        category
        attributes {
          id
          name
          type
          items {
            displayValue
            value
            id
          }
        }
        prices {
          currency {
            label
            symbol
          }
          amount
        }
        brand
      }
    }
  }
`;
