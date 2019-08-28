import React from 'react';

class SetStateEg extends React.Component{
constructor(){
    super();
    this.state={
        count: 0,
        test:0,
    };
 this.ClickEve = this.ClickEve.bind(this);
}
ClickEve(){
  //  this.setState({count: 1});      
    this.setState(prevState => {
        return{
            test: prevState.count,
            count: prevState.count+1
        }

    })
    
}
render(){

   
    return(
        <div>
            <h1>this.setState.count : {this.state.count}</h1>
            <h1>this.prevState.test : {this.state.test}</h1>
            <button onClick={this.ClickEve}>On click</button>
        </div>
    );
}
}

export default SetStateEg;