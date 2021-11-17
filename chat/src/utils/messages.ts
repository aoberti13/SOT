import moment from "moment";
import { Data } from "../models/interfaces";

export const fromatMessages = (data: Data) => {
    const { username, text } = data;
    return {
        username,
        text,
        time: moment().format('h:mm a')
    };
};