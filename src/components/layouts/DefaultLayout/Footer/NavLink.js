import React from 'react';
import PropTypes from 'prop-types';
import {colors} from 'theme';
import {Link} from 'gatsby';

class NavLink extends React.Component {
  static get propTypes() {
    return {
      title: PropTypes.string.isRequired,
      to: PropTypes.string,
      isActive: PropTypes.bool.isRequired,
    };
  }

  internal() {
    return (
      <Link
        key={this.props.title}
        css={[style, this.props.isActive && activeStyle]}
        to={this.props.to}>
        {this.props.title}
      </Link>
    );
  }

  external() {
    return (
      <a
        key={this.props.title}
        css={[style, this.props.isActive && activeStyle]}
        href={this.props.to}>
        {this.props.title}
      </a>
    );
  }

  none() {
    return (
      <div key={this.props.title} css={[style]}>
        {this.props.title}
      </div>
    );
  }

  render() {
    if (!this.props.to) {
      return this.none();
    }
    if (this.props.to.match(/^https?:\/\//g)) {
      return this.external();
    }
    return this.internal();
  }
}

const style = {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
};

const activeStyle = {
  color: colors.activeNavLink,
};

export default NavLink;
