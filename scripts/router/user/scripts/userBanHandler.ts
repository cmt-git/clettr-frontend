import { link_messageBoxShow } from "../../../../component/messagebox-component/messagebox-component";
import { axiosInstance } from "../../axios-instance";

export async function UserBan(_data: { username: string }) {
  return await axiosInstance.post("/user/enforcement", _data).then((res) => {
    link_messageBoxShow(res.data.message, res.data.success);
    return res.data;
  });
}
