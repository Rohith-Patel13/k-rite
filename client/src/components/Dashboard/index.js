import { useState, useEffect } from 'react';
import { Navigate,useNavigate } from 'react-router-dom';
import axios from 'axios';
import Cookies from 'js-cookie';

import UpdateForm from '../UpdateForm/index';
import './index.css'

const Dashboard = () => {
  const [dnsRecords, setDnsRecords] = useState([]);
  const [selectedRecord, setSelectedRecord] = useState(null);
  const [isUpdateFormVisible, setUpdateFormVisible] = useState(false);
  const navigate = useNavigate()

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('/api/records/getAllRecords');
      setDnsRecords(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleDeleteRecord = async (id) => {
    try {
      const response = await axios.delete(`/api/records/deleteRecord/${id}`);
      console.log(response.data)
      setDnsRecords(dnsRecords.filter(record => record._id !== id));
    } catch (error) {
      console.error('Error deleting record:', error);
    }
  };

  const handleUpdateRecord = (record) => {
    console.log('handleUpdateRecord',record)
    setSelectedRecord(record);
    setUpdateFormVisible(true);
  };

  const handleCloseUpdateForm = () => {
    setSelectedRecord(null);
    setUpdateFormVisible(false);
  };

  console.log(selectedRecord,'out')

  // const token = localStorage.getItem("jwtToken");
  const token = Cookies.get("jwtToken");
  if (!token) {
    // If token is not available, redirect to login page
    return <Navigate to="/login" />;
    
  }

  const logoutClicked =()=>{
    // localStorage.removeItem("jwtToken")
    Cookies.remove("jwtToken")
    navigate('/login')
  }

  const fillFormClicked=()=>{
    navigate('/form')
  }


  return (
    <div className="table-container">
      <h2>DNS Records Dashboard</h2>

      {isUpdateFormVisible && (
        <UpdateForm
          selectedRecord={selectedRecord}
          onClose={handleCloseUpdateForm}
          setDnsRecords={setDnsRecords}
          dnsRecords={dnsRecords}
        />
      )}

      <table>
        <thead>
          <tr>
            <th>Domain</th>
            <th>Record Type</th>
            <th>TTL(seconds)</th>
            <th>Record Data</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {dnsRecords.map(record => (
            <tr key={record._id}>
              <td>{record.domain}</td>
              <td>{record.recordType}</td>
              <td>{record.ttl}</td>
              <td>{record.recordData}</td>
              <td>
                <button className='btn btn-warning' onClick={() => handleUpdateRecord(record)}>Update</button>
                <button className='btn btn-danger' onClick={() => handleDeleteRecord(record._id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className='btn-container'>
        <button className='btn btn-danger' onClick={logoutClicked}>Logout</button>
        <button className='btn btn-primary' onClick={fillFormClicked}>Fill Form</button>
      </div>

    </div>
  );
};

export default Dashboard;
