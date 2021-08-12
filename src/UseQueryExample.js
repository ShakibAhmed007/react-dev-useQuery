import React from 'react';
import FetchData from './FetchData';
import { useQuery } from 'react-query';

const UseQueryExample = () => {
  const { isLoading, isError, data, error } = useQuery(['repoData'], FetchData);

  if (isLoading) {
    return <span>Loading...</span>;
  }

  if (isError) {
    return <span>Error: {error.message}</span>;
  }
  return <div>{data}</div>;
};

export default UseQueryExample;
