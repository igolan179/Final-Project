import React, { Component } from 'react';
import {
    Button, Card, CardFooter, CardBody, CardGroup, Col, Container, Form,
    Input, InputGroup, InputGroupAddon, InputGroupText, Row
} from 'reactstrap';
class Register_Temp extends Component {
    constructor() {
        super();
        this.state = {
            CustomerId: '',
            CustomerPass: '',
            CustomerName: '',
            CustomerPhone: '',
        }
        this.CustomerId = this.CustomerId.bind(this);
        this.CustomerPass = this.CustomerPass.bind(this);
        this.CustomerName = this.CustomerName.bind(this);
        this.CustomerPhone = this.CustomerPhone.bind(this);
        this.register = this.register.bind(this);
    }

    CustomerId(event) {
        this.setState({ CustomerId: event.target.value })
    }
    CustomerPass(event) {
        this.setState({ CustomerPass: event.target.value })
    }
    CustomerName(event) {
        this.setState({ CustomerName: event.target.value })
    }
    CustomerPhone(event) {
        this.setState({ CustomerPhone: event.target.value })
    }

    register(event) {
        fetch('https://localhost:44361/api/login/InsertCustomer', {
            method: 'post',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                CustomerId: this.state.CustomerId,
                CustomerPass: this.state.CustomerPass,
                CustomerName: this.state.CustomerName,
                CustomerPhone: this.state.CustomerPhone
            })
        }).then((Response) => Response.json())
            .then((Result) => {
                if (Result.Status == 'Success');
                else
                    alert('Sorrrrrry !!!! Un-authenticated User !!!!!')
            })
    }

    render() {

        return (
            <div className="app flex-row align-items-center">
                <Container>
                    <Row className="justify-content-center">
                        <Col md="9" lg="7" xl="6">
                            <Card className="mx-4">
                                <CardBody className="p-4">
                                    <Form>
                                        <div class="row" className="mb-2 pageheading">
                                            <div class="col-sm-12 btn btn-primary">
                                                Sign Up
                        </div>
                                        </div>
                                        <InputGroup className="mb-3">
                                            <Input type="text"
                                                onChange={this.CustomerId} placeholder="Enter Username" />
                                        </InputGroup>
                                        <InputGroup className="mb-3">
                                            <Input type="password"
                                                onChange={this.CustomerPass} placeholder="Enter Password" />
                                        </InputGroup>
                                        <InputGroup className="mb-4">
                                            <Input type="text"
                                                onChange={this.CustomerName} placeholder="Enter Name" />
                                        </InputGroup>
                                        <InputGroup className="mb-4">
                                            <Input type="text"
                                                onChange={this.CustomerPhone} placeholder="Enter Phone" />
                                        </InputGroup>
                                        <Button onClick={this.register}
                                            color="success" block>Create Account</Button>
                                    </Form>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}
export default Register_Temp;
