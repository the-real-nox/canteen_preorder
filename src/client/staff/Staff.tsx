import { Navbar, Container, Nav, NavDropdown, FormControl } from "react-bootstrap"; import { FaUserAlt } from "react-icons/fa";
import { Order } from "./Order";
import { DateTime } from "luxon";
"react-bootstrap";

export function Page() {

    return (
        <>
            <div className="vw-100 vh-100">
                <Navbar expand="lg" className="purple vw-100">
                    <Container fluid>
                        <div className="d-flex align-items-center w-100">
                            <div className="d-flex align-items-center gap-3">
                                <Navbar.Brand href="/staff" className="text-white">Canteen-Preorder</Navbar.Brand>
                                <FormControl className="purple" placeholder="Search..." />
                            </div>
                            <Nav className="ms-auto">
                                <Nav.Link href="/products" className=" text-white">Products</Nav.Link>
                                <Nav.Link>
                                    <FaUserAlt className="fs-4 text-white" />
                                </Nav.Link>
                            </Nav>
                        </div>
                    </Container>
                </Navbar>

                <div className="text-center m-2">
                    <div className="d-flex">
                        <p className="mb-1">Orders</p>
                    </div>
                    <hr className="m-0" />
                </div>

                <div className="d-flex m-2 flex-wrap gap-3 justify-content-start">
                    <Order obj="Burger" user="Georg Kollegger" time={DateTime.now()} />
                    <Order obj="Semmel" user="Marko Kushlyk" time={DateTime.now()} />
                    <Order obj="Hendl" user="Fabian Brandstätter" time={DateTime.now()} />
                    <Order obj="Lasagne" user="Bono Bakos" time={DateTime.now()} />
                </div>
            </div>
        </>
    )
}