import React from 'react';
import TaskList from './TaskList';

const TASK_STATUSES = ['not started', 'in progress', 'done'];

class TaskPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showNewCardForm: false,
      title: '',
      description: '',
    };
  }

  onTitleChange = (e) => {
    //redux  book says this kind of fxn declaration "ensures that the value of this will be correct"
    // I guess the reason that not all the fxns that use 'this' are of this form is that you can only
    // mess up 'this' when your fxn takes an argument (of type whatever you pass for input update events?).
    this.setState({
      title: e.target.value
    });
  };

  onDescriptionChange = (e) => {
    this.setState({
      description: e.target.value
    });
  };

  resetForm() {
    this.setState({
      showNewCardForm: false,
      description: '',
      title: '',
    });
  }

  onCreateTask = (e) => {
    e.preventDefault();
    this.props.onCreateTask({
      title: this.state.title,
      description: this.state.description,
    });
    this.resetForm();
  };

  toggleForm = () => {
    this.setState({
      showNewCardForm: !this.state.showNewCardForm,
    });
  };

  renderTaskLists() {
    const { tasks } = this.props;
    const theLists = TASK_STATUSES.map((status, index) => {
      return (<TaskList status={status} tasks={tasks.filter(t => t.status === status)} key={index}/>)
    });
    return theLists;
  }
 

  render(){
    return (
      <div className="tasks">
        <div className="task-list-header">
          <button className="toggle-button" onClick={this.toggleForm}>
            New Task
          </button>
        </div>
        { this.state.showNewCardForm &&
          <form onSubmit={this.onCreateTask} >
            <input 
              className="full-width" 
              onChange={this.onTitleChange} 
              value={this.state.title} 
              type="text" 
              placeholder="title" />
            <input 
              className="full-width"
              onChange={this.onDescriptionChange} 
              value={this.state.description} 
              type="text" 
              placeholder="description" />
            <button type="submit" >submit</button>
          </form>
        }
        <div className="task-lists" >
          {this.renderTaskLists()}
        </div>
      </div>
    );
  }
  
};

export default TaskPage;