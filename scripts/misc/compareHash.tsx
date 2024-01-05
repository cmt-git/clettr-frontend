import { store } from "../../pages/_app";

//! !!!!! - SYNC THIS BACKEND - !!!!!
export const getComparedHash = (current_hash: string, type: string) => {
    const hash_set = type == "active" ? store.getState().queryState.value.misc.active_hashes :  store.getState().queryState.value.misc.passive_hashes;

    let compared_hash = "----------";
    let points = 0;
    for(let i = 0; i < hash_set.length; i++){
        let current_points = 0;
        let char_arr = [];

        for(let x = 0; x < hash_set[i].length; x++){
            if (hash_set[i][x] == current_hash[x]){
                current_points += 5; //? Sync node boost constant with backend
            }
            char_arr.push(hash_set[i][x]);
        }

        if (current_points == 0){
            for(let x = 0; x < char_arr.length; x++){
                if (char_arr.includes(current_hash[x])){
                    let start_index = char_arr.indexOf(current_hash[x]);
                    char_arr.splice(start_index, 1);
                    current_points += 2.5;
                }
            }
        }

        if (current_points > points){
            points = current_points;
            compared_hash = hash_set[i];
        }
    }   

    return compared_hash
}

//! !!!!! - SYNC THIS BACKEND - !!!!!
export const calculateActiveBoost = (hash: string) => {
    const hash_set = getComparedHash(
        hash, "active"
    );
    const partner_hashes = [];
    let points = 0;
    let exclude = [];
    for(let x = 0; x < hash_set.length / 2; x++){
        partner_hashes.push(hash.substring(x * 2, x * 2 + 2));
        if (hash.substring(x * 2, x * 2 + 2) == hash_set.substring(x * 2, x * 2 + 2)){
            points += 10;
            exclude.push(x);
        }
    }

    for(let x = 0; x <  partner_hashes.length; x++){
        if (exclude.includes(x) == false){
            const current_item_index = partner_hashes[x];
            let first_letter_no_match: boolean = true;
            let second_letter_no_match: boolean = true;
            let char_arr = [];

            //? load characters from hash
            for(let i = 0; i < hash_set.length; i++){
                char_arr.push(hash_set[i]);
            }
            
            //? compare selected ItemIndex to hash character one by one
            for(let k =0; k < current_item_index.length; k++){
                for(let i = 0; i < char_arr.length; i++){
                    if (current_item_index[k] == char_arr[i]){
                        let start_index = char_arr.indexOf(current_item_index[k]);
                        char_arr.splice(start_index, 1);
                        points += 2.5;

                        if (k == 0) {
                            first_letter_no_match = false;
                        }
                        else {
                            second_letter_no_match = false;
                        }
                        break;
                    }
                }
            }
            if (first_letter_no_match){
                points += 1;
            }
            if (second_letter_no_match){
                points += 1;
            }
        }
    }

    return  (() => {
        let not_full: boolean = false;
        for(let i = 0; i < hash.length; i++){
            if(hash[i] == "-"){
                not_full = true;
            }
        }
        return not_full == false
    })() ? points : 1;
};

//! !!!!! - SYNC THIS BACKEND - !!!!!
export const  calculatePassiveBoost = (hash: string) => {
    const passive_hash_set = store.getState().queryState.value.misc.passive_hashes ;
    let points = 0;

    for(let i = 0; i < passive_hash_set.length; i++){
        let current_points = 0;
        for(let x = 0; x < passive_hash_set[i].length; x++){
            if (passive_hash_set[i][x] == hash[x]){
                current_points += 5; //? Sync node boost constant with backend
            }
        }
        if (current_points > points){
            points = current_points;
        }
    }

    if (points == 0) {
        points = 1;
    }
    return points;
}
