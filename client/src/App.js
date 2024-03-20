import {BrowserRouter,Routes,Route} from 'react-router-dom'

import './App.css';
import Login from './components/Login/index';
import Dashboard from './components/Dashboard/index'

function App() {
  return (
    <BrowserRouter>
      <div className='bg'>
        <Routes>
          <Route path='/login' element={<Login/>} />
          <Route path='/dashboard' element={<Dashboard/>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
