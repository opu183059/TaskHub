"use client"
import ProjectsComponent from '@/components/ProjectsComponent';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();
const Projects = () => {
    return (
        <QueryClientProvider client={queryClient}>
            <ProjectsComponent />
        </QueryClientProvider>
    );
};

export default Projects;
