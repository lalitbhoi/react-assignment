import React from 'react';
import { Component } from 'react';
import Card from './Card';


class Maincard extends Component {
   
    render() { 
        return (
            <>
            <Card img ="https://picsum.photos/id/237/200/300" title = "hello frind"/>
            <Card img ="https://picsum.photos/seed/picsum/200/300" title = "hello frind"/>
            <Card img ="https://picsum.photos/200/300/?blur=2" title = "hello frind"/>
            </>

        );
    }
}
 
export default Maincard;
