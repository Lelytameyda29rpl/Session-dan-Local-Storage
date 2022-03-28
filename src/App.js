import React from 'react';
import Utama from'./Component/utama';
import {Link} from 'react-router-dom';
import { Container, Nav, Navbar } from 'react-bootstrap'

class App extends React.Component {
  render(){
    return(
      <div> 
      <Navbar bg="dark" variant="dark">
        <Container>
        <Navbar.Brand href="/">Biodata Diri</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="/">Beranda</Nav.Link> 
          <Nav.Link href="/tentangsaya">Tentang Saya</Nav.Link> 
          <Nav.Link href="/karya">Karya</Nav.Link> 
          <Nav.Link href="/kontak">Kontak</Nav.Link> 
          <Nav.Link href="/gallery">Gallery</Nav.Link>
          <Nav.Link href="/cart">Data Pembelian</Nav.Link> 
          </Nav>
          </Container>
          </Navbar>
          <p><Utama /></p>
      </div>
    );
  }
}

export default App;