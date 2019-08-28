import React from 'react';

class Fetcheg extends React.Component{
constructor(){
    super();
    this.state={
        count: 0,
        test:0,
        character:{}
    };
}
componentDidMount(){
    fetch("https://swapi.co/api/people/1")
    .then(response =>  response.json())
    .then(data => {
        this.setState({
            character: data
        })
    })
    
}

render(){
    return(
        <div>
            <p>{this.state.character.height  }</p>
            <p>{this.state.character.name  }</p>
            {/* <h1>this.setState.count : {this.state.count}</h1>
            <h1>this.prevState.test : {this.state.test}</h1> */}
        </div>
    );
}
}

export default Fetcheg;