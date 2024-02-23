import { gql } from "@apollo/client";

export const INDEX_QUERY = gql`
  query {
    user {
      username
      bsc_address
      roles
      email
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
    user_earnings_query {
      user_earnings {
        reward
        day
      }
    }
  }
`;
