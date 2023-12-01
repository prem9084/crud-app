import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'

const DataDisplay = () => {
  const [data, setData] = useState([]);
  

  useEffect(() => {
    // Fetch data from backend API
    axios.get('http://localhost:5000')
      .then(res => {
        setData(res.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
    <div className="w-50 bg-white rounded p-3">
    <Link to="/" className="btn btn-success">
          Back to home
        </Link>
      <h3 className="text-center">Your Data</h3>
      <hr/>
      <table className="table col-md-6">
        <tbody>
        
        {data.map(item => (
          <tr key={item.id} className='fs-3 text-center'>
           <td> {item.task} </td>
          </tr>
        ))}
      
        </tbody>
      </table>
    </div>
  </div>
  );
};

export default DataDisplay;
