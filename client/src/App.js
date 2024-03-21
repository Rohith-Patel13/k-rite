import {BrowserRouter,Routes,Route} from 'react-router-dom'

import './App.css';
import Login from './components/Login/index';
import Dashboard from './components/Dashboard/index'
import Form from './components/Form/index';
import NotFound from './components/NotFound/index';

function App() {
  return (
    <BrowserRouter>
      <div className='bg'>
        <Routes>         
          <Route exact path='/login' element={<Login />} />         
          <Route exact path='/form' element={<Form />} />
          <Route exact path='/dashboard' element={<Dashboard />} />
          {/* Catch-all route for unmatched paths */}
          <Route path='*' element={<NotFound />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
