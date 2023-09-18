import React, { useContext, useState } from 'react';
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBBtn,
  MDBCollapse,
} from 'mdb-react-ui-kit';
import { Productcontext } from '../../Context';
import { useNavigate } from 'react-router-dom';

export default function AdmiNav() {
  const  nvigate = useNavigate()
    const {admin} = useContext(Productcontext)
  const [showBasic, setShowBasic] = useState(false);

  return (
    <MDBNavbar expand='lg' light bgColor='light'>
      <MDBContainer fluid>
        <MDBNavbarBrand href='#'>Admin Panel</MDBNavbarBrand>

        <MDBNavbarToggler
          aria-controls='navbarSupportedContent'
          aria-expanded='false'
          aria-label='Toggle navigation'
          onClick={() => setShowBasic(!showBasic)}
        >
          <MDBIcon icon='bars' fas />
        </MDBNavbarToggler>

        <MDBCollapse navbar show={showBasic}>
          <MDBNavbarNav className='mr-auto mb-2 mb-lg-0'>
            <MDBNavbarItem>
              <MDBNavbarLink active aria-current='page' href='#' onClick={()=> nvigate('/Allproduct')}>
                All Products
              </MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink active aria-current='page' href='#' onClick={()=> nvigate('/Alloerders')}>
                All Oders
              </MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink active aria-current='page' href='#' onClick={()=> nvigate('/Users')}>
                All Users
              </MDBNavbarLink>
            </MDBNavbarItem>
           

            <MDBNavbarItem>
             
            </MDBNavbarItem>

            
          </MDBNavbarNav>
            {admin ? (
                <MDBBtn className='w-25' onClick={()=> nvigate('/')}>Log out</MDBBtn>
                
                ):(

                <MDBBtn className='w-25'  onClick={()=> nvigate('/')}>LogIn</MDBBtn>
                )}

          
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
  );
}