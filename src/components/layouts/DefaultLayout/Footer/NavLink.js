import React from 'react';
import {colors} from 'theme';
import {Link} from 'gatsby';

const NavLink = ({key, title, to, isActive}: Props) => (
  <Link css={[style, isActive && activeStyle]} to={to}>
    {title}
  </Link>
);

const style = {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
};

const activeStyle = {
  color: colors.activeNavLink,
};

export default NavLink;
