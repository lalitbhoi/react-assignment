import React from 'react';

import { Component } from 'react';


class Conditionalrendering extends Component {

    constructor(){
        super()
        this.state ={
            islogin : true
        }
    }
   
    render() {
      
      return this.state.islogin &&  <><div><h1>wellcome top</h1></div></> 

      // return  this.state.islogin   ?  <><div><h1>wellcome top</h1></div></> :
      // <><div><h1>wellcome guest</h1></div></>



      // let = data
      // if(this.state.islogin){
      //   data = <><div><h1>wellcome top</h1></div></>
      // }
      // else{
      //   data = <><div><h1>wellcome guest</h1></div></>
      // }

      // return data



        // if(this.state.islogin){
        //   return<><h1>wellcome top</h1></>
        // }
        // else{
        //   return<><h1>wellcome guest</h1></>
        // }



    //     return (

    //       <>
    //         <h1>wellcome top</h1>
    //         <h1>wellcome guest</h1>
    //       </>

    //     );
    }
}
 
export default Conditionalrendering;