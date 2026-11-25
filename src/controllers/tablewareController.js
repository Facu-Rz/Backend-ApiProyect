import { listTableware, findTablewareById, createTableware } from "../services/tablewareService.js";

export const getTableware = async (req, res) => {
    try {
        const tablewares = await listTableware();
        res.json(tablewares);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

export const getTablewareById = async (req, res) => {
    try {
        const tablewareId = req.params.id;
        const tableware = await findTablewareById(tablewareId);

        if (!tableware) {
            return res.status(404).json({ error: "Vajilla no encontrada" });
        }

        res.json(tableware);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

export const postTableware = async (req, res) => {
    try {
        const { title, price } = req.body ?? {};
        if ( typeof title !== "string" || !title.trim() || 
            typeof price !== "number" || price <= 0) {
            return res.status(400).json({ error: "Datos inválidos" });
    }

    const tableware = await createTableware({ title, price });
    res.status(201).json(tableware);

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}