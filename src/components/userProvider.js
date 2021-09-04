import React, { Component, createContext } from "react";
import fire, { createUserDocument } from "../fire";


export const UserContext = createContext({ user: null });

class UserProvider extends Component {
  state = {
    user: null
  };

  
  
  componentDidMount = async () => {
    fire.auth().onAuthStateChanged(async userAuth => {
      const user = await createUserDocument(userAuth);
      this.setState({ user });
    });


  };

  render() {
    const { user } = this.state;

    return (
      <UserContext.Provider value={user}>
        {this.props.children}
      </UserContext.Provider>
    );
  }
}

export default UserProvider;