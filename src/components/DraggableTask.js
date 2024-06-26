import useTaskStore from '@/store/useTaskStore';
import { Avatar, Modal, Tooltip } from 'antd';
import { useDrag } from 'react-dnd';
import { FaTrashCan } from "react-icons/fa6";
import { MdEditSquare } from "react-icons/md";
import AddTaskForm from './Forms/AddTaskForm';
import { useState } from 'react';

const DraggableTask = ({ task }) => {
    const { removeTask } = useTaskStore()
    const [editModalOpen, setEditModalOpen] = useState(false);

    const [{ isDragging }, drag] = useDrag(() => ({
        type: 'task',
        item: task,
        collect: monitor => ({
            isDragging: !!monitor.isDragging(),
        }),
    }));

    return (
        <>
            <div
                ref={drag}
                className='shadow-md p-4 rounded-lg bg-gray-50 cursor-move my-4 relative'
            >
                <div className='text-sm border-b mb-2 pb-2 space-y-1'>
                    <h3 className='font-semibold text-base mb-2'>{task.name}</h3>
                    <p>{task.description}</p>
                    <p>Deadline:<span className='ml-1 text-violet-600 font-semibold'>{task.deadline}</span></p>
                </div>
                <MdEditSquare onClick={() => (setEditModalOpen(true))} className='text-blue-600 cursor-pointer text-xl absolute top-2 right-2' />
                <div className='flex items-center justify-between'>
                    <Avatar.Group maxCount={4}>
                        {task.assigned_to.map((person) => (
                            <Tooltip key={person} title={person} placement="top">
                                <Avatar className='bg-orange-500 cursor-pointer'
                                >{person[0]}</Avatar>
                            </Tooltip>
                        ))}
                    </Avatar.Group>
                    <button className='p-2 cursor-pointer w-auto' onClick={() => removeTask(task.id)} >
                        <FaTrashCan className='text-red-500 text-xl hover:text-red-600' />
                    </button>
                </div>
            </div>

            {/* Edit Modal */}
            <Modal
                title="Add Task"
                centered
                open={editModalOpen}
                onOk={() => setEditModalOpen(false)}
                onCancel={() => setEditModalOpen(false)}
                footer={null}
            >
                <AddTaskForm setAddModalOpen={setEditModalOpen} value={task} mode='edit' />
            </Modal>
        </>
    );
};

export default DraggableTask;
