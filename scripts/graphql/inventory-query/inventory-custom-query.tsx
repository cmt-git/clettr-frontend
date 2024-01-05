import { gql } from "@apollo/client";

export const INVENTORY_CUSTOM_QUERY = gql`
    query($page: Int, $filters: String, $not_user: Boolean) {
        owned_nfts(page: $page, filters: $filters, not_user: $not_user) {
            inventory_nfts{
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
        }
    }
`