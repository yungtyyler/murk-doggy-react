import { useState } from 'react';
import {
    Navbar,
    NavbarBrand,
    Collapse,
    NavbarToggler,
    Nav,
    NavItem,
    Col,
} from 'reactstrap';
import { NavLink } from 'react-router-dom'; 
import MurkDoggyLogo from '../app/assets/img/MURK_DOGGY_LOGO.png';

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    
    return (
        <Navbar dark color='primary' sticky='top' expand='md'>
            <NavbarBrand className='ms-5' href='/'>
                <img src={MurkDoggyLogo} className='float-start' alt='Murk Doggy Logo' />
                <h1 className='mt-1'>Murk Doggy Loyalty</h1>
            </NavbarBrand>

            <NavbarToggler onClick={() => setMenuOpen(!menuOpen)} />
            <Collapse isOpen={menuOpen} navbar>
                <Nav className='ms-auto' navbar>
                    <NavItem>
                        <NavLink className='nav-link' to='/'>
                            <i className='fa fa-lg fa-home'>Home</i>
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className='nav-link' to='#'>
                            <i className='fa fa-lg fa-bath'>Wash</i>
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className='nav-link' to='#'>
                            <i className='fa fa-lg fa-bell'>Victor Hi Pro Plus</i>
                        </NavLink>
                    </NavItem>
                </Nav>
            </Collapse>
        </Navbar>
    );
}

export default Header;