import React from 'react';

class Test1 extends React.Component {
  constructor(props) {
    console.clear();
    console.log('constructor');
    console.log(props);
    super(props);
    this.state = {
      s1: 0,
    };
  }

  buttonHandler = () => {
    let val = this.state.s1;
    val++;
    this.setState({ s1: val });
  };

  static getDerivedStateFromProps(props, state) {
    console.log('get derived state');
    return null;
    // return { s1: props.arg };
  }

  render() {
    console.log('render 1');
    return (
      <>
        {console.log('render 2')}
        <div>
          <button onClick={this.buttonHandler}>Push</button>
        </div>
        <div>{this.state.s1}</div>
      </>
    );
  }

  componentDidMount() {
    console.log('component did mount')
  }

  componentDidUpdate() {
    console.log('component did update')
  }
}

export default Test1;
