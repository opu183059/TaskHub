"use client"
import React from 'react';
import useTaskStore from '@/store/useTaskStore';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import Category from '@/components/Category';

const TaskBoard = () => {
    // const { tasks, moveTask } = useTaskStore();
    const tasks = useTaskStore(state => state.tasks);
    const moveTask = useTaskStore(state => state.moveTask);

    const filterTasksByStatus = (status) => tasks.filter(task => task.status === status);


    return (
        <DndProvider backend={HTML5Backend}>
            <div className='grid grid-cols-3 gap-4'>
                {['todo', 'inProgress', 'done'].map((status) => (
                    <Category
                        key={status}
                        category={status}
                        tasks={filterTasksByStatus(status)}
                        onDrop={(item, newStatus) => moveTask(item.id, newStatus)}
                    />
                ))}
            </div>
        </DndProvider>
    );
};

export default TaskBoard;