import React from 'react';
import Task from './Task';

const TaskList = props => {
    return (
        <div className="task-list">
            <h2 className="task-list-title">
                <strong>{props.status}</strong>
            </h2>
            {props.tasks.map(task => {
                   return <Task task={task} key={task.id} />
                })}
        </div>
    );
};

export default TaskList;