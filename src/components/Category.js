import { useDrop } from 'react-dnd';
import DraggableTask from './DraggableTask';

const Category = ({ tasks, onDrop, category }) => {
    const [, drop] = useDrop(() => ({
        accept: 'task',
        drop: (item) => onDrop(item, category),
    }));

    return (
        <div ref={drop} className={`${category === "todo" && "bg-orange-100"} ${category === "inProgress" && "bg-yellow-100"} ${category === "done" && "bg-green-100"} rounded-lg min-h-20 md:min-h-screen`}>
            <h2 className={`${category === "todo" && "bg-orange-600"} ${category === "inProgress" && "bg-yellow-600"} ${category === "done" && "bg-green-600"} p-2 md:p-5 rounded-t-lg uppercase text-white`}>{category === "todo" && "To D0"}{category === "inProgress" && "In Progress"}{category === "done" && "Done"}</h2>
            <div className='px-2 md:px-5 py-2'>
                {tasks.map((task) => (
                    <DraggableTask key={task.id} task={task} />
                ))}
            </div>
        </div>
    );
};

export default Category;
