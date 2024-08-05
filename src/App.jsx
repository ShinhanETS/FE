import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {RecoilRoot} from 'recoil';
import './App.css';
import Main from './routes/Main'
import RecoilEx from './routes/RecoilEx'
import ApiEx from './routes/ApiEx';


export default function App() {

  return (
    <RecoilRoot>
      <Router>
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/recoilex' element={<RecoilEx />} />
          <Route path='/api' element={<ApiEx />} />
        </Routes>
      </Router>
    </RecoilRoot>
  );
}
