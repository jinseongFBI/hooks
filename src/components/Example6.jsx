import React from 'react';

export default class Example6 extends React.Component {
  state = {
    time: new Date(),
  };
  _timer = null;

  componentDidMount() {
    this._timer = setInterval(() => {
      this.setState({ time: new Date() });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this._timer);
  }

  render() {
    const { time } = this.state;
    return <div>{time.toISOString()}</div>;
  }
}
