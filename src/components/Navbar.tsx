import { NavLink as RouterNavLink, useLocation } from 'react-router-dom';
import { NavLink } from '@mantine/core';

export default function Navbar() {
  const location = useLocation();

  const links = [
    { label: 'Home', to: '/' },
    { label: 'Ideas', to: '/ideas' },
    { label: 'Stocks', to: '/stocks' },
    { label: 'Guides', to: '/guides' },
  ];

  return (
    <>
      {links.map((link) => (
        <NavLink
          key={link.to}
          label={link.label}
          component={RouterNavLink}
          to={link.to}
          active={location.pathname === link.to}
          variant="light"
        />
      ))}
    </>
  );
}
