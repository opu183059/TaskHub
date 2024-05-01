"use client"
import SingleProject from '@/components/SingleProject';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();

const ProjectsDetails = () => {
    return (
        <QueryClientProvider client={queryClient}>
            <SingleProject />
        </QueryClientProvider>
    );
};

export default ProjectsDetails;