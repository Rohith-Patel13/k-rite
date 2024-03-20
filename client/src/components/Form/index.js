import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './index.css'


const Form = () => {
  const [formData, setFormData] = useState({
    domain: '',
    recordType: '',
    recordName: '',
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
        recordName: '',
        recordData: '',
      });
    } catch (error) {
      console.log('Error While adding record Data:', error.message);
    }
  };

  const showAllRecordsClicked=()=>{
    navigate('/dashboard')
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
          <label htmlFor="recordNameId">Record Name:</label>
          <input
            type="text"
            id="recordNameId"
            name="recordName"
            value={formData.recordName}
            onChange={handleInputChange}
            required
            className='form-control'
            placeholder='Enter Record Name'
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
            placeholder='Enter Record Data'
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
        </div>
        
      </form>
    </div>
  );
}

export default Form;

