import React , {Component} from 'react';

class State_1 extends React{
    constructor(){
        super();
        this.state ={
            answer: "yes",
        }
}
render(){
    return(
        <div>
            <p> this is from constructor: {this.state.answer}</p>
        </div>
    );
}
}
export default State_1;
