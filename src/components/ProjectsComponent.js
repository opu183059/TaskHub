"use client"
import { useQuery } from "react-query";
import ProjectCard from "./Cards/ProjectCard";
import LoadingSpinner from "./LoadingSpinner";

const ProjectsComponent = () => {
    const { isLoading, error, data } = useQuery('projects', () =>
        fetch('api/projects').then(res =>
            res.json()
        )
    );

    if (isLoading) return (<LoadingSpinner />);
    if (error) return 'An error occurred: ' + error.message;

    console.log(data);

    return (
        <div className="mt-10">
            <h3 className="font-semibold text-xl mb-5">On-going Projects</h3>
            {data.ProjectsData.map((project) => (
                <ProjectCard key={project.id} project={project} />
            ))}
        </div>
    );
};

export default ProjectsComponent;