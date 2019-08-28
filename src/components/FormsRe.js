import React from 'react';
'

class FormsRe extends React.Component{
constructor(){
    super();
    this.state={
      firstname: "",
      lastname: "",
    };
    this.handleChange = this.handleChange.bind(this);
}

handleChange(event){
    const {name, value} =event.target
    this.setState({
        //firstname: event.target.value,
        //[event.target.name]: event.target.value
        [name]: value   

    })
}


render(){
    return(
        <form>
            <input type="text" value={this.state.firstname} placeholder="Firstname" onChange={this.handleChange}/>
            <input type="text" value={this.state.lastname} placeholder="Lastname" onChange={this.handleChange}/>
            <h1> {this.state.firstname} </h1>

        </form>
    );
}
}

export default FormsRe;