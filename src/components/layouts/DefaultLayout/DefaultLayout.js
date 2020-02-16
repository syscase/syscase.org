import React, {Component} from 'react';
import {media} from 'theme';
import Flex from 'components/Flex';
import Footer from './Footer';
import Header from './Header';

type Props = {
  // eslint-disable-next-line flowtype/no-weak-types
  children: Function,
  location: Location,
};

class DefaultLayout extends Component<Props> {
  render() {
    const {children, location} = this.props;

    return (
      <div
        css={{
          display: 'flex',
          minHeight: 'calc(100vh - 40px)',
          flexDirection: 'column',
        }}>
        <Header location={location} />
        <Flex
          direction="column"
          shrink="0"
          grow="1"
          valign="stretch"
          css={{
            flex: '1 0 auto',
            marginTop: 60,
            [media.between('medium', 'large')]: {
              marginTop: 50,
            },
            [media.lessThan('medium')]: {
              marginTop: 40,
            },
          }}>
          {children}
        </Flex>
        <Footer location={location} />
      </div>
    );
  }
}

export default DefaultLayout;
