import React from "react";
import { Container, Navbar } from "react-bootstrap";

const MenuBar = () => {
    return (
        <>
            {" "}
            <Navbar className="sticky-top nav" bg="light">
                <Container>
                    <Navbar.Brand>
                        <a className="nav-logo" href="/">Asad</a>
                    </Navbar.Brand>
                </Container>
            </Navbar>
        </>
    );
};

export default MenuBar;
