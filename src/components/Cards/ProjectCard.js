import { Button } from 'antd';
import Link from 'next/link';
import React from 'react';

const ProjectCard = ({ project }) => {
    return (
        <div className='my-4 border shadow-md rounded-xl cursor-pointer hover:bg-violet-50 p-6 flex items-center justify-between'>
            <div>
                <h1 className='font-medium mb-3'>{project.name}</h1>
                <p className={`${project.status == "In Progress" ? "text-orange-600" : "text-violet-600"} uppercase font-semibold text-sm`}>{project.status}</p>
                <p className='text-sm'>Currently {project.tasks.length} task available</p>
                <p className='text-sm'>Member count: {project.team_members.length}</p>
            </div>
            <div className='flex flex-col gap-2'>
                <Button><Link href={`/projects/${project.id}`}>View</Link></Button>
                <Button>Edit</Button>
                <Button danger>Delete</Button>
            </div>
        </div>
    );
};

export default ProjectCard;