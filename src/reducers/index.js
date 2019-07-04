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
    title: 'Learn Redux in ES6',
    description: 'Because it\'s too hard in typescript',
    status: 'in progress',
    id: createUUID(),
  }];

export default function tasks(state = {tasks: mockTasks}, action) {
    return state;
}