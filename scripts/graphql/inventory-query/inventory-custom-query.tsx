import { gql } from "@apollo/client";

export const INVENTORY_CUSTOM_QUERY = gql`
  query (
    $page: Int
    $not_user: Boolean
    $username: String
    $filters: String
    $nft_type: String
    $nft_star: String
    $nft_requirements: String
    $nft_requirement_1: String
    $nft_requirement_2: String
    $nft_requirement_3: String
    $nft_requirement_4: String
    $nft_requirement_5: String
    $nft_color: String
    $nft_pattern: String
    $nft_hash: String
    $nft_market_currency: String
    $nft_market_operator: String
    $nft_market_cost: String
  ) {
    owned_nfts(
      page: $page
      not_user: $not_user
      username: $username
      filters: $filters
      nft_type: $nft_type
      nft_star: $nft_star
      nft_requirements: $nft_requirements
      nft_requirement_1: $nft_requirement_1
      nft_requirement_2: $nft_requirement_2
      nft_requirement_3: $nft_requirement_3
      nft_requirement_4: $nft_requirement_4
      nft_requirement_5: $nft_requirement_5
      nft_color: $nft_color
      nft_pattern: $nft_pattern
      nft_hash: $nft_hash
      nft_market_currency: $nft_market_currency
      nft_market_operator: $nft_market_operator
      nft_market_cost: $nft_market_cost
    ) {
      inventory_nfts {
        id
        current_owner
        original_owner
        creation_date
        nft_token_id
        nft_parent_token_id
        nft_token_uri
        nft_type
        nft_traits
        nft_hash
        nft_stars
        nft_requirement
        status
        market_info
      }
    }
  }
`;
