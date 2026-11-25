import { getAllTableware, getTablewareById, createTableware } from "../models/tablewareModel.js";

export const listTableware = async () => {
    return await getAllTableware();
}

export const findTablewareById = async (id) => {
    return await getTablewareById(id);
}

export const addTableware = async (data) => {
    return await createTableware(data);
}