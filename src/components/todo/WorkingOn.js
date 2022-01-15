import { DeleteOutlined, LeftOutlined, RightOutlined } from "@ant-design/icons";
import { Popconfirm, Button, Badge } from "antd";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteTodo, moveForward, moveBackward } from "./todosSlice";

function WorkingOn() {
    const { todos } = useSelector((state) => state.todos);
    const dispatch = useDispatch();
    const items = [];
    todos.map((todo) => todo.stage === 2 && items.push(todo));
    
    return (
        <>
            <h2 className="working-on">
                Working On
                {items.length === 0 ? (
                    <span className="tasks-numbers">0</span>
                ) : (
                    <span className="tasks-numbers">{items.length} </span>
                )}
            </h2>
            <ul>
                {todos.length
                    ? todos.map((todo, index) => {
                        if (todo.stage === 2) {
                            return (
                                <li key={index}>
                                    <Button onClick={() => dispatch(moveBackward(todo.id))}>
                                        <LeftOutlined />
                                    </Button>
                                    <span>{todo.name}</span>
                                    <Button onClick={() => dispatch(moveForward(todo.id))}>
                                        <RightOutlined />
                                    </Button>
                                    <Popconfirm
                                        title="Are you sure to delete this task?"
                                        onConfirm={() => dispatch(deleteTodo(todo.id))}
                                        okText="Yes"
                                        cancelText="No"
                                    >
                                        <Button className="delete">
                                            <DeleteOutlined />
                                        </Button>
                                    </Popconfirm>
                                </li>
                            );
                        }
                    })
                    : null}
            </ul>
        </>
    );
}

export default WorkingOn;
