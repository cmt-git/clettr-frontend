import { gql } from "@apollo/client";

export const MARKET_QUERY = gql`
    query($page: Int) {
        user {
            username
            bsc_address
        }
        misc{
            total_players
            ettr_minted
            nft_circulation
            active_hashes
            passive_hashes
        }
        user_info{
            current_energy
            max_energy
            unclaimed_ettr
            active_nfts
            passive_nfts
            node_used
        }
        market_nfts(page: $page) {
            market_nfts{
                id
                current_owner
                original_owner
                creation_date
                nft_long_id
                nft_type
                nft_traits
                nft_hash
                nft_stars
                nft_requirement
                status
                market_info
            }
            active_nfts
            passive_nfts
        }
    }
`