import React from 'react';

class IsLoggedin extends React.Component{
constructor(){
    super();
    this.state={
        IsLoggedin: true,
    };

}
render(){

    let wordDisplay;
    if(this.state.IsLoggedin)
    {
        wordDisplay = "in";
    }
    else{
        wordDisplay = "out";
    }
    return(
        <div>
            <h1> is logged in : {wordDisplay}</h1>
             
        </div>
    );
}
}

export default IsLoggedin;