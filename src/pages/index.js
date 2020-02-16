import React, {Component} from 'react';

import DefaultLayout from 'components/layouts/DefaultLayout';

type Props = {
  location: Location,
};

class Home extends Component<Props> {
  render() {
    const {location} = this.props;

    return (
      <DefaultLayout location={location}>
        <div>Add more content!</div>
      </DefaultLayout>
    );
  }
}

export default Home;
