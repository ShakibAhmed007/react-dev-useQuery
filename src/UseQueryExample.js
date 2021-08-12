import React from 'react';
import { useQuery } from 'react-query';
import axios from 'axios';

const fetchData = async () => {
  const response = await axios
    .get('https://dev-http-default-rtdb.firebaseio.com/test_data.json')
    .then(res => res.data)
    .catch(error => {
      console.log(error);
    });
  return response;
};

const UseQueryExample = () => {
  const { isLoading, isError, data, error } = useQuery(['repoData'], fetchData);

  if (isLoading) {
    return <span>Loading...</span>;
  }

  if (isError) {
    return <span>Error: {error.message}</span>;
  }
  console.log('data ---', data);
  return <div>{JSON.stringify(data)}</div>;
};

export default UseQueryExample;
