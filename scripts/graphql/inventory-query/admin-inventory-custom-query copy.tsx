import { gql } from "@apollo/client";

export const ADMIN_INVENTORY_CUSTOM_QUERY = gql`
  query ($page: Int, $filters: String, $not_user: Boolean, $username: String) {
    owned_nfts(
      page: $page
      filters: $filters
      not_user: $not_user
      username: $username
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
    user(username: $username) {
      banned
    }
  }
`;
