import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { JOKES } from '../../constants/apiendpoints';

const Home = () => {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    axios.get(JOKES)
      .then(response => {
        setUserData(response.data.jokes);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  };

  return (
    <div className="container mt-5">
    <h1>Users Data</h1>
    <table className="table table-striped table-bordered">
      <thead className="thead-dark">
        <tr>
          <th scope="col">Sr.No</th>
          <th scope="col">Category</th>
          <th scope="col">Joke</th>
        </tr>
      </thead>
      <tbody>
        {userData?.map((user,index) => (
        <tr key={index}>
          <td>{index+1}</td>
          <td>{user.category}</td>
          <td>{user.joke}</td>
        </tr>
        ))}
      </tbody>
    </table>
  </div>
  
  );
};

export default Home;
