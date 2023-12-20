import React from 'react';
import { Component } from 'react';
class Listsandkeys extends Component {

    constructor() {
        super()
        this.state = {
            item: [1, 2, 3, 4, 5]
        }
    }

    Add = () => {
        this.setState({
            item: [8, 7, 6, 1, 2, 3, 4, 5]
        })
    }
    state = {}
    render() {

        // let item = [1,2,3,4,5,]
        let items = this.state.item.map((list) => <li key={list.tostring}>{list}</li>)
        return (
            <>
                {/* <ul>
                <li>1</li>
                <li>2</li>
                <li>3</li>
                <li>4</li>
                <li>5</li>
            
            </ul> */}
                <ul>
                    {items}
                </ul>
                <button onClick={this.Add}>add</button>
                <h3>{this.props.name}</h3>
            </>
        );
    }
}

export default Listsandkeys;