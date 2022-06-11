import { gql } from "@apollo/client";

// export const GET_CURRENCY = gql`
//   query {
//     currencies {
//       label
//       symbol
//     }
//   }
// `;
export const GET_CURRENCY = gql`
  query {
    currencies {
      label
      symbol
    }
  }
`;
