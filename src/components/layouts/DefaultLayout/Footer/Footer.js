import React from 'react';
import NavLink from './NavLink';
import navigation from '../../../../../data/header/navigation.yml';

const Footer = ({location}: {location: Location}) => (
  <footer>
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
  </footer>
);

export default Footer;
