import React from 'react';
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardHeader,
  MDBCardFooter,
  MDBBtn
} from 'mdb-react-ui-kit';

import '../App.css';


const Pricing = () => {
  return (
    <div className="main-div">
      <MDBCard className="main-card" alignment='center'>
        <MDBCardHeader>Featured</MDBCardHeader>
        <MDBCardBody>
          <MDBCardTitle>Special title treatment</MDBCardTitle>
          <MDBCardText>With supporting text below as a natural lead-in to additional content.</MDBCardText>
          <MDBBtn href='#'>Button</MDBBtn>
        </MDBCardBody>
        <MDBCardFooter className='text-muted'>2 days ago</MDBCardFooter>
      </MDBCard>

      <MDBCard className="main-card" alignment='center'>
        <MDBCardHeader>Featured</MDBCardHeader>
        <MDBCardBody>
          <MDBCardTitle>Special title treatment</MDBCardTitle>
          <MDBCardText>With supporting text below as a natural lead-in to additional content.</MDBCardText>
          <MDBBtn href='#'>Button</MDBBtn>
        </MDBCardBody>
        <MDBCardFooter className='text-muted'>2 days ago</MDBCardFooter>
      </MDBCard>


      <MDBCard className="main-card" alignment='center'>
        <MDBCardHeader>Featured</MDBCardHeader>
        <MDBCardBody>
          <MDBCardTitle>Special title treatment</MDBCardTitle>
          <MDBCardText>With supporting text below as a natural lead-in to additional content.</MDBCardText>
          <MDBBtn href='#'>Button</MDBBtn>
        </MDBCardBody>
        <MDBCardFooter className='text-muted'>2 days ago</MDBCardFooter>
      </MDBCard>

    </div>
  );
}

export default Pricing;
