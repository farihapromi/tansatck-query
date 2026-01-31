import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { fetchPosts } from '../API/api';

const FetchRQ = () => {
  const getPostsData = async () => {
    try {
      const res = await fetchPosts();
      console.log(res);
      res.status === 200 ? res.data : [];
    } catch (error) {
      console.log(error);
      return [];
    }
  };
  const { data } = useQuery({
    queryyKey: ['posts'],
    queryFn: getPostsData(),
  });

  return (
    <div>
      <h1>This is fethrq</h1>
    </div>
  );
};

export default FetchRQ;
