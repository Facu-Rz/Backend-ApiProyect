import { collection, getDocs, doc, getDoc } from "firebase/firestore";
import { db } from "../config/firebase.js";

const tablewareCollection = collection(db, "tableware");

export const getAllTableware = async () => {
    const snapshot = await getDocs(tablewareCollection);
    return snapshot.docs.map((item) => ({ ...item.data(), id: item.id }));
};

export const getTablewareById = async (id) => {
    const reference = doc(db, "tableware", id);
    const snapshot = await getDoc(reference);

    if (!snapshot.exists()) {
        return null;
    }

    return { ...snapshot.data(), id: snapshot.id };
}

export const createTableware = async (data) => {
    const reference = await addDoc(tablewareCollection, data);

    return { ...data, id: reference.id };
}