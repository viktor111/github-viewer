import './App.css';
import CardList from "./components/CardList.js"
import Form from "./components/Form.js"
import React from "react"

class App extends React.Component{
  state = {
    profiles:[]
  }

  addNewProfile = profileData => {
    this.setState(prevState => ({
      profiles: [...prevState.profiles, profileData]
    }));
  }

  render(){
    return (
      <div className="App container">
          <Form onSubmit={this.addNewProfile}/>
          <CardList profiles={this.state.profiles}/>
      </div>
    );
  }
}
export default App;
