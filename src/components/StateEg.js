import React from 'react';
import ChildComp from './ChildComp';

class StateEg extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            answer: "No",
        }
}
render(){
    return(
        <div>
            <p> this is from constructor: {this.state.answer}</p>
            <ChildComp answer =    {this.state.answer} />
        </div>
    );
}
}
export default StateEg;
