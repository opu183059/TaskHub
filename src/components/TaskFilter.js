import React, { useEffect, useState } from 'react';
import { Table, Input, Select } from 'antd';
import useTaskStore from '@/store/useTaskStore';
import { GrPowerReset } from "react-icons/gr";

const { Option } = Select;

const TaskFilter = () => {
    const tasks = useTaskStore(state => state.tasks);

    const [filteredTasks, setFilteredTasks] = useState([]);
    const [searchText, setSearchText] = useState('');
    const [filterStatus, setFilterStatus] = useState(null);
    const [filterAssignedTo, setFilterAssignedTo] = useState(null);

    useEffect(() => {
        setFilteredTasks(tasks)
    }, [tasks])

    console.log(filteredTasks);
    const handleSearchChange = (e) => {
        const value = e.target.value;
        setSearchText(value);
        filterTasks(value, filterStatus, filterAssignedTo);
    };

    const handleStatusChange = (value) => {
        setFilterStatus(value);
        filterTasks(searchText, value, filterAssignedTo);
    };

    const handleAssignedChange = (value) => {
        setFilterAssignedTo(value);
        filterTasks(searchText, filterStatus, value);
    };

    const filterTasks = (search, status, assignedTo) => {
        let result = tasks;
        if (search) {
            result = result.filter(task =>
                task.name.toLowerCase().includes(search.toLowerCase()) ||
                task.description.toLowerCase().includes(search.toLowerCase())
            );
        }
        if (status) {
            result = result.filter(task => task.status === status);
        }
        if (assignedTo) {
            result = result.filter(task => task.assigned_to.includes(assignedTo));
        }
        setFilteredTasks(result);
    };

    return (
        <div>
            <div className='flex flex-col md:flex-row gap-4 items-center mb-2'>
                <div className='w-full md:w-auto flex gap-4 items-center'>
                    <Input
                        placeholder="Search tasks..."
                        value={searchText}
                        onChange={handleSearchChange}
                        style={{ width: 180 }}
                    />
                    <Select
                        placeholder="Filter by status"
                        allowClear
                        onChange={handleStatusChange}
                        style={{ width: 180 }}
                    >
                        <Option value="inProgress">In Progress</Option>
                        <Option value="todo">To Do</Option>
                        <Option value="done">Done</Option>
                    </Select>
                </div>
                <div className='w-full md:w-auto flex gap-4 items-center'>
                    <Select
                        placeholder="Filter by member"
                        allowClear
                        onChange={handleAssignedChange}
                        style={{ width: 180 }}
                    >
                        {tasks.flatMap(task => task.assigned_to).filter((value, index, self) => self.indexOf(value) === index).map(member => (
                            <Option key={member} value={member}>{member}</Option>
                        ))}
                    </Select>
                    <button onClick={() => (
                        setSearchText(""),
                        setFilterStatus(""),
                        setFilterAssignedTo(""),
                        filterTasks('', '', '')
                    )} className='p-2'>
                        <GrPowerReset className='text-xl text-violet-600' />
                    </button>
                </div>
            </div>
            <Table
                dataSource={filteredTasks}
                style={{ overflow: "auto" }}
                columns={[
                    { title: 'Name', dataIndex: 'name', key: 'name' },
                    { title: 'Description', dataIndex: 'description', key: 'description' },
                    { title: 'Deadline', dataIndex: 'deadline', key: 'deadline' },
                    { title: 'Status', dataIndex: 'status', key: 'status' },
                    { title: 'Assigned To', dataIndex: 'assigned_to', key: 'assigned_to', render: assigned_to => assigned_to.join(', ') },
                ]}
            />
        </div>
    );
};

export default TaskFilter;
