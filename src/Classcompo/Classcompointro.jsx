import React, { Component } from 'react';

 
class Classcompointro extends Component {

    render() { 
        return (
            <>
              <h1>class Component intro</h1>
               <p>{this.props.user.name}</p>
            </>
        );
    }
}
 
export default Classcompointro;    