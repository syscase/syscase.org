import React from 'react';
import PropTypes from 'prop-types';
import Container from 'components/Container';
import {colors} from 'theme';
import NavLink from './NavLink';
import navigation from '../../../../../data/navigation/primary.yml';

const linkShape = PropTypes.shape({
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
});

const linkItemsType = PropTypes.arrayOf(PropTypes.objectOf(linkShape));

const itemsShape = PropTypes.shape({
  items: linkItemsType.required,
});

class NavSections extends React.Component {
  static get propTypes() {
    return {
      sections: PropTypes.objectOf(itemsShape),
    };
  }

  render() {
    return Object.entries(this.props.sections).map(([key, link]) => {
      return (
        <NavLink
          key={key}
          isActive={location.pathname.includes(link.activeSelector)}
          title={link.title}
          to={Object.values(link.items)[0].to}
        />
      );
    });
  }
}

class FooterNavigation extends React.Component {
  render() {
    return Object.entries(this.props.navigation.links)
      .filter(([key, link]) => {
        return !link.hasOwnProperty('footer') || link.footer;
      })
      .map(([key, link]) => {
        return (
          <div key={key}>
            <NavLink
              key={key}
              isActive={location.pathname.includes(link.activeSelector)}
              title={link.title}
              to={link.to}
            />
            {link.sections && <NavSections sections={link.sections} />}
          </div>
        );
      });
  }
}

const Footer = ({location}: {location: Location}) => (
  <footer
    css={{
      backgroundColor: colors.dark.backgroundColor,
      color: colors.dark.color,
    }}>
    <Container>
      <nav>
        <FooterNavigation navigation={navigation} />
      </nav>
    </Container>
  </footer>
);

export default Footer;
