import { getAllTableware, getTablewareById, createTableware, deleteTablewareById } from "../models/tablewareModel.js";

export const listTableware = async () => {
    return await getAllTableware();
}

export const findTablewareById = async (id) => {
    return await getTablewareById(id);
}

export const addTableware = async (data) => {
    return await createTableware(data);
}

export const deleteTableware = async (id) => {
    return await deleteTablewareById(id);
}