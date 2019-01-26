import React from 'react';

export default (Component, initialState = {}) => class extends React.PureComponent {
  state = initialState

  render = () => {
    const { children } = this.props;

    return (
      <Component {...this.props}>
        {children}
      </Component>
    );
  }
};
