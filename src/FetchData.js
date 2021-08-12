import React from 'react';
import axios from 'axios';

const FetchData = async () => {
  const response = await axios
    .get('https://dev-http-default-rtdb.firebaseio.com/test_data.json')
    .then(res => {
      console.log(res.data);
      const dataArr = [];
      for (const key in res.data) {
        dataArr.push({
          id: data[key].id,
          title: data[key].title
        });
      }
      return res.data;
    })
    .catch(error => {
      console.log(error);
    });
};

export default FetchData;
