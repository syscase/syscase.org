import React from 'react';
import NavLink from './NavLink';
import navigation from '../../../../../data/header/navigation.yml';

const Header = ({location}: {location: Location}) => (
  <header>
    <nav>
      {navigation.links.map(link => (
        <NavLink
          key={link.key}
          isActive={location.pathname.includes(link.activeSelector)}
          title={link.title}
          to={link.to}
        />
      ))}
    </nav>
  </header>
);

export default Header;
