"use client"
import { useParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import TaskBoard from './TaskBoard';
import { Button, Modal } from 'antd';
import AddTaskForm from './Forms/AddTaskForm';
import useTaskStore from '@/store/useTaskStore';

const SingleProject = () => {
    const params = useParams();
    const [addModalOpen, setAddModalOpen] = useState(false);
    const { addTask, clearTasks } = useTaskStore();

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
        enabled: !!params.id
    });

    useEffect(() => {
        clearTasks()
        if (data) {
            data.tasks.forEach(task => {
                addTask(task);
            });
        }
    }, [data]);

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
                    <Button className='bg-violet-600 border-2 border-violet-600 hover:bg-violet-900 text-white' onClick={() => { setAddModalOpen(true) }}>Add Task</Button>
                </div>
                <TaskBoard />
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