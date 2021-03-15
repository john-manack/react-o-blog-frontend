import { BrowserRouter as Router } from 'react-router-dom';
import Albums from './components/Albums'

function App() {
  return (
    <Router>
          <h1>Album Review Site</h1>
          <Albums />
    </Router>
  );
}

export default App;
