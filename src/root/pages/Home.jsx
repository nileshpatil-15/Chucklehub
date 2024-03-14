import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { JOKES } from '../../constants/apiendpoints';
import { Spinner } from 'react-bootstrap';
const Home = () => {
  const [jokes, setJokes] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    axios.get(JOKES)
      .then(response => {
        setJokes(response.data.jokes);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  };

  return (
    <div className="container mt-5 d-flex justify-content-center align-items-center flex-column ">
      <h5>please refresh the page to read updated jokes</h5>

{jokes.length>0? (
  
 
   <table className="table table-striped table-bordered">
      <thead className="thead-dark">
        <tr>
          <th scope="col">Sr.No</th>
          <th scope="col">Category</th>
          <th scope="col">Joke</th>
        </tr>
      </thead>
      <tbody>
        {jokes?.map((user,index) => (
        <tr key={index}>
          <td>{index+1}</td>
          <td>{user.category}</td>
          <td>{user.joke}</td>
        </tr>
        ))}
      </tbody>
    </table>)
    
    :(     <Spinner animation="border" role="status">
    <span className="visually-hidden">Loading...</span>
  </Spinner>)}
  
  </div>
  
  );
};

export default Home;
