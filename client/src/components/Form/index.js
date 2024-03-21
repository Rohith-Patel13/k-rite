import { useState } from 'react';
import { useNavigate,Navigate } from 'react-router-dom';
import axios from 'axios';
import Cookies from 'js-cookie';

import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './index.css'


const Form = () => {
  const [formData, setFormData] = useState({
    domain: '',
    recordType: '',
    ttl: '',
    recordData: '',
  });

  const navigate= useNavigate()

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const addButtonClicked = async () => {
    try {
      const response = await axios.post('/api/records/adding', formData);
      console.log(response.data)

      setFormData({
        domain: '',
        recordType: '',
        ttl: '',
        recordData: '',
      });
    } catch (error) {
      console.log('Error While adding record Data:', error.message);
    }
  };

  const showAllRecordsClicked=()=>{
    navigate('/dashboard')
  }

  // const token = localStorage.getItem("jwtToken");
  const token = Cookies.get("jwtToken");
  if (!token) {
    // If token is not available, redirect to login page
    return <Navigate to="/login" />;
    
  }

  const logoutClicked =()=>{
    Cookies.remove('jwtToken')
    navigate('/login')
  }

  return (
    <div>
      <h2>Add DNS Record</h2>
      <form className='form-control form-bg'>
        <div className='eachData'>
          <label htmlFor="domainId">Domain:</label>
          <input
            type="text"
            id="domainId"
            name="domain"
            value={formData.domain}
            onChange={handleInputChange}
            required
            className='form-control'
            placeholder='Enter Domain Name'
          />
        </div>
        <div className='eachData'>
          <label htmlFor="recordTypeId">Record Type:</label>
          <input
            type="text"
            id="recordTypeId"
            name="recordType"
            value={formData.recordType}
            onChange={handleInputChange}
            required
            className='form-control'
            placeholder='Enter Record Type'
          />
        </div>
        <div className='eachData'>
          <label htmlFor="ttlId">TTL:</label>
          <input
            type="text"
            id="ttlId"
            name="ttl"
            value={formData.ttl}
            onChange={handleInputChange}
            required
            className='form-control'
            placeholder='Enter ttl in seconds'
          />
        </div>
        <div className='eachData'>
          <label htmlFor="recordDataId">Record Data:</label>
          <textarea
            type="text"
            id="recordDataId"
            name="recordData"
            value={formData.recordData}
            onChange={handleInputChange}
            required
            className='form-control'
            placeholder='Enter IP Address'
          />
        </div>
        <div className='btn-bg'>
        <button type="button"
         onClick={addButtonClicked}
         className='btn btn-primary'>Add Record</button>
        
        <button className='btn btn-primary'
        type='button'
        onClick={showAllRecordsClicked}
        >Show All Records</button>

        <button className='btn btn-danger' onClick={logoutClicked}>Logout</button>
        </div>
        
      </form>
      
    </div>
  );
}

export default Form;

