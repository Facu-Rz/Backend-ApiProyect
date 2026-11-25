import { listTableware, findTablewareById } from "../services/tablewareService.js";

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