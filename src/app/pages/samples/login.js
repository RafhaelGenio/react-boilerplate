import React from 'react';

import formHOC from 'app/components/form/index';

class LoginSample extends React.PureComponent {
  state = {
  }

  render = () => {
    const { sample } = this.state;

    return (
      <div>
        {sample}
      </div>
    );
  }
}

export default formHOC(LoginSample, { sample: 'hahaha' });
