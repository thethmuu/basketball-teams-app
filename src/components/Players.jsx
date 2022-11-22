import React from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';

const Players = () => {
  const location = useLocation();
  const [searchParams] = useSearchParams(location.search);

  const team = searchParams.get('teamId');

  return <div className='container'>Players of {team}</div>;
};

export default Players;
