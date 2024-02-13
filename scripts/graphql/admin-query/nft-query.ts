import { gql } from "@apollo/client";

export const NFT_QUERY = gql`
  query ($id: Int) {
    nft(id: $id) {
      id
      current_owner
      original_owner
      creation_date
      nft_parent_token_id
      nft_token_id
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
`;
