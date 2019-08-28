import React from 'react';

class ChildComp extends React.Component{
    constructor(){
        super();
        this.state ={
            answer: "yes",
        }
      
}
render(){
    return(
        <div>
            <p> this is from ChildConst constructor: {this.props.answer}</p>
            <p> this is from ChildConst constructor: {this.state.answer}</p>
        </div>
    );
}
}
export default ChildComp;
