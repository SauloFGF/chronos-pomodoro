import Home from './pages/Home';
import './styles/thema.css';
import './styles/global.css';
import { TaskContextProvider } from './contexts/TaskContext/TasContextProvider';

function App() {
  return (
    <TaskContextProvider>
      <Home />
    </TaskContextProvider>
  );
}

export default App;
