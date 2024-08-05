import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Main from './routes/Main'
import Sub from './routes/Sub'
import ApiEx from './routes/ApiEx';

export default function App() {

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/sub' element={<Sub />} />
        <Route path='/api' element={<ApiEx />} />
      </Routes>
    </Router>
  );
}
