import React from 'react';
import {colors, media} from 'theme';
import {Link} from 'gatsby';

class NavLink extends React.Component {
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
  paddingLeft: 15,
  paddingRight: 15,
  fontWeight: 300,

  [media.size('xsmall')]: {
    paddingLeft: 8,
    paddingRight: 8,
  },

  [media.between('small', 'medium')]: {
    paddingLeft: 10,
    paddingRight: 10,
  },

  [media.greaterThan('xlarge')]: {
    paddingLeft: 20,
    paddingRight: 20,
    fontSize: 18,
  },
};

const activeStyle = {
  color: colors.activeNavLink,

  [media.greaterThan('small')]: {
    position: 'relative',
  },
};

export default NavLink;
