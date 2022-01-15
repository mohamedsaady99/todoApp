import { Popconfirm, Button } from 'antd';
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { deleteTodo, moveForward } from './todosSlice';
import { RightOutlined, LeftOutlined, DeleteOutlined } from '@ant-design/icons'
function BackLog() {
    const { todos } = useSelector(state => state.todos);
    const dispatch = useDispatch();
    const items = [];
    todos.map((todo) => todo.stage === 0 && items.push(todo));

    return (
        <>
            <h2 className='backLog'>BackLog
                {items.length === 0 ? (
                    <span className="tasks-numbers">0</span>
                ) : (
                    <span className="tasks-numbers">{items.length} </span>
                )}
            </h2>
            <ul>
                {todos.length ?
                    todos.map((todo, index) => {
                        if (todo.stage === 0)
                            return (
                                <li key={index} >
                                    <Button disabled><LeftOutlined /></Button>
                                    <span>{todo.name}</span>
                                    <Button onClick={() => dispatch(moveForward(todo.id))}>< RightOutlined /></Button>
                                    <Popconfirm
                                        title="Are you sure to delete this task?"
                                        onConfirm={() => dispatch(deleteTodo(todo.id))}
                                        okText="Yes"
                                        cancelText="No"
                                    >
                                        <Button className='delete' ><DeleteOutlined /></Button>
                                    </Popconfirm>
                                </li>
                            )
                    }
                    )
                    : null
                }
            </ul>
        </>
    )
}

export default BackLog
