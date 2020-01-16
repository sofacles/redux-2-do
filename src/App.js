import React, { Component } from "react";
import TaskPage from "./components/TaskPage";
import { connect } from "react-redux";
import { addTask } from "./store/taskActions";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.createTask = this.createTask.bind(this);
  }
  createTask(task) {
    this.props.addTask(task);
  }
  render() {
    return (
      <div className="App">
        <TaskPage tasks={this.props.tasks} onCreateTask={this.createTask} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    tasks: state.tasks
  };
}


export default connect(mapStateToProps, {addTask})(App);
