import React, { useState } from 'react'
import { Form, Input, Button } from 'antd';
import { addTodo } from './todosSlice'
import { useDispatch } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';

function AddTodo() {
    const dispatch = useDispatch()
    const [todo, setTodo] = useState({
        name: '',
        stage: 0,
        id: 1
    });
    const [form] = Form.useForm();

    const onFinish = () => {
        dispatch(addTodo(todo))
        form.resetFields()
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <div className='add-todo-form'>
            <Form
                form={form}
                name="addTodo"
                initialValues={{ remember: true, }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="on"
            >
                <Input.Group compact>
                    <Form.Item
                        name="task"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your task!',
                            },
                        ]}
                    >
                        <Input
                            className='task'
                            placeholder='Type Your Task'
                            value={todo.name}
                            onChange={
                                (e) => setTodo({
                                    name: e.target.value,
                                    stage: 0,
                                    id: nanoid()
                                })}
                        />
                    </Form.Item>
                    <Form.Item >
                        <Button type="primary" danger htmlType="submit">
                            Add Task
                        </Button>
                    </Form.Item>
                </Input.Group>

            </Form>
        </div>
    );
}

export default AddTodo
