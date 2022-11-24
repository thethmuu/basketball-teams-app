import React from 'react';
import { Outlet } from 'react-router-dom';
import useTeamNames from '../hooks/useTeamNames';
import Sidebar from './Sidebar';

const Teams = () => {
  const { response: teamNames, loading } = useTeamNames();

  if (loading === true) return null;

  return (
    <div className='container two-column'>
      <Sidebar title='Teams' list={teamNames} />

      <Outlet />
    </div>
  );
};

export default Teams;
