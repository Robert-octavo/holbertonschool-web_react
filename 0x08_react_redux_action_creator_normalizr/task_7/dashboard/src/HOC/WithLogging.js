import React, { Component } from 'react';


function WithLogging(WrappedComponent) {
  return class extends Component {
    constructor(props) {
      super(props);
      this.displayName = WrappedComponent.name ? `WithLogging(${WrappedComponent.name})` : 'WithLogging(Component)';
    }

    componentDidMount() {
      console.log(`Component ${WrappedComponent.name} is mounted`);
    }

    componentWillUnmount() {
      console.log(`Component ${WrappedComponent.name} is going to unmount`);
    }

    render() {
      return <WrappedComponent {...this.props} />;
    }
  };
}

export default WithLogging;
