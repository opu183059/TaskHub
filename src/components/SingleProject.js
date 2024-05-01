"use client"
import { useParams } from 'next/navigation';
import React, { useState } from 'react';
import { useQuery } from 'react-query';
import TaskBoard from './TaskBoard';
import { Button, Modal } from 'antd';
import AddTaskForm from './Forms/AddTaskForm';

const SingleProject = () => {
    const params = useParams()
    const [addModalOpen, setAddModalOpen] = useState(false)

    const fetchProject = (projectId) => {
        return fetch(`/api/projects/${projectId}`)
            .then(res => {
                if (!res.ok) {
                    throw new Error('Network response was not ok');
                }
                return res.json();
            });
    };

    const { isLoading, error, data } = useQuery(['project', params.id], () => fetchProject(params.id), {
        enabled: !!params.id  // This disables the query until projectId is truthy
    });

    if (isLoading) return 'Loading...';
    if (error) return 'An error occurred: ' + error.message;

    return (
        <>
            <div>
                <div className='mt-10 flex justify-between'>
                    <div className=''>
                        <h1 className='font-medium text-xl mb-3'>{data.name}</h1>
                        <p className={`${data.status == "In Progress" ? "text-orange-600" : "text-violet-600"} uppercase font-semibold`}>{data.status}</p>
                    </div>
                    <Button onClick={() => { setAddModalOpen(true) }}>Add Task</Button>
                </div>
                <div>
                    <TaskBoard />
                </div>
            </div>
            {/* add task modal */}
            <Modal
                title="Add Task"
                centered
                open={addModalOpen}
                onOk={() => setAddModalOpen(false)}
                onCancel={() => setAddModalOpen(false)}
                footer={null}
            >
                <AddTaskForm setAddModalOpen={setAddModalOpen} />
            </Modal>
        </>
    );
};

export default SingleProject;