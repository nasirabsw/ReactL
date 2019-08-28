import React, { Component } from 'react';
import { createStore } from 'redux';

class Reduxdemo extends React.Component{
    constructor(){
        super()
    }
    render(){
        const reducer = function(state, action){
            if(action.type === "ATTACk"){
                console.log(action.payload);
                return action.payload
            }
            if(action.type === "GreenATTACK"){
                console.log(action.payload);
                return action.payload
            }
            return state;
        }

        const store = createStore(reducer, "Peace");
            store.subscribe(() =>{
            console.log("store is now", store.getState()); 
            })

        store.dispatch({type: "ATTACk", payload: "Ironman"})
        store.dispatch({type: "GreenATTACK", payload: "Hulk"})
            
        return(
            <div>
                <p>this is test</p> 
            </div>
        );
    }
    }
    
    export default Reduxdemo;