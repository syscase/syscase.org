import React, {Component} from 'react';

import DefaultLayout from 'components/layouts/DefaultLayout';
import Title from 'components/Title';
import Flex from 'components/Flex';
import Container from 'components/Container';
import createUrl from 'utils/createUrl';

import {colors, media} from 'theme';
import logo from 'images/logo-dark.svg';
import fullLogo from 'images/logo-full-dark.svg';

type Props = {
  location: Location,
};

class Home extends Component<Props> {
  render() {
    const {location} = this.props;

    return (
      <DefaultLayout location={location}>
        <Title title="Some title" url={createUrl('/')} />
        <div css={{width: '100%'}}>
          <header
            css={{
              backgroundColor: colors.dark.backgroundColor,
              color: colors.dark.color,
            }}>
            <div
              css={{
                paddingTop: 45,
                paddingBottom: 10,
                position: 'relative',
                '::before': {
                  content: ' ',
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  bottom: 0,
                  right: 0,
                  backgroundImage: `url(${logo})`,
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: '100% 100px',
                  backgroundSize: '35% auto',
                  opacity: 0.05,
                },

                [media.between('xsmall', 'large')]: {
                  '::before': {
                    backgroundSize: '35% auto',
                  },
                },

                [media.greaterThan('small')]: {
                  paddingTop: 60,
                  paddingBottom: 70,
                },

                [media.greaterThan('xlarge')]: {
                  marginLeft: 'auto',
                  marginRight: 'auto',
                  paddingTop: 95,
                  paddingBottom: 85,
                  maxWidth: 1500,
                },
              }}>
              <div css={{position: 'relative'}}>
                <Container>
                  <div
                    css={{
                      margin: 'auto',
                      color: colors.dark.brand,
                      textAlign: 'center',
                      letterSpacing: '0.01em',
                      fontSize: 45,
                      width: 400,
                      height: 200,
                      backgroundRepeat: 'no-repeat',
                      backgroundImage: `url(${fullLogo})`,
                      ':hover': {
                        backgroundImage: `url(${logo})`,
                      },
                      [media.size('xsmall')]: {
                        fontSize: 30,
                        width: 100,
                        height: 50,
                      },
                      [media.between('small', 'large')]: {
                        width: 200,
                        height: 100,
                      },
                      [media.greaterThan('xlarge')]: {
                        fontSize: 60,
                      },
                    }}
                  />
                  <h1
                    css={{
                      paddingTop: 15,
                      textAlign: 'center',
                      letterSpacing: '0.01em',
                      fontWeight: 200,
                      fontSize: 24,

                      [media.size('xsmall')]: {
                        maxWidth: '12em',
                        marginLeft: 'auto',
                        marginRight: 'auto',
                        fontSize: 16,
                      },

                      [media.greaterThan('xlarge')]: {
                        fontSize: 30,
                        paddingTop: 20,
                      },
                    }}>
                    Open Source Fuzzing Framework for ARM TrustZone
                  </h1>
                  <Flex
                    valign="center"
                    halign="center"
                    css={{
                      paddingTop: 40,
                      flexWrap: 'wrap',
                      justifyContent: 'center',

                      [media.greaterThan('xlarge')]: {
                        paddingTop: 65,
                      },
                    }}>
                    Add buttons!
                  </Flex>
                </Container>
              </div>
            </div>
          </header>
        </div>
      </DefaultLayout>
    );
  }
}

export default Home;
