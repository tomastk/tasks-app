import './App.css';

/* Importing the components */

import Logo from './components/Logo'
import TaskList from './components/TaskList'

function App() {
  return (
    <div className="App">
      <Logo />
      <div className="main-task-list">
        <h1>Mis tareas</h1>
        <TaskList />
      </div>
    </div>    
  );
}

export default App;