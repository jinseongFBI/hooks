import React from 'react';

export default function withHasMounted(Component) {
  class NewComponent extends React.Component {
    state = {
      hasMounted: false,
    };
    componentDidMount() {
      this.setState({
        hasMounted: true,
      });
    }
    render() {
      const { hasMounted } = this.state;
      return <Component {...this.props} hasMounted={hasMounted} />;
    }
  }

  NewComponent.displayName = `withHasMounted(${Component.name})`;

  return NewComponent;
}
