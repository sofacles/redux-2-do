import React from 'react';
import TaskList from './TaskList';

const TASK_STATUSES = ['not started', 'in progress', 'done'];

class TaskPage extends React.Component {

  renderTaskLists() {
    const { tasks } = this.props;
    const theLists = TASK_STATUSES.map(status => {
      return (<TaskList status={status} tasks={tasks.filter(t => t.status === status)} />)
    });
    return theLists;
  }
 

  render(){
    return (
      <div className="tasks">
        <div className="task-lists" >
          {this.renderTaskLists()}
        </div>
      </div>
    );
  }
  
};

export default TaskPage;