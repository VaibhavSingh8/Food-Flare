import { Component } from "react";

class UserClass extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
    console.log(
      this.props.name +
      "UserClass constructor() method called: Child constructor"
    );
  }

  componentDidMount() {
    console.log(
      this.props.name + "UserClass componentDidMount() method called: Child"
    );
  }

  render() {
    console.log(
      this.props.name + "UserClass render() method called: Child render"
    );
    return (
      <div>
        <h2>Name: {this.props.name}</h2>
      </div>
    );
  }
}

export default UserClass;