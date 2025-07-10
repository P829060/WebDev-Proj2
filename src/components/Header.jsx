'use client'; 

import React from 'react';
import Container from 'react-bootstrap/Container';
import { Nav, Navbar } from 'react-bootstrap';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Header() {
  const pathname = usePathname();

  return (
    <>
      <Navbar collapseOnSelect expand="md" bg="dark" data-bs-theme="dark" className="px-5">
        <Container fluid>
          <Navbar.Brand as={Link} href="/">Best Footballers</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link as={Link} href="/" className={`px-3 ${pathname === '/' ? 'active' : ''}`}>Home</Nav.Link>
              <Nav.Link as={Link} href="/Top10" className={`px-3 ${pathname === '/Top10' ? 'active' : ''}`}>Top 10</Nav.Link>
              <Nav.Link as={Link} href="/About" className={`px-3 ${pathname === '/About' ? 'active' : ''}`}>About</Nav.Link>
              <Nav.Link as={Link} href="/Contact" className={`px-3 ${pathname === '/Contact' ? 'active' : ''}`}>Contact</Nav.Link>
              <Nav.Link as={Link} href="/Reviews" className={`px-3 ${pathname === '/Reviews' ? 'active' : ''}`}>Reviews</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
