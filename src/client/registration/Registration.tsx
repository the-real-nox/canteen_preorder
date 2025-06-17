import { Form } from "react-bootstrap";
import { Button } from "../components/Button";

export function Registration() {
    return (
        <div className="vw-100 vh-100 d-flex justify-content-center align-items-center">
            <Form className="border p-3 rounded">
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>First name</Form.Label>
                    <Form.Control type="text" placeholder="First-name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Last name</Form.Label>
                    <Form.Control type="text" placeholder="Last-name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Accept terms of use" required/>
                </Form.Group>
                <Button>
                    Submit
                </Button>
            </Form>
        </div>
    )
}