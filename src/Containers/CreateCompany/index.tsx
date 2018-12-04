import * as React from "react";
import { Mutation } from "react-apollo";
import { Form, Button, FormGroup, Label, Input } from "reactstrap";
import gql from "graphql-tag";

// GraphQL
import { createCompany } from "../../graphql/mutations";
import {
  CreateCompanyMutation,
  CreateCompanyMutationVariables
} from "../../API";

interface IFormValues {
  name: string;
  address?: string;
  state?: string;
  country?: string;
  size?: string;
}

export default class CreateCompany extends React.Component<{}, IFormValues> {
  state: IFormValues = {
    name: "",
    address: "",
    state: "",
    country: "",
    size: ""
  };

  handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    const { name, value }: { name: string; value: string } = e.currentTarget;
    switch (name) {
      case "name":
        this.setState({ name: value });
        break;
      case "address":
        this.setState({ address: value });
        break;
      case "state":
        this.setState({ state: value });
        break;
      case "country":
        this.setState({ country: value });
        break;
      case "size":
        this.setState({ size: value });
        break;
      default:
        break;
    }
  };

  render() {
    const { name, address } = this.state;

    return (
      <Mutation<CreateCompanyMutation, CreateCompanyMutationVariables>
        mutation={gql(createCompany)}
      >
        {(createCompanyMutation, { loading, error }) => (
          <Form
            onSubmit={e => {
              e.preventDefault();
              createCompanyMutation({
                variables: {
                  input: {
                    name,
                    address
                  }
                }
              });
            }}
          >
            <FormGroup>
              <Label for="companyName">Name</Label>
              <Input
                type="text"
                name="name"
                id="companyName"
                placeholder="Company name"
                onChange={this.handleChange}
              />
            </FormGroup>
            <FormGroup>
              <Label for="companyAddress">Address</Label>
              <Input
                type="text"
                name="address"
                id="companyAddress"
                placeholder="Company address"
                onChange={this.handleChange}
              />
            </FormGroup>
            <Button>Create Company</Button>
            {loading && <p>Loading...</p>}
            {error && <p>Error :( Please try again</p>}
          </Form>
        )}
      </Mutation>
    );
  }
}
