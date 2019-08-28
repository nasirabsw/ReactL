import React from 'react';

class Compdidmount extends React.Component{
constructor(){
    super();
    this.state={
        text: "state",
        
    };
}

componentDidMount(){
    this.setState({
        text: "Component Did mount"
    })
}
componentWillMount(){
    this.setState({
        text: "Component will mount"
    })
}

shouldComponentUpdate(nextProps, nextState){
        this.setState({
            text: "shouldComponent update"
        })
    }


render(){
    return(
        <div>
            <h1>this.setState.count : {this.state.text}</h1>
           
        </div>
    );
}
}

export default Compdidmount;