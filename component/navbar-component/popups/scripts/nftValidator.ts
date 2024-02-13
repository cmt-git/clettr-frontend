import { link_messageBoxShow } from "../../../messagebox-component/messagebox-component";

let nft_traits = [
  "pink",
  "purple",
  "blue",
  "teal",
  "lime",
  "green",
  "yellow",
  "orange",
  "red",
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  "striped",
  "spotted",
  "zigzag",
  "checkered",
  "cross",
  "sharp",
  "1",
  "2",
  "3",
  "4",
  "5",
];

export function nftInfoValidation(_data: {
  nft_type: string;
  nft_traits: string;
  nft_hash: string;
  nft_stars: string;
  nft_req: string;
  nft_owner_username: string;
  nft_token_id: string;
}) {
  if (["passive", "active"].includes(_data.nft_type.toLowerCase()) == false) {
    link_messageBoxShow("NFT Type must only be passive or active.");
    return false;
  } else if (
    (_data.nft_type.toLowerCase() == "active" &&
      _data.nft_traits.split("-").length != 3) ||
    (_data.nft_type.toLowerCase() == "passive" &&
      _data.nft_traits.split("-").length != 1) ||
    _data.nft_traits
      .split("-")
      .some((value1) =>
        nft_traits.some(
          (value2) => value1.toLowerCase() == value2.toLowerCase()
        )
      ) == false
  ) {
    link_messageBoxShow("NFT Traits are not valid.");
    return false;
  } else if (
    (_data.nft_type.toLowerCase() == "active" && _data.nft_hash.length != 2) ||
    (_data.nft_type.toLowerCase() == "passive" && _data.nft_hash.length != 10)
  ) {
    link_messageBoxShow(
      "NFT Hash length is set to 2 if active, 10 if passive."
    );
    return false;
  } else if (
    /^\d+$/.test(_data.nft_stars) == false ||
    Number.parseInt(_data.nft_stars) > 5
  ) {
    link_messageBoxShow("NFT Stars is not valid. Max of 5");
    return false;
  } else if (
    _data.nft_type == "passive" &&
    _data.nft_req
      .split("-")
      .some((value1) =>
        nft_traits.some(
          (value2) => value1.toLowerCase() == value2.toLowerCase()
        )
      ) == false
  ) {
    link_messageBoxShow("NFT Requirement is not valid.");
    return false;
  } else if (Number.isInteger(_data.nft_token_id)) {
    link_messageBoxShow("NFT Token ID is not valid.");
    return false;
  } else if (
    !_data.nft_owner_username ||
    _data.nft_owner_username.length > 16
  ) {
    link_messageBoxShow("NFT Owner username is not valid or too long.");
    return false;
  }
  return true;
}
