import { Button, Space } from 'antd';
import React from 'react';

const ProjectCard = ({ project }) => {
    return (
        <div>
            <h1>{project.name}</h1>
            <Space>
                <Button onClick={() => router.push(`/projects/${project.id}`)}>View</Button>
                <Button>Edit</Button>
                <Button danger>Delete</Button>
            </Space>
        </div>
    );
};

export default ProjectCard;