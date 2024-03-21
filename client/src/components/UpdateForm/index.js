
import { useState } from 'react';
import axios from 'axios';

import './index.css'

const UpdateForm = ({ selectedRecord, onClose,setDnsRecords,dnsRecords }) => {
  console.log(selectedRecord, 'in updateform')
  const [updatedRecord, setUpdatedRecord] = useState(selectedRecord);

  const handleInputChange = (e) => {
    setUpdatedRecord({ ...updatedRecord, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    try {
      console.log(updatedRecord)
      const response = await axios.put(`/api/records/updateRecord/${selectedRecord._id}`, updatedRecord);
      // onUpdate(response.data);
      console.log(response.data)
      const updatedRecordIndex = dnsRecords.findIndex((eachRecord)=>(
        eachRecord._id===updatedRecord._id
      ))
      const updatedRecords = [...dnsRecords];
      updatedRecords[updatedRecordIndex] = updatedRecord;
      setDnsRecords(updatedRecords)
      onClose();
    } catch (error) {
      console.error('Error updating record:', error);
    }
  };

  return (
    <div className="update-form-container">
      <h2>Update DNS Record</h2>
      <form>
        <div>
          <label htmlFor="updatedDomain">Domain:</label>
          <input
            type="text"
            id="updatedDomain"
            name="domain"
            value={updatedRecord.domain}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label htmlFor="updatedRecordType">Record Type:</label>
          <input
            type="text"
            id="updatedRecordType"
            name="recordType"
            value={updatedRecord.recordType}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label htmlFor="updatedRecordName">TTL</label>
          <input
            type="text"
            id="updatedRecordName"
            name="recordName"
            value={updatedRecord.ttl}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label htmlFor="updatedRecordData">Record Data:</label>
          <input
            type="text"
            id="updatedRecordData"
            name="recordData"
            value={updatedRecord.recordData}
            onChange={handleInputChange}
            required
          />
        </div>
        <button type="button" onClick={handleSubmit}>Update</button>
        <button type="button" onClick={onClose}>Cancel</button>
      </form>
    </div>
  );
};

export default UpdateForm;
