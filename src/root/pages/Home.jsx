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
    <div className="container mt-5">
      <h5 className="mb-4">Please refresh the page to read updated jokes.</h5>

      {jokes.length > 0 ? (
        <table className="table table-striped table-bordered table-hover">
          <thead className="thead-dark">
            <tr>
              <th scope="col">Sr.No</th>
              <th scope="col">Category</th>
              <th className="text-center" scope="col">Joke</th>
            </tr>
          </thead>
          <tbody>
            {jokes.map((joke, index) => (
              <tr key={index}>
                <th scope="row">{index + 1}</th>
                <td>{joke.category}</td>
                <td>{joke.joke}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <div className="text-center">
          <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        </div>
      )}
    </div>
  );
};

export default Home;
