import React from 'react';
import MurkDoggyLogo from './app/assets/img/MURK_DOGGY_LOGO.png';
import { Container, Navbar, NavbarBrand } from 'reactstrap';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar dark color='primary' sticky='top' expand='md'>
          <Container>
              <NavbarBrand href='/'>
                  <img src={MurkDoggyLogo} alt='Murk Doggy logo' />
              </NavbarBrand>
          </Container>
      </Navbar>
      Murk Doggy Loyalty Program
    </div>
  );
}

export default App;
