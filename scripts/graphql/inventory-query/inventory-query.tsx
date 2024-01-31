import { gql } from "@apollo/client";

export const INVENTORY_QUERY = gql`
  query ($username: String, $page: Int) {
    user {
      username
      bsc_address
    }
    misc {
      total_players
      ettr_minted
      nft_circulation
      active_hashes
      passive_hashes
    }
    user_info {
      current_energy
      max_energy
      unclaimed_ettr
      active_nfts
      passive_nfts
      node_used
    }
    owned_nfts(username: $username, page: $page) {
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
    user_set {
      user_set {
        id
        current_owner
        original_owner
        creation_date
        nft_token_id
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
