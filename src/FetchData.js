import React from 'react';
import axios from 'axios';

const FetchData = async () => {
  const response = await axios
    .get('https://dev-http-default-rtdb.firebaseio.com/test_data.json')
    .then(res => {
      return res.data;
    })
    .catch(error => {
      console.log(error);
    });
};

export default FetchData;
