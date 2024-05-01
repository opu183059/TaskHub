// components/Category.js

import { useDrop } from 'react-dnd';
import DraggableTask from './DraggableTask';


const Category = ({ tasks, onDrop, category }) => {
    const [, drop] = useDrop(() => ({
        accept: 'task',
        drop: (item) => onDrop(item, category),
    }));

    return (
        <div ref={drop} className={`${category === "todo" && "bg-orange-100"} ${category === "inProgress" && "bg-yellow-100"} ${category === "done" && "bg-green-100"} p-2 md:p-5 rounded-lg min-h-96`}>
            <h2>{category}</h2>
            {tasks.map((task) => (
                <DraggableTask key={task.id} task={task} />
            ))}
        </div>
    );
};

export default Category;
