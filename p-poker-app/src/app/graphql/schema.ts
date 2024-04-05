import { gql } from "@apollo/client";

export const cardSubscription = gql`
  subscription Cards {
    cards {
      name
      num
    }
  }
`;