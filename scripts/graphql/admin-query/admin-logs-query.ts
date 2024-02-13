import { gql } from "@apollo/client";

export const ADMIN_LOGS_QUERY = gql`
  query ($page: Int) {
    admin_logs_entity(page: $page) {
      description
      date
    }
  }
`;
