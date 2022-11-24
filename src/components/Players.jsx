import React from 'react';
import {
  Link,
  Outlet,
  useLocation,
  useMatch,
  useSearchParams,
} from 'react-router-dom';
import usePlayerNames from '../hooks/usePlayerNames';
import Sidebar from './Sidebar';

const Players = () => {
  const location = useLocation();

  const [searchParams] = useSearchParams(location.search);

  const { response: names, loading } = usePlayerNames();

  const team = searchParams.get('teamId');

  if (loading === true) return null;

  return (
    <div className='container two-column'>
      <Sidebar title='Players' list={names} />
      {/* show nested component defined in nested Route */}
      <Outlet />
    </div>
  );
};

export default Players;
