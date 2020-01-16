import createUUID from '../components/helpers';

const mockTasks = [{
    title: 'Pull Weeds',
    description: 'Gallium galore and lions teeth',
    status: 'in progress',
    id: createUUID(),
  },
  {
    title: 'go to dentist',
    description: 'I am falling apart',
    status: 'not started',
    id: createUUID(),
  },
  {
    title: 'Learn how to properly log in Node.js',
    description: 'DataDog?  MongoDB?',
    status: 'in progress',
    id: createUUID(),
  }];

export default function tasks(state = {tasks: mockTasks}, action) {
  switch(action.type) {
    case "ADD_TASK":
      return {
        tasks: state.tasks.concat({
          ...action.payload,
          status: 'not started',
          id: createUUID(),
        })
      }
      default:
        return state;
  }
    
}