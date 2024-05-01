import { NextResponse } from "next/server";
import { ProjectsData } from "../../../../utils/DataBase";

export async function GET(req, res) {
    const url = new URL(req.url, `http://${req.headers.host}`);
    const id = url.pathname.split('/').pop();

    const project = ProjectsData.find(p => p.id === parseInt(id, 10));

    if (project) {
        return NextResponse.json(project);
    } else {
        return new NextResponse('Project not found', { status: 404 });
    }
}
