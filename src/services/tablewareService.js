import { getAllTableware, getTablewareById } from "../models/tablewareModel.js";

export const listTableware = async () => {
    return await getAllTableware();
}

export const findTablewareById = async (id) => {
    return await getTablewareById(id);
}