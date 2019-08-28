import React from 'react';

class CheckboxTest extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            completed: "test",
        };
    }

    render(){
        return(
            <div>
                <input type = "checkbox" checked ={this.state.completed} onChanged={()=> console.log("changed!")} />
                <p>{this.state.completed}</p>
            </div>  
        );
    }
}
export default CheckboxTest;