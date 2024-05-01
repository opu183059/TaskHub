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
        // <DndProvider backend={HTML5Backend}>
        //     <div style={{ display: 'flex', justifyContent: 'space-around', padding: 20 }}>
        //         <div>
        //             <h3>To Do</h3>
        //             {tasks.filter(task => task.status === 'todo').map((task, index) => (
        //                 <Task key={task.id} task={task} index={index} moveTask={moveTask} />
        //             ))}
        //         </div>
        //         <div>
        //             <h3>In Progress</h3>
        //             {tasks.filter(task => task.status === 'inProgress').map((task, index) => (
        //                 <Task key={task.id} task={task} index={index} moveTask={moveTask} />
        //             ))}
        //         </div>
        //         <div>
        //             <h3>Done</h3>
        //             {tasks.filter(task => task.status === 'done').map((task, index) => (
        //                 <Task key={task.id} task={task} index={index} moveTask={moveTask} />
        //             ))}
        //         </div>
        //     </div>
        // </DndProvider>
        <DndProvider backend={HTML5Backend}>
            <div style={{ display: 'flex', justifyContent: 'center', padding: '20px' }}>
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
