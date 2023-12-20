import React from 'react';
import { Component } from 'react';


import {
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBCardImage,
    MDBBtn,
    MDBRipple
  } from 'mdb-react-ui-kit';

class Card extends Component {
  
    render() { 
        return (
            <>
            <MDBCard>
    <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
      <MDBCardImage src={this.props.img} fluid alt='...' />
      <a>
        <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
      </a>
    </MDBRipple>
    <MDBCardBody>
      <MDBCardTitle>{this.props.title}</MDBCardTitle>
      <MDBCardText>
        Some quick example text to build on the card title and make up the bulk of the card's content.
      </MDBCardText>
      <MDBBtn href='#'>Button</MDBBtn>
    </MDBCardBody>
  </MDBCard>
          </>
        );
    }
}
 
export default Card;