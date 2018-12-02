import * as React from "react";
import { Button, FormGroup, Label, Input } from "reactstrap";

interface IState {
  email: string;
  password: string;
}

export default class LoginForm extends React.Component<{}, IState> {
  state: IState = {
    email: "",
    password: ""
  };

  handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    const { name, value }: { name: string; value: string } = e.currentTarget;
    if (name === "email") {
      this.setState({
        email: value
      });
    } else if (name === "password") {
      this.setState({
        password: value
      });
    }
  };

  render() {
    const { email, password } = this.state;
    return (
      <div>
        <FormGroup>
          <Label for="userEmail">Email</Label>
          <Input
            type="email"
            name="email"
            value={email}
            id="userEmail"
            placeholder="Email"
            onChange={this.handleChange}
          />
        </FormGroup>
        <FormGroup>
          <Label for="userPassword">Password</Label>
          <Input
            type="password"
            name="password"
            value={password}
            id="userPassword"
            placeholder="Password"
            onChange={this.handleChange}
          />
        </FormGroup>
        <Button>Sign in</Button>
      </div>
    );
  }
}
