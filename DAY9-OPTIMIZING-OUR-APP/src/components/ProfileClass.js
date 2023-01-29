import React from "react";

class Profile extends React.Component {
  constructor(props) {
    super(props);
    //create state
    // this.state = {
    //   count: 0,
    //   count2: 2,
    // };
    this.state = {
      userInfo: {
        name: "dummy name",
        location: "dummy location",
      },
    };
    // console.log("CHILD: constructor " + this.props.name);
    console.log("CHILD: constructor ");
  }
  // async componentDidMount() {
  componentDidMount() {
    //API CALL
    // console.log("CHILD: component did mount " + this.props.name);
    // const data = await fetch("https://api.github.com/users/akshaymarch7");
    // const json = await data.json();
    // console.log(json);
    // this.setState({
    //   userInfo: json,
    // });
    // console.log("CHILD: component did mount " + this.props.name);

    this.timer = setInterval(() => {
      console.log("NAMSTE REACT OP");
    }, 1000);
    console.log("CHILD: component did mount ");
  }

  componentDidUpdate() {
    console.log("CHILD: component did update");
  }

  componentWillUnmount() {
    console.log("CHILD: componentWillUnmount");
    clearInterval(this.timer);
  }
  render() {
    // console.log(this.props);
    // const { count } = this.state;
    console.log("CHILD:  render " + this.props.name);
    return (
      <div>
        <h1>Profile class based component</h1>
        <img src={this.state.userInfo.avatar_url} alt="" />
        <h2>Name:{this.state.userInfo.name}</h2>
        <h2>Location:{this.state.userInfo.location}</h2>
        {/* <h2>Name : {this.props.name}</h2> */}
        {/* <h2>Count : {this.state.count}</h2> */}
        {/* <h2>Destructerd Count : {count}</h2> */}
        {/* <h2>Count2 : {this.state.count2}</h2> */}
        {/* <button
          onClick={() => {
            this.setState({ count: 1, count2: 1 });
          }}
        >
          Click ME
        </button> */}
      </div>
    );
  }
}

export default Profile;
