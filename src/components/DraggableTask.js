// components/DraggableTask.js

import { useDrag } from 'react-dnd';

const DraggableTask = ({ task }) => {
    const [{ isDragging }, drag] = useDrag(() => ({
        type: 'task',
        item: task,
        collect: monitor => ({
            isDragging: !!monitor.isDragging(),
        }),
    }));

    return (
        <div
            ref={drag}
            style={{
                opacity: isDragging ? 0.5 : 1,
                padding: '16px',
                marginBottom: '8px',
                backgroundColor: '#fff',
                border: '1px solid lightgrey',
                borderRadius: '4px',
                cursor: 'move',
            }}
        >
            <strong>{task.name}</strong>
            <p>{task.description}</p>
        </div>
    );
};

export default DraggableTask;
