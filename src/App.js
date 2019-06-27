import React, { Component } from 'react';
import TaskPage from './components/TaskPage';
import { connect } from 'react-redux';
import './App.css';


class App extends Component {

  render() {
    return (
      <div className="App">
        <TaskPage tasks={this.props.tasks} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    tasks: state.tasks
  };
}

export default connect(mapStateToProps)(App);

