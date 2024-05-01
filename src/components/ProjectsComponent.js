"use client"

import { Button, Card, Space } from "antd";
import { useQuery } from "react-query";
import ProjectCard from "./Cards/ProjectCard";

const ProjectsComponent = () => {
    const { isLoading, error, data } = useQuery('projects', () =>
        fetch('api/projects').then(res =>
            res.json()
        )
    );

    if (isLoading) return 'Loading...';

    if (error) return 'An error occurred: ' + error.message;

    console.log(data);

    return (
        <div className="space-y-4">
            {data.ProjectsData.map((project) => (
                <ProjectCard key={project.id} project={project} />
            ))}
        </div>
    );
};

export default ProjectsComponent;