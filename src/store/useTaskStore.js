import create from 'zustand';
import { devtools } from 'zustand/middleware';

const useTaskStore = create(devtools((set) => ({
  tasks: [],

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
