import { ProjectsData } from "@/utils/DataBase";

export default function handler(req, res) {
    const { id } = req.query;
    const project = ProjectsData.find(p => p.id === parseInt(id));
    if (project) {
        res.status(200).json(project);
    } else {
        res.status(404).json({ message: "Project not found" });
    }
}
