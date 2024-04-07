import { gql } from "@apollo/client";

export const cardSubscription = gql`
  subscription Cards {
    cards {
      name
      num
    }
  }
`;

export const cardQuery = gql`
  query Cards($session: String!) {
    cards(session: $session) {
      name
      num
      pollresultReady
    }
  }
`;

export const cardMutation = gql`
mutation PlayCard($input: UserCardInput!) {
    playCard(input: $input) {
        name
        num
        pollresultReady
    }
}
`

export const endSessionMutation = gql`
mutation EndSession($input: EndSessionInput!){
  endSession(input: $input)
}
`

export const beginSessionMutation = gql`
mutation BeginSession($input: BeginSessionInput!){
  beginSession(input: $input)
}
`
