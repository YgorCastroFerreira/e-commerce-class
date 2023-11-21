import React, {Component} from "react";
import Header from "../../components/Header/Header";

export default class Payment extends Component{
    state = {
        count: 0,
    }
    
    render(){
        return(
            <div className="pay">
                <Header/>

            </div>
        )
    }
}