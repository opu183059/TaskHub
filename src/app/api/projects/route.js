import { ProjectsData } from "@/utils/DataBase"
import { NextResponse } from "next/server"

export const GET = () => {
    return NextResponse.json({ ProjectsData })
}