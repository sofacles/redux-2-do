import React from 'react';
import TaskPage from './components/TaskPage';
import './App.css';

function App() {

  const allTasks = [{
    title: 'Pull Weeds',
    description: 'Gallium galore and lions teeth',
    status: 'in progress'
  },
  {
    title: 'go to dentist',
    description: 'I am falling apart',
    status: 'not started'
  },
  {
    title: 'Learn Redux in ES6',
    description: 'Because it\'s too hard in typescript',
    status: 'in progress'
  }];

  return (
    <div className="App">
      <TaskPage tasks={allTasks} />
    </div>
  );
}

export default App;
