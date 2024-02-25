import { gql } from "@apollo/client";

export const REPORTS_QUERY = gql`
  query ($page: Int, $global: Boolean, $username: String, $filter: String) {
    user_transactions(
      page: $page
      global: $global
      username: $username
      filter: $filter
    ) {
      id
      transaction_date
      transaction_type
      description
      transaction_amount
      transaction_currency
    }
    user_transactions_total
  }
`;
