import React, {Component} from "react";
import TextBox from "../../component/UI/textbox/textbox";
import Button from "../../component/UI/butoon/button";
import Alert from "./../../component/Alerts/alert";
import axios from "axios";

class Loginform extends Component {
  host = `https://localhost:44387/api/login`;

  state = {
    username: "",
    password: "",
    alert: {},
    isAuthenticated: null
  };

  inputChangeHandler = event => {
    this.setState({[event.target.name.toLowerCase()]: event.target.value});
  };

  validateInputs = (username, password) => {
    if (username === "" || password === "") {
      this.setState({
        alert: {
          type: "warning",
          message: "Username or password can't be empty."
        }
      });
      //if non-validate input.
      return false;
    } else {
      //if validate input.
      return true;
    }
  };

  onSubmit = () => {
    const username = this.state.username;
    const password = this.state.password;
    const isValidateInput = this.validateInputs(username, password);
    if (isValidateInput) {
      axios
        .post(this.host, {
          UserName: username,
          Password: password
        })
        .then(res => {
          const isAuthenticated = res.data;
          let alert = {};
          if (isAuthenticated) {
            alert = {
              type: "success",
              message: "Wellcome to fannex. You are successfuly logged in."
            };
          } else {
            alert = {
              type: "danger",
              message: "Username or password doesn't match our records."
            };
          }
          this.setState({isAuthenticated: isAuthenticated, alert: alert});
        })
        .catch(res => {
          let alert = {
            type: "danger",
            message: "Opps. Connection error!!!"
          };
          this.setState({alert: alert});
        });
    }
  };
  render() {
    return (
      <div className="container">
        <form>
          <div className="card text-black bg-light-gray mb-2">
            <div className="card-header text-center">
              <h2>Fannex Login</h2>
            </div>
            <div className="card-body">
              <div className="row justify-content-md-center">
                <TextBox
                  type="text"
                  name="Username"
                  value={this.state.username}
                  onChange={this.inputChangeHandler}
                />
              </div>
              <div className="row justify-content-md-center">
                <TextBox
                  type="password"
                  name="Password"
                  value={this.state.password}
                  onChange={this.inputChangeHandler}
                />
              </div>
              <div className="row justify-content-md-center">
                <Button type="button" value="LogIn" onClick={this.onSubmit} />
              </div>
            </div>
          </div>
        </form>
        {this.state.alert.type !== undefined ? (
          <Alert
            type={this.state.alert.type}
            message={this.state.alert.message}
          />
        ) : null}
      </div>
    );
  }
}

export default Loginform;
