import React from 'react';
import Container from 'components/Container';
import {Link} from 'gatsby';
import NavLink from './NavLink';
import navigation from '../../../../../data/navigation/primary.yml';
import {media, colors} from 'theme';

import logo from 'images/logo-light.svg';
import fullLogo from 'images/logo-full-light.svg';

class HeaderNavigation extends React.Component {
  render() {
    return Object.entries(this.props.navigation.links)
      .filter(([key, link]) => {
        return !link.hasOwnProperty('header') || link.header;
      })
      .map(([key, link]) => {
        return (
          <NavLink
            key={key}
            isActive={location.pathname.includes(link.activeSelector)}
            title={link.title}
            to={link.to}
          />
        );
      });
  }
}

const Header = ({location}: {location: Location}) => (
  <header
    css={{
      position: 'fixed',
      zIndex: 1,
      width: '100%',
      top: 0,
      left: 0,
      '@media print': {
        display: 'none',
      },
      backgroundColor: colors.light.backgroundColor,
      color: colors.light.color,
    }}>
    <Container>
      <div
        css={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          height: 80,
          [media.between('small', 'large')]: {
            height: 70,
          },
          [media.lessThan('small')]: {
            height: 60,
          },
        }}>
        <Link
          to="/"
          css={{
            display: 'flex',
            marginRight: 10,
            height: '100%',
            alignItems: 'center',

            [media.greaterThan('small')]: {
              width: 'calc(100% / 6)',
            },
            [media.lessThan('small')]: {
              flex: '0 0 auto',
            },

            ':focus': {
              outline: 0,
            },
          }}>
          <div
            css={{
              height: 60,
              width: 200,
              backgroundRepeat: 'no-repeat',
              backgroundImage: `url(${logo})`,
              ':hover': {
                backgroundImage: `url(${fullLogo})`,
              },
            }}
          />
        </Link>
        <nav
          css={{
            flex: '1',
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'stretch',
            overflowX: 'auto',
            overflowY: 'hidden',
            WebkitOverflowScrolling: 'touch',
            height: '100%',

            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
            '::-webkit-scrollbar': {
              display: 'none',
            },

            [media.size('xsmall')]: {
              flexGrow: '1',
              width: 'auto',
            },
            [media.greaterThan('xlarge')]: {
              width: null,
            },
            [media.lessThan('small')]: {
              maskImage:
                'linear-gradient(to right, transparent, black 20px, black 90%, transparent)',
            },
          }}>
          <HeaderNavigation navigation={navigation} />
        </nav>
      </div>
    </Container>
  </header>
);

export default Header;
