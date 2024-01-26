import { gql } from "@apollo/client";

export const REPORTS_QUERY = gql`
  query ($page: Int) {
    user_transactions(page: $page) {
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
