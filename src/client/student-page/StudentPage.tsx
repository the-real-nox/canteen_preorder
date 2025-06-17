import {Container, Nav, Navbar, NavDropdown} from "react-bootstrap";
import "../css/student-page.css";
import "../App.css"
import React, {useState} from "react";
import {FaUserAlt} from "react-icons/fa";
import {FoodContainer} from "./FoodContainer";

export const StudentPage = () => {
    const [searchValue, setSearchValue] = useState("");

    return (
        <>
            <div className={"vw-100 vh-100"}>
                <Navbar expand="lg" className="purple vw-100">
                    <Container>
                        <div className="d-flex justify-content-start">
                            <Navbar.Brand href="/loginStaff" className={"text-white"}>Canteen-Preorder</Navbar.Brand>
                            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                            <input
                                type="text"
                                placeholder="Search..."
                                className={"searchBar text-black"}
                                onChange={(e) => setSearchValue(e.target.value)}
                            />
                        </div>
                        <div className="d-flex justify-content-end">
                            <Navbar.Collapse id="basic-navbar-nav">
                                <Nav className="me-auto">
                                    <Nav.Link href="/news" className={"text-white"}>News</Nav.Link>
                                    <Nav.Link href="/history" className={"text-white"}>History</Nav.Link>
                                    <Nav className="ms-auto">
                                        <Nav.Link href="/login">
                                            <FaUserAlt className={"fs-4 text-white"}/>
                                        </Nav.Link>
                                    </Nav>
                                </Nav>
                            </Navbar.Collapse>
                        </div>
                    </Container>
                </Navbar>
                <FoodContainer searchValue={searchValue}/>
            </div>
        </>
    );
};