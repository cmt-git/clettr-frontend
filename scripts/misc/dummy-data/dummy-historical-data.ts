import { simulatorPrice } from "../../router/nfts/nfts-request";

export async function dummyHistoricalData(_page: number) {
  return await (
    await simulatorPrice(_page)
  ).data;
  // return [
  //   {
  //     time: 1653894600000,
  //     open: "0.40190000",
  //     high: "0.40270000",
  //     low: "0.40170000",
  //     close: "0.40230000",
  //   },
  //   {
  //     time: 1654239900000,
  //     open: "0.40640000",
  //     high: "0.40640000",
  //     low: "0.40520000",
  //     close: "0.40590000",
  //   },
  // ];
}
