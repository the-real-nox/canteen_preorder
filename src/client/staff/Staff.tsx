import { Navbar, Container, Nav, NavDropdown, FormControl } from "react-bootstrap"; import { FaUserAlt } from "react-icons/fa";
import { Order } from "./Order";
import { DateTime } from "luxon";
import { JSX, useEffect, useState } from "react";

"react-bootstrap";

interface OrderItem {
    id: number,
    obj: string,
    user: string,
    time: DateTime
}

let idCounter = 0;
const doGenID = () => idCounter++;

const data = [
    { id: doGenID(), obj: 'Burger', user: 'Georg Kollegger', time: DateTime.now() },
    { id: doGenID(), obj: 'Semmel', user: 'Marko Kushlyk', time: DateTime.now() },
    { id: doGenID(), obj: 'Hendl', user: 'Fabian Brandstätter', time: DateTime.now() },
    { id: doGenID(), obj: 'Lasagne', user: 'Bono Bakos', time: DateTime.now() },
]

export function StaffPage() {

    const [renderedItems, setRenderedItems] = useState<OrderItem[]>(Array.from(data));

    let onComplete = (id: number) => {
        setRenderedItems(renderedItems.filter(v => v.id != id));
    };

    useEffect(() => {
        const handleKeyPress = (event: KeyboardEvent) => {
            console.log(event.key);
            if (event.key === 'Enter' && event.shiftKey) {
                let element = {...data[Math.floor(Math.random() * data.length)], id: doGenID()};
                setRenderedItems(v => [...v, element])
            }
        };

        window.addEventListener('keydown', handleKeyPress);

        return () => {
            window.removeEventListener('keydown', handleKeyPress);
        };
    }, []); 


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
                    {
                        renderedItems.map(d =>
                            <Order user={d.user} obj={d.obj} id={d.id} time={d.time} onClick={onComplete} />
                        )
                    }
                </div>
            </div>
        </>
    )
}