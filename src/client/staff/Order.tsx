import { DateTime } from "luxon";
import { Col, Container, Row } from "react-bootstrap";
import { Button } from "../components/Button";

interface OrderProps {
    user: string,
    time: DateTime,
    obj: string
}

export function Order({ user, time, obj }: OrderProps) {
    return (
        <div>
            <Container className="bg-light min-width rounded border d-flex flex-column justify-content-center" style={{ width: "10vw" }}>
                <p className="m-0 fs-4 text-center fw-bold">{obj}</p>
                <Row>
                    <Col xs={4}>By</Col>
                    <Col xs={4} className="text-start fst-italic">{user}</Col>
                </Row>
                <Row>
                    <Col xs={4}>Time</Col>
                    <Col xs={4} className="text-start fst-italic">{time.toFormat("HH:mm:ss")}</Col>
                </Row>
                <a href="" className="text-center" style={{ color: "#9c5daa" }}>View details</a>
                <Button className="m-2">Complete</Button>
            </Container>
        </div>
    )
}