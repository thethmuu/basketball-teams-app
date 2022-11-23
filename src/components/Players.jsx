import React from 'react';
import {
  Link,
  Outlet,
  useLocation,
  useMatch,
  useSearchParams,
} from 'react-router-dom';
import usePlayerNames from '../hooks/usePlayerNames';
import { slugify } from '../utils';

const Players = () => {
  const location = useLocation();

  const [searchParams] = useSearchParams(location.search);

  const { response: names, loading } = usePlayerNames();

  const team = searchParams.get('teamId');

  if (loading === true) return null;

  return (
    <div className='container two-column'>
      <Sidebar title='Players' playersList={names} />
      {/* show nested component defined in nested Route */}
      <Outlet />
    </div>
  );
};

export default Players;

function Sidebar({ title, playersList }) {
  return (
    <div>
      <h3 className='header'>{title}</h3>
      <ul className='sidebar-list'>
        {playersList.map((player) => (
          <CustomLink key={player} to={slugify(player)}>
            {player.toUpperCase()}
          </CustomLink>
        ))}
      </ul>
    </div>
  );
}

function CustomLink({ to, children }) {
  const location = useLocation();
  const isMatch = useMatch(to);

  return (
    <div className={isMatch ? 'active' : ''}>
      {isMatch ? '✨' : ''}
      <Link to={to}>{children}</Link>
    </div>
  );
}
