import { link_messageBoxShow } from "../../../component/messagebox-component/messagebox-component";
import { axiosInstance } from "../axios-instance";

export const playMain = async (json: any) => {
    let data = null;
    await axiosInstance.post('/play/', {
        node_id: json.node_id
    }).then(res => {
        link_messageBoxShow(res.data["message"], res.data["success"]);

        data = res.data;
    });

    return data;
}