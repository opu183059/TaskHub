import React, { useEffect } from 'react';
import { Form, Input, Button, DatePicker, Select } from 'antd';
import useTaskStore from '@/store/useTaskStore';
import moment from 'moment';

const AddTaskForm = ({ setAddModalOpen, value, mode }) => {
    const [form] = Form.useForm();
    const { addTask, updateTask } = useTaskStore();

    useEffect(() => {
        if (mode === 'edit' && value) {
            form.setFieldsValue({
                ...value,
                deadline: value.deadline ? moment(value.deadline) : null,
            });
        }
    }, [form, mode, value]);

    const options = [
        {
            value: 'Alice Johnson',
            label: 'Alice Johnson',
        },
        {
            value: 'Bob Smith',
            label: 'Bob Smith',
        },
        {
            value: 'Charlie Davis',
            label: 'Charlie Davis',
        },
        {
            value: 'Erin Smith',
            label: 'Erin Smith',
        },
        {
            value: 'Diana Reed',
            label: 'Diana Reed',
        },
    ];

    const handleChange = (value) => {
        console.log(`selected ${value}`);
    };

    const onFinish = (values) => {
        const formattedValues = {
            ...values,
            id: Date.now().toString(),
            deadline: values.deadline ? values.deadline.format('YYYY-MM-DD') : undefined,
            assigned_to: values.assigned_to
        };
        mode === 'add' ? addTask(formattedValues) : updateTask(value.id, formattedValues);
        setAddModalOpen(false);
        form.resetFields();
    };

    return (
        <Form
            form={form}
            name="task_form"
            onFinish={onFinish}
            layout="vertical"
            initialValues={{
                status: 'To Do', // default status
            }}
        >
            <Form.Item
                name="name"
                label="Task Name"
                rules={[{ required: true, message: 'Please input the task name!' }]}
            >
                <Input placeholder="Enter task name" />
            </Form.Item>

            <Form.Item
                name="description"
                label="Description"
                rules={[{ required: true, message: 'Please input the description!' }]}
            >
                <Input.TextArea rows={4} placeholder="Enter description" />
            </Form.Item>

            <Form.Item
                name="deadline"
                label="Deadline"
                rules={[{ required: true, message: 'Please select the deadline!' }]}
            >
                <DatePicker style={{ width: '100%' }} />
            </Form.Item>

            <Form.Item
                name="status"
                label="Status"
                rules={[{ required: true, message: 'Please select the status!' }]}
            >
                <Select placeholder="Select a status">
                    <Select.Option value="todo">To Do</Select.Option>
                    <Select.Option value="inProgress">In Progress</Select.Option>
                    <Select.Option value="done">Done</Select.Option>
                </Select>
            </Form.Item>
            <Form.Item
                name="assigned_to"
                label="Assign"
                rules={[{ required: true, message: 'Please assign members' }]}
            >
                <Select
                    mode="multiple"
                    allowClear
                    style={{
                        width: '100%',
                    }}
                    placeholder="Please select"
                    onChange={handleChange}
                    options={options}
                />
            </Form.Item>

            <Form.Item>
                <Button type="primary" htmlType="submit">
                    Submit
                </Button>
            </Form.Item>
        </Form>
    );
};

export default AddTaskForm;
