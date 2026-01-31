import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { fetchPosts } from '../API/api';

const FetchRQ = () => {
  const getPostsData = async () => {
    try {
      const res = await fetchPosts();
      return res.data;
    } catch (error) {
      console.error(error);
      return [];
    }
  };

  const { data, isLoading, isError } = useQuery({
    queryKey: ['posts'],
    queryFn: getPostsData,
  });

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error fetching posts</p>;

  return (
    <div>
      <ul className='section-accordion'>
        {data?.map((curElem) => {
          const { id, title, body } = curElem;
          return (
            <li key={id}>
              <p>{title}</p>
              <p>{body}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default FetchRQ;
