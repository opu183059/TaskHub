// components/Category.js

import { useDrop } from 'react-dnd';
import DraggableTask from './DraggableTask';


const Category = ({ tasks, onDrop, category }) => {
    const [, drop] = useDrop(() => ({
        accept: 'task',
        drop: (item) => onDrop(item, category),
    }));

    return (
        <div ref={drop} style={{
            padding: '16px',
            width: '300px',
            minHeight: '400px',
            backgroundColor: '#f0f0f0',
            borderRadius: '5px',
            margin: '0 10px'
        }}>
            <h2>{category}</h2>
            {tasks.map((task) => (
                <DraggableTask key={task.id} task={task} />
            ))}
        </div>
    );
};

export default Category;
