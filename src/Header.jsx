import React, { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { BsFillPersonFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { auth } from "./Fire";
import "./Header.css";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
} from "reactstrap";
import SearchIcon from "@material-ui/icons/Search";

const Example = (props) => {
  
  const [isOpen, setIsOpen] = useState(false);
  const [{ basket, user }, dispatch] = useStateValue();

  user?console.log(user.email):console.log("ok")

  const logout = () => {
    if (user) {
      auth.signOut();
    }
  };

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color='dark' dark light expand='md'>
        <Link to='/'>
          <NavbarBrand color='black'>OSI Digital Store</NavbarBrand>
        </Link>
        <Link to='/contact'>
          <NavbarBrand color='black'>Profile</NavbarBrand>
        </Link>
        <div className='header__search'>
          <input className='header__searchInput' />
          <SearchIcon className='header__searchIcon' />
        </div>

        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className='ml-auto' navbar>
            <NavItem>
              <Link to='/cart'>
                <span className='text-white'>My Cart</span>
                <FaShoppingCart style={{ color: "#61ff4e" }} className='mx-1' />
                <span className='text-white'>{basket?.length}</span>
              </Link>
              <Link to={!user && "/login"}>
                <span onClick={logout}>
                  <span className='text-white mx-5'>
                    <span className='mx-1'>
                      {user ? user.displayName + " Sign out " : "Sign In"}
                    </span>
                    <BsFillPersonFill
                      className=''
                      style={{ color: "#61ff4e" }}
                    />
                  </span>
                </span>
              </Link>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};


export default Example;

