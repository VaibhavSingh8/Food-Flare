import React from "react";
import UserClass from "./UserClass";

class AboutComponent extends React.Component {
  constructor(props) {
    super(props);
    console.log("About Page constructor() method called: Parent constructor");
  }

  componentDidMount() {
    console.log("About Page componentDidMount() method called: Parent");
  }

  render() {
    console.log("About Page render() method called: Parent render");
    return (
      <div>
        <h1>About Page</h1>
        <UserClass name={"XYZ"} />
        <UserClass name={"ABC"} />
      </div>
    );
  }
};

export default AboutComponent;