import create from 'zustand';
import { devtools } from 'zustand/middleware';

const useTaskStore = create(devtools((set) => ({
  tasks: [
    { id: '1', name: 'Task 1', description: 'Description of Task 1', status: 'todo' },
    { id: '2', name: 'Task 2', description: 'Description of Task 2', status: 'inProgress' },
    { id: '3', name: 'Task 3', description: 'Description of Task 3', status: 'done' },
  ],

  addTask: (task) => set((state) => ({
    tasks: [...state.tasks, task]
  })),

  updateTask: (id, newDetails) => set((state) => ({
    tasks: state.tasks.map(task => task.id === id ? { ...task, ...newDetails } : task)
  })),

  removeTask: (id) => set((state) => ({
    tasks: state.tasks.filter(task => task.id !== id)
  })),

  moveTask: (id, newStatus) => set((state) => ({
    tasks: state.tasks.map(task => task.id === id ? { ...task, status: newStatus } : task)
  })),

})));

export default useTaskStore;