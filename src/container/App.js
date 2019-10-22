import React, {Component} from "react";
import LoginForm from "./loginform/loginform";
import "./App.Module.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <LoginForm />
      </div>
    );
  }
}

export default App;
